const base = "https://profench-paper-s3-bucket.s3.us-east-1.amazonaws.com/public"

export const figure = [
    {
        id: 1,
        name: "Introduction",
        type: "introduction",
        url: `${base}/image/PRoFENCH1.avif`,
    },

    {
        id: 2,
        name: "Figure 2: Overall architecture of the proposed WiVi32-Fusion framework.",
        type: "WiVi32-Fusion Architect",
        url: `${base}/image/overall-architecture.avif`,
    },

    {
        id: 3,
        name: "Figure 4: Overview of the experimental hardware setup, highlighting ESP32 modules, laptops, USB connections, and monitoring devices.",
        type: "Sensor Platform",
        url: `${base}/image/sensor.avif`,
    },

    {
        id: 4,
        name: "Figure 5: Software architecture and data flow between ESP32 devices, laptops, backend processing, and the React Native frontend.",
        type: "Sensor Platform",
        url: `${base}/image/Quality Restoration-Ultra HD-SoftwareArchitect.avif`,
    },

    {
        id: 5,
        name: "Figure 6: Packet loss rate of ESP32 communication under varying distances and environments. Indoor environments maintain stable communication performance, while outdoor environments exhibit rapid degradation due to signal attenuation and environmental factors.",
        type: "Sensor Platform",
        url: `${base}/image/Quality Restoration-Ultra HD-esp32_packet_loss.avif`,
    },
    {
        id: 6,
        name: "Figure 7: Visualization of the WiVi32-Count dataset across eight classes, showing Wi-Fi CSI signals (top) paired with corresponding camera images (bottom).",
        type: "Sensor Platform",
        url: `${base}/image/Quality Restoration-Ultra HD-Multi.avif`,
    },

]