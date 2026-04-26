import React, { useState, useRef, useEffect } from "react"
import { datasets } from "@/data/datasets"

/**
 * Mỗi TAB = 1 dataset
 * Trong mỗi tab:
 * - Cột trái: 7 video CV
 * - Cột phải: 7 video CSI
 *
 * CHỈ CẦN THÊM LINK VIDEO VÀO ĐÂY
 */



const DatasetTabs = () => {
    const [activeTab, setActiveTab] = useState(1)
    const videoRefs = useRef([])

    const current = datasets.find((item) => item.id === activeTab)

    useEffect(() => {
        const forcePlay = (video) => {
            if (!video) return

            video.muted = true
            video.defaultMuted = true
            video.autoplay = true
            video.loop = true
            video.playsInline = true

            const playVideo = () => {
                video.play().catch(() => { })
            }

            playVideo()

            video.addEventListener("pause", playVideo)

            video.addEventListener("ended", () => {
                video.currentTime = 0
                playVideo()
            })
        }

        setTimeout(() => {
            videoRefs.current.forEach((video) => forcePlay(video))
        }, 200)
    }, [activeTab])

    return (
        <div className="dataset container-size text-black">
            <h2 className="text-2xl font-bold mt-12 text-center">Dataset</h2>

            <div className="max-w-[1500px] mx-auto mt-10">

                {/* Tabs */}
                <div className="flex gap-4 border-b mb-10 justify-center flex-wrap">
                    {datasets.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-2 px-8 font-medium transition
              ${activeTab === tab.id
                                    ? "border-b-2 border-black text-black"
                                    : "text-gray-500"
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Current Tab */}
                {current && (
                    <div>
                        <h3 className="text-xl font-semibold text-center mb-8">
                            {current.name}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* CV COLUMN */}
                            <div>
                                <h4 className="text-lg font-bold mb-5 text-center">CV</h4>

                                <div className="space-y-5">
                                    {current.cv.map((video, index) => (
                                        <div key={index} className="mb-12">
                                            <video
                                                ref={(el) => (videoRefs.current[index] = el)}
                                                src={video}
                                                muted
                                                autoPlay
                                                loop
                                                playsInline
                                                controls={false}
                                                preload="auto"
                                                className="w-full h-[220px] object-cover rounded-lg shadow bg-black"
                                            />
                                            <p className="mb-2 font-medium text-sm text-center">
                                                {current.labels?.[index] ?? `${index} VOLUNTEERS`}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CSI COLUMN */}
                            <div>
                                <h4 className="text-lg font-bold mb-5 text-center">CSI</h4>

                                <div className="space-y-5">
                                    {current.csi.map((video, index) => (
                                        <div key={index} className="mb-12">
                                            <video
                                                ref={(el) => (videoRefs.current[index + 7] = el)}
                                                src={video}
                                                muted
                                                autoPlay
                                                loop
                                                playsInline
                                                controls={false}
                                                preload="auto"
                                                className="w-full h-[220px] object-cover rounded-lg shadow bg-black"
                                            />

                                            <p className="mb-2 font-medium text-sm text-center">
                                                {current.labels?.[index] ?? `${index} VOLUNTEERS`}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DatasetTabs