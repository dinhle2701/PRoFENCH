import React from 'react'

const Intro = () => {
    return (
        <div className='intro container-size mt-12 '>
            <h2 className='text-2xl font-bold my-8 text-center text-black'>Introduction</h2>
            <p>
                Visualization of the Data of each modality and their corresponding estimations.
            </p>
            <img src="/PRoFENCH/image/PRoFENCH.png" alt="PRoFENCH Framework" className="mx-auto mt-8" />
            <p className='text-center'>Figure 1: Architecture of the proposed <b>PRoFENCH</b> multimodal WiFi–Vision sensing framework.</p>
        </div>
    )
}

export default Intro
