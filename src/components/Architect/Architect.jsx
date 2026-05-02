import React from 'react'
import { figure } from '@/data/figure'

const Architect = () => {
    const figureMap = Object.fromEntries(
        figure.map(f => [f.id, f])
    );
    return (
        <div className='methodology container-size mt-12' id='architect'>
            <h2 className='text-2xl text-black font-bold mt-12'>WiVi32-Fusion Architect</h2>

            <div className="overall-architecture">
                <img
                    src={figureMap[2]?.url}
                    alt="overall-architecture"
                    className="mx-auto mt-8" />
                <p className='text-center'>
                    Figure 2: Overall architecture of the proposed WiVi32-Fusion framework.
                </p>
            </div>
        </div>
    )
}

export default Architect
