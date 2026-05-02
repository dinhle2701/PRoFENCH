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
      <Section>
        <Intro />
      </Section>


      {/* Abstract */}
      <Section>
        <Abstract />
      </Section>

      {/* Mục 1 - Datasets */}
      <Section>
        <DatasetTabs />
      </Section>

      {/* Mục 2 - Fusion Strategy */}
      <Section>
        <Fusion />
      </Section>

      {/* Mục 3 - WiVi32-Fusion Architect */}
      <Section>
        <Architect />
      </Section>

      {/* Mục 4 - Sensor Platform */}
      <Section>
        <SensorPlatform />
      </Section>

      {/* Mục 5 - We provide the visualization human counting in the frame level */}
      <Section>
        <HumanResult />
      </Section>

      {/* Mục 6 - Related Links */}
      <Section>
        <RelatedLink />
      </Section>

      {/* Mục 7 */}
      <Section>
        <License />
      </Section>

      {/* Mục 8 */}
      <Section>
        <Citation />
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
