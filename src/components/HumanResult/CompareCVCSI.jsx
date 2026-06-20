import React, { useState, useEffect, useRef } from "react";
import compareJson from "@/utils/compare.json";

const CompareCVCSI = () => {
    const [selectedPackage, setSelectedPackage] = useState(0);

    const cvRef = useRef(null);
    const csiRef = useRef(null);

    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        setCurrentTime(0);
    }, [selectedPackage]);

    const [isDraggingSlider, setIsDraggingSlider] = useState(false);

    const lastUpdateRef = useRef(0);

    // const handleSeek = (e) => {
    //     const now = performance.now();

    //     if (now - lastUpdateRef.current < 16) return;

    //     lastUpdateRef.current = now;

    //     const time = Number(e.target.value);

    //     setCurrentTime(time);

    //     if (cvRef.current) {
    //         cvRef.current.currentTime = time;
    //     }

    //     if (csiRef.current) {
    //         csiRef.current.currentTime = time;
    //     }
    // };

    const compareData = compareJson;
    const allDataWithCount = compareData.map((item, index) => ({
        ...item,
        globalCount: index + 1
    }));

    const packages = [
        ...new Set(compareData.map((item) => item.package))
    ].sort((a, b) => a - b);

    const packageData = compareData.filter(
        (item) => item.package === selectedPackage
    );

    const total = packageData.length;

    const matchCount = packageData.filter(
        (item) => item.status === "MATCH"
    ).length;

    const notMatchCount = total - matchCount;
    const [globalPosition, setGlobalPosition] = useState(1);
    const [highlightRow, setHighlightRow] = useState(null);

    const currentRecord =
        allDataWithCount.find(
            item => item.globalCount === globalPosition
        ) || null;
    const displayData = packageData.map((item) => {
        const globalCount =
            compareData.findIndex(
                (x) =>
                    x.package === item.package &&
                    x.imageName === item.imageName
            ) + 1;

        return {
            imageName: item.imageName,
            csvId: item.sampleId,
            count: globalCount,
            index: item.position,
            status: item.status,
            imagePath: item.imagePath,
            csvPath: item.csvPath
        };
    });
    const handleGlobalSlider = (e) => {
        const value = Number(e.target.value);

        setGlobalPosition(value);

        const record = allDataWithCount.find(
            item => item.globalCount === value
        );

        if (!record) return;

        setHighlightRow({
            package: record.package,
            position: record.position,
            imageName: record.imageName
        });
        setSelectedPackage(record.package);

        const targetTime = record.position;

        if (cvRef.current) {
            cvRef.current.currentTime = targetTime;
        }

        if (csiRef.current) {
            csiRef.current.currentTime = targetTime;
        }
    };

    const rowRefs = useRef({});
    useEffect(() => {

        if (isDraggingSlider) return;

        if (!highlightRow) return;

        const row =
            rowRefs.current[highlightRow.imageName];

        if (row) {
            row.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }

    }, [highlightRow, isDraggingSlider]);

    return (
        <div
            className="dataset container-size text-black"
            id="human_result"
        >
            <h2 className="text-2xl font-bold mt-12 text-center">
                Compare Package Between CV And CSI
            </h2>


            {/* table hiển thị giá trị */}
            <div className="max-w-[1400px] mx-auto mt-10">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 mx-auto">
                        <label className="font-semibold text-center">
                            Package:
                        </label>

                        <select
                            value={selectedPackage}
                            onChange={(e) =>
                                setSelectedPackage(Number(e.target.value))
                            }
                            className="border rounded px-3 py-2"
                        >
                            {packages.map((pkg) => (
                                <option
                                    key={pkg}
                                    value={pkg}
                                >
                                    Package {pkg}
                                </option>
                            ))}
                        </select>

                        <div className="flex gap-4">
                            <div className="px-4 py-2 rounded bg-gray-100 font-medium">
                                Total: {total}
                            </div>
                            <div className="px-4 py-2 rounded bg-green-100 text-green-700 font-medium">
                                Match: {matchCount}
                            </div>
                            <div className="px-4 py-2 rounded bg-red-100 text-red-700 font-medium">
                                Not Match: {notMatchCount}
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[400px] overflow-auto border rounded shadow-sm">
                        <table className="w-full border-collapse">
                            <thead className="sticky top-0 bg-gray-100 z-10">
                                <tr>
                                    <th className="border px-4 py-2 text-center">
                                        ImageName
                                    </th>
                                    <th className="border px-4 py-2 text-center">
                                        ID (CSV)
                                    </th>
                                    <th className="border px-4 py-2 text-center">
                                        Count
                                    </th>
                                    <th className="border px-4 py-2 text-center">
                                        Index
                                    </th>
                                    <th className="border px-4 py-2 text-center">
                                        Status
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {displayData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            highlightRow &&
                                                highlightRow.package === selectedPackage &&
                                                highlightRow.imageName === item.imageName
                                                ? "bg-blue-200 border-2 border-yellow-500"
                                                : "hover:bg-gray-50"

                                        }
                                        ref={(el) => {
                                            if (el) {
                                                rowRefs.current[item.imageName] = el;
                                            }
                                        }}
                                    >
                                        <td className="border px-4 py-2 text-center">
                                            {item.imageName}
                                        </td>
                                        <td className="border px-4 py-2 text-center">
                                            {item.csvId}
                                        </td>
                                        <td className="border px-4 py-2 text-center">
                                            {item.count}
                                        </td>
                                        <td className="border px-4 py-2 text-center">
                                            {item.index}
                                        </td>
                                        <td className="border px-4 py-2 text-center">
                                            <span
                                                className={
                                                    item.status === "MATCH"
                                                        ? "text-green-600 font-bold"
                                                        : "text-red-600 font-bold"
                                                }
                                            >
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Global Position Slider */}
                    <div className="w-full mt-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">
                                Global Position
                            </span>
                            <span className="font-bold text-blue-600">
                                {/* #{globalPosition} */}
                            </span>
                        </div>
                        {/* <input
                            type="range"
                            min={1}
                            max={allDataWithCount.length}
                            step={1}
                            value={globalPosition}
                            onChange={handleGlobalSlider}
                            className="w-full cursor-pointer"
                        /> */}
                        <input
                            type="range"
                            min={1}
                            max={allDataWithCount.length}
                            step={1}
                            value={globalPosition}
                            onMouseDown={() => setIsDraggingSlider(true)}
                            onMouseUp={() => setIsDraggingSlider(false)}
                            onChange={handleGlobalSlider}
                            className="w-full cursor-pointer"
                        />
                    </div>

                    {currentRecord && (
                        <div className="mt-4 border rounded p-4 bg-gray-50">
                            <div className="font-semibold mb-2">
                                Current Record
                            </div>
                            <div className="grid grid-cols-6 gap-4 text-sm">
                                <div>
                                    <b>Package</b>
                                    <div>{currentRecord.package}</div>
                                </div>
                                <div>
                                    <b>Image</b>
                                    <div>{currentRecord.imageName}</div>
                                </div>
                                <div>
                                    <b>CSV ID</b>
                                    <div>{currentRecord.sampleId}</div>
                                </div>
                                <div>
                                    <b>Count</b>
                                    <div>{currentRecord.globalCount}</div>
                                </div>
                                <div>
                                    <b>Index</b>
                                    <div>{currentRecord.position}</div>
                                </div>
                                <div>
                                    <b>Status</b>
                                    <div
                                        className={
                                            currentRecord.status === "MATCH"
                                                ? "text-green-600 font-bold"
                                                : "text-red-600 font-bold"
                                        }
                                    >
                                        {currentRecord.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompareCVCSI;
