import React from 'react'
import documents from '@/data/documents'

const Header = () => {
    const doc = documents[0]

    return (
        <div className='text-black text-center'>
            <div className="title my-12">
                <h1 className='text-4xl font-bold'>{doc.name}</h1>
            </div>

            <div className="info">
                <div className="author">
                    <a href={doc.author_link} target="_blank" rel="noopener noreferrer">
                        {doc.author}
                    </a>
                </div>

                <div className="educate">

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
