import Head from 'next/head'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import RelatedLink from '@/components/RelatedLink/RelatedLink';
import Citation from '@/components/Citation/Citation';
import Intro from '@/components/Intro/Intro';
import Abstract from '@/components/Abstract/Abstract';
import Experiment from '@/components/Experiment/Experiment';
import License from '@/components/License/License';
import SensorPlatform from '@/components/SensorPlatform/SensorPlatform';
import DatasetTabs from '@/components/Dataset/Dataset';
import Architect from '@/components/Architect/Architect';
import HumanResult from '@/components/HumanResult/HumanResult';
import Fusion from '@/components/Fusion/Fusion';
import CompareCVCSI from '@/components/HumanResult/CompareCVCSI';

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.1 }
    )

    reveals.forEach(r => observer.observe(r))
  }, [])


  const Section = ({ children }) => {
    const [show, setShow] = useState(false);
    const ref = useRef();

    useEffect(() => {
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      });

      if (ref.current) obs.observe(ref.current);
    }, []);

    return <div ref={ref}>{show && children}</div>;
  };


  return (
    <div className="pt-18 overflow-x-hidden">
      <Head>
        <title>My Paper - PRoFENCH</title>
        <link rel="icon" type="image/png" href="https://icons.iconarchive.com/icons/iconsmind/outline/512/Clouds-icon.png" />
        <link rel="icon" href="/server.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />

      {/* Introduction */}
      <Intro />


      {/* Abstract */}
      <Abstract />

      {/* Mục 1 - Datasets */}
      <DatasetTabs />

      {/* Mục 2 - Fusion Strategy */}
      <Fusion />

      {/* Mục 3 - WiVi32-Fusion Architect */}
      <Architect />

      {/* Mục 4 - Sensor Platform */}
      <SensorPlatform />

      {/* Mục 5 - We provide the visualization human counting in the frame level */}
      <HumanResult />

      {/* Mục so sánh package CSI - CV */}
      <CompareCVCSI />

      {/* Mục 6 - Related Links */}
      <RelatedLink />

      {/* Mục 7 */}
      <License />

      {/* Mục 8 */}
      <Citation />

      {/* Footer */}
      <Footer />
    </div>
  );
}
