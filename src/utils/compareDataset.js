const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const DATASET =
    "C:\\Users\\Admin\\Desktop\\Resource_Dev\\Project\\Paper\\CPRGB-dataset\\train";

const OUTPUT =
    "C:\\Users\\Admin\\Desktop\\Resource_Dev\\Project\\Paper\\CPRGB-dataset\\compare.json";

const result = [];

function readCSV(filePath) {
    return new Promise((resolve, reject) => {
        const rows = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", row => {
                rows.push(row);
            })
            .on("end", () => {
                resolve(rows);
            })
            .on("error", reject);
    });
}

async function generate() {
    const csiFolder =
        path.join(DATASET, "csi");
    const csvFiles =
        fs.readdirSync(csiFolder)
            .filter(
                f => f.endsWith(".csv")
            );
    for (const csvFile of csvFiles) {
        const packageId =
            csvFile
                .replace("csi_", "")
                .replace(".csv", "");
        console.log(
            "Processing:",
            csvFile
        );
        const rows =
            await readCSV(
                path.join(
                    csiFolder,
                    csvFile
                )
            );
        const imageFolder =
            path.join(
                DATASET,
                "images",
                `image_${packageId}`
            );
        const imageSet = new Set();

        if (fs.existsSync(imageFolder)) {
            fs.readdirSync(imageFolder)
                .filter(
                    f => f.endsWith(".jpg")
                )
                .forEach(file => {

                    imageSet.add(
                        file.replace(".jpg", "")
                    );
                });

        }

        rows.forEach((row, index) => {
            const id =
                row.sample_id;
            const hasImage =
                imageSet.has(id);
            result.push({
                package:
                    Number(packageId),
                imageName:
                    hasImage
                        ? `${id}.jpg`
                        : "-",
                sampleId: id,
                position: index,
                imagePath:
                    `/images/image_${packageId}/${id}.jpg`,
                csvPath:
                    `/csi/${csvFile}`,
                status:
                    hasImage
                        ? "MATCH"
                        : "MISSING_IMAGE"
            });
        });
    }

    fs.writeFileSync(
        OUTPUT,
        JSON.stringify(
            result,
            null,
            2
        )
    );

    console.log(
        "DONE:",
        result.length,
        "records"
    );
}

generate();