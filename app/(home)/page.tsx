import Link from "next/link"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Image from "next/image"
import Carousel from "../components/Carousel"
import ServicesButton from "../components/Home/ServicesButton"
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