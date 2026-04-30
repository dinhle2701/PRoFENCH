import React, { useState, useEffect, useRef } from "react"
import { datasets } from "@/data/datasets"


const HumanResult = () => {
    const [activeTab, setActiveTab] = useState(1)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const current = datasets.find((item) => item.id === activeTab)

    // reset dropdown khi đổi tab
    useEffect(() => {
        setSelectedIndex(0)
        setCurrentTime(0)
    }, [activeTab])

    const cvRef = useRef(null)
    const csiRef = useRef(null)

    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const handleLoadedMetadata = () => {
        if (cvRef.current) {
            setDuration(cvRef.current.duration)
        }
    }

    const lastUpdateRef = useRef(0)

    const handleSeek = (e) => {
        const now = performance.now()

        // 🔥 chỉ update mỗi 16ms (~60fps)
        if (now - lastUpdateRef.current < 16) return
        lastUpdateRef.current = now

        const time = Number(e.target.value)
        setCurrentTime(time)

        if (cvRef.current) {
            cvRef.current.currentTime = time
        }

        if (csiRef.current) {
            csiRef.current.currentTime = time
        }
    }
    return (
        <div className="dataset container-size text-black" id="human_result">
            <h2 className="text-2xl font-bold mt-12 text-center">
                We provide the visualization human counting in the frame level
            </h2>

            <div className="max-w-[1200px] mx-auto mt-10">

                {/* Tabs */}
                <div className="flex gap-4 border-b mb-8 justify-center flex-wrap">
                    {datasets.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                hover:cursor-pointer
                                hover:text-gray-700
                                pb-2 px-6 font-medium transition
                                ${activeTab === tab.id
                                    ? "border-b-2 border-black text-black"
                                    : "text-gray-500"
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {current && (
                    <div className="flex flex-col items-center gap-6">

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-center">
                            {current.name}
                        </h3>

                        {/* Dropdown */}
                        <select
                            value={selectedIndex}
                            onChange={(e) => setSelectedIndex(Number(e.target.value))}
                            className="border border-none px-2 py-2 rounded-md  text-sm text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition
                            hover:cursor-pointer"
                        >
                            {current.cv.map((_, index) => (
                                <option key={index} value={index} className="text-left">
                                    {current.labels?.[index] ?? `${index} VOLUNTEERS`}
                                </option>
                            ))}
                        </select>

                        {/* Video pair */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-4">

                            {/* CV */}
                            <div className="text-center">
                                <h4 className="font-bold mb-3">CV</h4>
                                <video
                                    ref={cvRef}
                                    src={current.cv[selectedIndex]}
                                    muted
                                    playsInline
                                    onLoadedMetadata={handleLoadedMetadata}
                                    className="w-full h-[320px] object-cover rounded-lg shadow bg-black"
                                />
                            </div>

                            {/* CSI */}
                            <div className="text-center">
                                <h4 className="font-bold mb-3">CSI</h4>
                                <video
                                    ref={csiRef}
                                    src={current.csi[selectedIndex]}
                                    muted
                                    playsInline
                                    onLoadedMetadata={handleLoadedMetadata}
                                    className="w-full h-[320px] object-cover rounded-lg shadow bg-black"
                                />
                            </div>

                        </div>

                        <div className="w-full max-w-[800px] mt-4">
                            <input
                                type="range"
                                min={0}
                                max={duration}
                                step={0.01}
                                value={currentTime}
                                onInput={handleSeek}
                                className="w-full cursor-pointer"
                            />
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default HumanResult