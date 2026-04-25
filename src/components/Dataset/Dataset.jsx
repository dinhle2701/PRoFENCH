import React, { useState, useRef, useEffect } from "react"

const base = "/PRoFENCH"

/**
 * Mỗi TAB = 1 dataset
 * Trong mỗi tab:
 * - Cột trái: 7 video CV
 * - Cột phải: 7 video CSI
 *
 * CHỈ CẦN THÊM LINK VIDEO VÀO ĐÂY
 */

const datasets = [
    {
        id: 1,
        name: "Counting People RGB",
        cv: [
            `${base}/datasets/Counting People RGB/cv/zero-people.mp4`,
            `${base}/datasets/Counting People RGB/cv/one-people.mp4`,
            `${base}/datasets/Counting People RGB/cv/two-people.mp4`,
            `${base}/datasets/Counting People RGB/cv/three-people.mp4`,
            `${base}/datasets/Counting People RGB/cv/four-people.mp4`,
            `${base}/datasets/Counting People RGB/cv/five-people.mp4`,
            `${base}/datasets/Counting People RGB/cv/six-people.mp4`,
            `${base}/datasets/Counting People RGB/cv/seven-people.mp4`,
        ],
        csi: [
            `${base}/datasets/Counting People RGB/csi/csi_0people.mp4`,
            `${base}/datasets/Counting People RGB/csi/csi_1people.mp4`,
            `${base}/datasets/Counting People RGB/csi/csi_2people.mp4`,
            `${base}/datasets/Counting People RGB/csi/csi_3people.mp4`,
            `${base}/datasets/Counting People RGB/csi/csi_4people.mp4`,
            `${base}/datasets/Counting People RGB/csi/csi_5people.mp4`,
            `${base}/datasets/Counting People RGB/csi/csi_6people.mp4`,
            `${base}/datasets/Counting People RGB/csi/csi_7people.mp4`,
        ],
    },

    {
        id: 2,
        name: "Counting People IR",
        cv: [
            `${base}/datasets/Counting People IR/cv/zero-people.mp4`,
            `${base}/datasets/Counting People IR/cv/one-people.mp4`,
            `${base}/datasets/Counting People IR/cv/two-people.mp4`,
            `${base}/datasets/Counting People IR/cv/three-people.mp4`,
            `${base}/datasets/Counting People IR/cv/four-people.mp4`,
            `${base}/datasets/Counting People IR/cv/five-people.mp4`,
            `${base}/datasets/Counting People IR/cv/six-people.mp4`,
            `${base}/datasets/Counting People IR/cv/seven-people.mp4`,
        ],
        csi: [
            `${base}/datasets/Counting People IR/csi/csi_0people.mp4`,
            `${base}/datasets/Counting People IR/csi/csi_1people.mp4`,
            `${base}/datasets/Counting People IR/csi/csi_2people.mp4`,
            `${base}/datasets/Counting People IR/csi/csi_3people.mp4`,
            `${base}/datasets/Counting People IR/csi/csi_4people.mp4`,
            `${base}/datasets/Counting People IR/csi/csi_5people.mp4`,
            `${base}/datasets/Counting People IR/csi/csi_6people.mp4`,
            `${base}/datasets/Counting People IR/csi/csi_7people.mp4`,
        ],
    },

    {
        id: 3,
        name: "Human Activity RGB",
        cv: [
            `${base}/datasets/activity/cv/1.mp4`,
            `${base}/datasets/activity/cv/2.mp4`,
            `${base}/datasets/activity/cv/3.mp4`,
            `${base}/datasets/activity/cv/4.mp4`,
            `${base}/datasets/activity/cv/5.mp4`,
            `${base}/datasets/activity/cv/6.mp4`,
            `${base}/datasets/activity/cv/7.mp4`,
        ],
        csi: [
            `${base}/datasets/activity/csi/1.mp4`,
            `${base}/datasets/activity/csi/2.mp4`,
            `${base}/datasets/activity/csi/3.mp4`,
            `${base}/datasets/activity/csi/4.mp4`,
            `${base}/datasets/activity/csi/5.mp4`,
            `${base}/datasets/activity/csi/6.mp4`,
            `${base}/datasets/activity/csi/7.mp4`,
        ],
    },
]

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
                                                {index + 0} Volunteers
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
                                                {index + 0} Volunteers
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