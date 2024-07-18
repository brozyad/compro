import Link from 'next/link'
import React from 'react'

export const AboutUsHero = () => {
  return (
    <div>
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
  }}>
  <div className="hero-overlay bg-base-200"></div>
  <div className="hero-content text-center text-black">
    <div className="max-w-xl">
      <h1 className="mb-5 text-5xl lg:text-[80px] text-black font-bold">WELCOME TO BARAYA</h1>
      <p className="mb-5 text-black lg:text-lg">We create custom online stores. Handling everything from marketing and payments, to secure checkout and shipping.</p>
      <Link href ="/about" className="btn bg-black text-white">About Us</Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default AboutUsHero
