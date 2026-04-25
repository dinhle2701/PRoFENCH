import React from 'react'
import documents from '@/data/documents'

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
                        <p><sup>a</sup> Faculty of Information Science and Engineering, University of Information Technology, Ho Chi Minh City, 700000, Vietnam</p>
                        <p><sup>b</sup> Faculty of Computer Networks and Communications, University of Information Technology, Ho Chi Minh City, 700000, Vietnam</p>
                        <p><sup>c</sup> Vietnam National University Ho Chi Minh City, Ho Chi Minh City, 700000, Vietnam</p>
                        <p><sup>d</sup> Ho Chi Minh City University of Industry and Trade, Vietnam, Ho Chi Minh City, 700000, Vietnam</p>
                    </div>
                </div>

                <div className="link-related mt-12 mb-18">
                    <button className='bg-black text-sm text-white border-6 rounded-4xl px-5 py-2'>Paper</button>
                    <button className='bg-black text-sm text-white border-6 rounded-4xl px-5 py-2'>arXiv</button>
                    <button className='bg-black text-sm text-white border-6 rounded-4xl px-5 py-2'>Video</button>
                    <button className='bg-black text-sm text-white border-6 rounded-4xl px-5 py-2'>Data</button>
                </div>
            </div>
            <div className="credibility">
                <span>Accepted by NeurIPS 2023 Datasets and Benchmarks Track</span>
            </div>
        </div>
    )
}

export default Header
