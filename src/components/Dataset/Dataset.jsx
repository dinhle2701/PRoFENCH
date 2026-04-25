import React, { useState, useRef, useEffect } from 'react'

const datasets = [
    {
        id: 1,
        name: "Counting People IR",
        description: "Nội dung dataset 1...",
    },
    {
        id: 2,
        name: "Counting People RGB",
        description: "Nội dung dataset 2...",
    },
    {
        id: 3,
        name: "Human Acitivity RGB",
        description: "Nội dung dataset 3...",
    },
]

const DatasetTabs = () => {
    const [activeTab, setActiveTab] = useState(1)

    return (
        <div className='dataset container-size text-black'>
            <h2 className='text-2xl text-black font-bold mt-12'>Dataset</h2>
            <div className="max-w-[1000px] mx-auto mt-10 text-center">

                {/* Tabs */}
                <div className="flex gap-4 border-b mb-6 text-center justify-center">
                    {datasets.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-2 px-20 font-medium transition 
                                hover:cursor-pointer hover:text-gray-900
                                ${activeTab === tab.id
                                    ? 'border-b-2 border-black text-black'
                                    : 'text-gray-500'
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="text-gray-700 leading-relaxed">
                    {datasets.map((tab) =>
                        activeTab === tab.id ? (
                            <div key={tab.id}>
                                <h3 className="text-xl font-semibold mb-2">
                                    {tab.name}
                                </h3>
                                <p>{tab.description}</p>
                            </div>
                        ) : null
                    )}
                </div>
            </div>
        </div>
    )
}

export default DatasetTabs