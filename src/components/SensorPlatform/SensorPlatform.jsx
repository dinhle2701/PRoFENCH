import React from 'react'

const SensorPlatform = () => {
    return (
        <div className='sensor-platform container-size mt-12'>
            <h2 className='text-2xl text-black font-bold'>Sensor Platform</h2>

            <div className="experimental-setup">
                <h3 className='text-lg text-black font-bold mt-6'>Experimental Setup</h3>
                <img src="/PRoFENCH/image/experimental-setup.png" alt="Experimental Setup" className="mx-auto mt-8" />
                <p className='text-center'>
                    Figure 3: Overview of the experimental environment.
                </p>
            </div>

            <div className="sensor">
                <h3 className='text-lg text-black font-bold mt-4'>ESP32 Communication Reliability</h3>
                <img src="/PRoFENCH/image/sensor.png" alt="sensor-platform" className="mx-auto mt-8" />
                <p className='text-center'>
                    Figure 4: Overview of the experimental hardware setup, highlighting ESP32 modules, laptops, USB connections, and monitoring devices.
                </p>
            </div>

            <div className="architecture">
                <img src="/PRoFENCH/image/architecture.png" alt="architecture" className="mx-auto mt-8" />
                <p className='text-center'>
                    Figure 5: Software architecture and data flow between ESP32 devices, laptops, backend processing, and the React Native frontend.
                </p>
            </div>

            <div className="package-loss-rate">
                <img src="/PRoFENCH/image/package-loss-rate.png" alt="packet-loss-rate" className="mx-auto mt-8" />
                <p className='text-center'>
                    Figure 6: Packet loss rate of ESP32 communication under varying distances and environments. Indoor environments maintain stable communication
                    performance, while outdoor environments exhibit rapid degradation due to signal attenuation and environmental factors.
                </p>
            </div>

            <div className="training-configuration">
                <h3 className='text-lg text-black font-bold mt-4'>Training Configuration</h3>
                <img src="/PRoFENCH/image/visualization-wivi32.png" alt="training-configuration" className="mx-auto mt-8" />
                <p className='text-center'>
                    Figure 7: Visualization of the WiVi32-Count dataset across eight classes, showing Wi-Fi CSI signals (top) paired with corresponding camera
                    images (bottom).
                </p>
            </div>
        </div>
    )
}

export default SensorPlatform