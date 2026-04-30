import React, { useState, useEffect, useRef } from "react"
import { fusion } from "@/data/fusion"

const Fusion = () => {
    const [activeTab, setActiveTab] = useState(1)
    const [selectedIndex, setSelectedIndex] = useState(0)

    // ✅ FIX: current phải lấy từ datasets (KHÔNG phải fusion)
    const current = fusion.find((item) => item.id === activeTab)

    // reset dropdown khi đổi tab
    useEffect(() => {
        setSelectedIndex(0)
    }, [activeTab])

    const cvRef = useRef(null)
    const csiRef = useRef(null)



    return (
        <div className="dataset container-size text-black mb-3" id="fusion">
            <h2 className='text-2xl text-black font-bold mt-12'>Fusion Strategy</h2>

            <div className="max-w-[1200px] mx-auto mt-10">

                {current && (
                    <div className="flex flex-col items-center gap-6">
                        {/* Title */}
                        {/* <h3 className="text-xl font-semibold text-center">
                            {current.name}
                        </h3> */}

                        {/* ✅ Dropdown dùng fusion */}
                        <select
                            value={selectedIndex}
                            onChange={(e) => setSelectedIndex(Number(e.target.value))}
                            className="border border-none px-2 pb-2 rounded-md text-xl text-gray-700 
                            hover:border-gray-400 focus:outline-none focus:ring-2 
                            focus:ring-gray-300 focus:border-gray-300 transition hover:cursor-pointer"
                        >
                            {fusion.map((item, index) => (
                                <option key={item.id ?? index} value={index} className="text-sm">
                                    {item.name}
                                </option>
                            ))}
                        </select>

                        {/* Video pair */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-4 items-start">

                            {/* CV */}
                            <div className="flex flex-col items-center">
                                <h4 className="font-bold mb-3">Architecture</h4>

                                <img
                                    src={fusion[selectedIndex]?.architecture}
                                    alt=""
                                    className="w-620 h-50 max-w-[520px] rounded-lg shadow mb-4"
                                />
                            </div>

                            {/* Details */}
                            <div className="flex flex-col items-center">
                                <h4 className="font-bold mb-3">Detail</h4>

                                <div className=" text-sm text-gray-700 whitespace-pre-line bg-gray-50 rounded-lg shadow-sm px-6 py-4 w-full max-w-[420px] text-left">
                                    {fusion[selectedIndex]?.details}
                                </div>

                                {/* Parameters */}
                                <div className="mt-4 text-sm font-medium text-gray-800 bg-gray-50 rounded-lg px-4 py-2 shadow-sm">
                                    Parameters: {fusion[selectedIndex]?.parameters}
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {/* <div>
                    Parameters model
                    <div className="mt-4 text-sm font-medium text-gray-800 bg-gray-50 rounded-lg px-4 py-2 shadow-sm">
                        <p>
                            Model (WiVi32-Fusion)
                        </p>

                        <p>
                            Parameters: {fusion.find(f => f.id === 10)?.parameters}
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Fusion