"use client"
import Cursor from '@/components/cursor/Cursor'
import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'
import Parallax from '@/components/parallax/Parallax'
import Services from '@/components/services/Services'
import Portfolio from '@/components/portfolio/Portfolio'
import Contact from '@/components/contact/Contact'
import About from '@/components/about/about'
import SkillsSection from '@/components/skills/skillSection'
import OfferSection from '@/components/offer/offerSection'

export default function Home() {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id='offer'>
        <OfferSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>

      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>

    </div>
  )
}