import Link from "next/link"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import AboutUsHero from "../components/Home/AboutUsHero"
import NewServicesHero from "../components/Home/NewServicesHero"

Link

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero />
    <AboutUsHero />
    <NewServicesHero/>
    <Footer />
    </>
  )
}