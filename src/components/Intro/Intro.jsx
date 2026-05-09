import React from 'react'
import { figure } from '@/data/figure'

const Intro = () => {
    const figureMap = Object.fromEntries(
        figure.map(f => [f.id, f])
    );

    return (
        <div className='intro container-size h-dvh scroll-mt-18' id='intro'>
            <h2 className='text-2xl font-bold my-8 text-center text-black'>Introduction</h2>
            <p>
                Visualization of the Data of each modality and their corresponding estimations.
            </p>
            <img
                src={figureMap[1]?.url}
                alt="PRoFENCH Framework"
                className="mx-auto mt-8"
                loading="eager"
                decoding="async"
            />
            <p className='text-center'>Figure 1: Architecture of the proposed <b>PRoFENCH</b> multimodal WiFi–Vision sensing framework.</p>
        </div>
    )
}

export default Intro
