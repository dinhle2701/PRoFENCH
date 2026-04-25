import React from 'react'
import documents from '@/data/documents'

const Header = () => {
    return (
        <div>
            <h1>{doc.name}</h1>
            <p>{doc.author}</p>
            <p>{doc.venue} - {doc.year}</p>
        </div>
    )
}

export default Header
