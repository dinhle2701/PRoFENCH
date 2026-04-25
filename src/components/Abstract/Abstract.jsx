import React from 'react'
import documents from '@/data/documents'

const Abstract = () => {
    const doc = documents[0]


    return (
        <div className='abstract text-black my-12'>
            <h2 className='text-3xl font-bold mb-4 text-center'>Abstract</h2>
            <p className='text-abstract' style={{ whiteSpace: 'pre-line', textAlign: 'justify' }}>
                {doc.abstract}
            </p>
        </div>
    )
}

export default Abstract;
