import React, { useState, useEffect, useRef } from "react"
import { datasets } from '@/data/datasets'
import Fusion from "../Fusion/Fusion"

const SensorPlatform = () => {
    const [activeTab, setActiveTab] = useState(1)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const current = datasets.find((item) => item.id === activeTab)

    // reset dropdown khi đổi tab
    useEffect(() => {
        setSelectedIndex(0)
    }, [activeTab])


    return (
        <div className='sensor-platform container-size mt-12' id="sensor_platform">
            <h2 className='text-2xl text-black font-bold'>Sensor Platform</h2>

            {/* Fusion */}
            {/* <Fusion /> */}

            <h3 className='text-lg text-black font-bold mt-6 mb-16'>Experimental Setup</h3>

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

                    {/* background */}
                    <div className="background-setup mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                        {/* (a) Layout */}
                        <div className="flex flex-col items-center min-w-0">
                            <div className="w-full max-w-[560px] aspect-[16/10] overflow-hidden rounded-lg flex items-center justify-center bg-white">
                                <img
                                    src={current.layout}
                                    alt="layout"
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                            <p className="mt-4 text-base font-medium h-[28px] flex items-center justify-center text-center">
                                (a) Layout
                            </p>
                        </div>

                        {/* (b) Experiment Setup */}
                        <div className="flex flex-col items-center min-w-0">
                            <div className="w-full max-w-[560px] aspect-[16/10] overflow-hidden rounded-lg flex items-center justify-center bg-white">
                                <img
                                    src={current.expSetup}
                                    alt="expSetup"
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>

                            <p className="mt-4 text-base font-medium h-[28px] flex items-center justify-center text-center">
                                (b) Experiment Setup
                            </p>
                        </div>

                    </div>
                </div>
            )}

            <div className="sensor">
                <h3 className='text-lg text-black font-bold mt-12'>ESP32 Communication Reliability</h3>
                <img src="/PRoFENCH/image/sensor.png" alt="sensor-platform" className="mx-auto mt-8" />
                <p className='text-center'>
                    Figure 4: Overview of the experimental hardware setup, highlighting ESP32 modules, laptops, USB connections, and monitoring devices.
                </p>
            </div>

            <div className="architecture">
                <img src="/PRoFENCH/image/Quality Restoration-Ultra HD-SoftwareArchitect.png" alt="architecture" className="mx-auto mt-8" />
                <p className='text-center'>
                    Figure 5: Software architecture and data flow between ESP32 devices, laptops, backend processing, and the React Native frontend.
                </p>
            </div>

            <div className="package-loss-rate">
                <img src="/PRoFENCH/image/Quality Restoration-Ultra HD-esp32_packet_loss.jpeg" alt="packet-loss-rate" className="mx-auto mt-8" />
                <p className='text-center'>
                    Figure 6: Packet loss rate of ESP32 communication under varying distances and environments. Indoor environments maintain stable communication
                    performance, while outdoor environments exhibit rapid degradation due to signal attenuation and environmental factors.
                </p>
            </div>

            <div className="training-configuration">
                <h3 className='text-lg text-black font-bold mt-4'>Visualization of the WiVi32-Count dataset</h3>
                <img src="/PRoFENCH/image/Quality Restoration-Ultra HD-Multi.png" alt="training-configuration" className="mx-auto mt-8" />
                <p className='text-center'>
                    Figure 7: Visualization of the WiVi32-Count dataset across eight classes, showing Wi-Fi CSI signals (top) paired with corresponding camera
                    images (bottom).
                </p>
            </div>
        </div>
    )
}

export default SensorPlatform