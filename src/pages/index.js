import Head from 'next/head'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useEffect } from "react";
import RelatedLink from '@/components/RelatedLink/RelatedLink';
import Citation from '@/components/Citation/Citation';
import Intro from '@/components/Intro/Intro';
import Abstract from '@/components/Abstract/Abstract';
import Experiment from '@/components/Experiment/Experiment';
import License from '@/components/License/License';
import SensorPlatform from '@/components/SensorPlatform/SensorPlatform';
import DatasetTabs from '@/components/Dataset/Dataset';
import Methodology from '@/components/Methodology/Methodology';

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

  return (
    <div className="pt-18 overflow-x-hidden">
      <Head>
        <title>My Paper</title>
        <link rel="icon" type="image/png" href="https://icons.iconarchive.com/icons/iconsmind/outline/512/Clouds-icon.png" />
        <link rel="icon" href="/server.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Intro />
      <Abstract />

      <DatasetTabs />



      {/* Mục 1 */}

      {/* Mục 4 - methodology*/}
      <Methodology />

      {/* mục 5 */}
      {/* <Experiment /> */}
      <SensorPlatform />

      <RelatedLink />
      <License />
      <Citation />
      <Footer />
    </div>
  );
}
