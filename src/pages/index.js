import Head from 'next/head'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useEffect } from "react";
import RelatedLink from '@/components/RelatedLink/RelatedLink';
import Citation from '@/components/Citation/Citation';
import Intro from '@/components/Intro/Intro';
import Abstract from '@/components/Abstract/Abstract';

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
        <title>My Portfolio</title>
        <link rel="icon" type="image/png" href="https://icons.iconarchive.com/icons/iconsmind/outline/512/Clouds-icon.png" />
        <link rel="icon" href="/server.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Intro />
      <Abstract />
      <RelatedLink />
      <Citation />
      <Footer />
    </div>
  );
}
