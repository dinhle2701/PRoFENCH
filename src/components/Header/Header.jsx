import React from 'react'
import documents from '@/data/documents'

import { FaYoutube } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa";
import { SiArxiv } from "react-icons/si";
import { FaRegFilePdf } from "react-icons/fa";


const Header = () => {
    const doc = documents[0]

    return (
        <div className='text-black text-center container-size'>
            <div className="title my-12">
                <h1 className='text-4xl font-bold'>{doc.name}</h1>
            </div>

            <div className="info">
                <div className="author">
                    <p className="text-center ">
                        Tien Do<sup>a,c,d</sup>,{' '}
                        Quan Le-Trung<sup>b,c</sup>,{' '}
                        Phuoc Nguyen T.H.<sup>a,c,*</sup>
                    </p>
                </div>

                <div className="educate">
                    <div className="text-center mt-4 text-sm text-gray-600 leading-relaxed">
                        <i><p><sup>a</sup> Faculty of Information Science and Engineering, University of Information Technology, Ho Chi Minh City, 700000, Vietnam</p>
                            <p><sup>b</sup> Faculty of Computer Networks and Communications, University of Information Technology, Ho Chi Minh City, 700000, Vietnam</p>
                            <p><sup>c</sup> Vietnam National University Ho Chi Minh City, Ho Chi Minh City, 700000, Vietnam</p>
                            <p><sup>d</sup> Ho Chi Minh City University of Industry and Trade, Vietnam, Ho Chi Minh City, 700000, Vietnam</p></i>
                    </div>
                </div>

                <div className="link-related mt-12 mb-16 flex flex-wrap justify-center gap-4">
                    {[
                        {
                            label: "Paper",
                            icon: <FaRegFilePdf />,
                            href: "",
                        },
                        {
                            label: "arXiv",
                            icon: <SiArxiv />,
                            href: "",
                        },
                        {
                            label: "Video",
                            icon: <FaYoutube />,
                            href: "https://youtu.be/7X9_TIlNBb0",
                        },
                        {
                            label: "Data",
                            icon: <FaRegImages />,
                            href: "https://github.com/cvwifi-lab/WiVi32-A_People_Counting_Tool",
                        },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-[130px] h-[44px]
      bg-black text-white text-sm font-medium
      rounded-full transition
      hover:bg-gray-800 hover:cursor-pointer"
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </a>
                    ))}
                </div>
            </div>
            <div className="credibility">
                <span>Awaiting acceptance from Ad Hoc Networks journal.</span>
            </div>
        </div>
    )
}

export default Header
