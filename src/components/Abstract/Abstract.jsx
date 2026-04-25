import React from 'react'
import documents from '@/data/documents'

const Abstract = () => {
    const doc = documents[0]


    return (
        <div className='abstract container-size text-black mt-12 mb-12 text-center'>
            <h2 className='text-2xl font-bold mt-8 mb-6 text-center'>Abstract</h2>
            <p className='text-abstract' style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}>
                {doc.abstract}
            </p>
        </div>
    )
}

export default Abstract;
