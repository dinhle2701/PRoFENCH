// getData.js

/**
 * Tìm thông tin ảnh từ sample_ID trong toàn bộ dataset
 * @param {string} sampleId - Ví dụ: "0_0001"
 * @returns {Object|null}
 */
export async function getData(sampleId) {
    try {
        for (let csvIndex = 0; csvIndex < 8; csvIndex++) {

            const csvPath = `/train/csi/csi_${csvIndex}.csv`;

            const response = await fetch(csvPath);

            if (!response.ok) {
                console.warn(`Không đọc được ${csvPath}`);
                continue;
            }

            const csvText = await response.text();

            const rows = csvText
                .split('\n')
                .map(row => row.trim())
                .filter(Boolean);

            if (rows.length === 0) continue;

            const headers = rows[0].split(',');

            const sampleIdIndex = headers.findIndex(
                h => h.trim() === 'sample_ID'
            );

            if (sampleIdIndex === -1) {
                console.warn(`Không tìm thấy cột sample_ID trong ${csvPath}`);
                continue;
            }

            for (let rowIndex = 1; rowIndex < rows.length; rowIndex++) {

                const cols = rows[rowIndex].split(',');

                const currentSampleId =
                    cols[sampleIdIndex]?.trim();

                if (currentSampleId === sampleId) {

                    const folderId = sampleId.split('_')[0];

                    const imagePath =
                        `/train/images/images_${folderId}/${sampleId}.jpg`;

                    return {
                        sampleId,
                        csvPath,
                        imagePath,

                        // vị trí trong file csv (bỏ header)
                        position: rowIndex - 1,

                        // dòng thực tế trong csv
                        csvRow: rowIndex,

                        // file csi tìm thấy
                        csvFile: `csi_${csvIndex}.csv`,

                        // thư mục ảnh
                        imageFolder: `images_${folderId}`
                    };
                }
            }
        }

        return null;

    } catch (error) {
        console.error('Lỗi khi tìm dữ liệu:', error);
        return null;
    }
}