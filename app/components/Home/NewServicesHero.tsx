import React from 'react'
import Carousel from '../Carousel'
import Link from 'next/link'

export const NewServicesHero = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <Carousel />
                    <div className='flex flex-col items-center'>
                        <div className="text-5xl font-semibold text-center flex-auto">
                        <h1>We help</h1>
                        <h1 className='font-extrabold hover:scale-95 duration-200'>ambitious brands</h1>
                        <h1>sell more product.</h1>
                        </div>
                        <p className='py-6 text-center w-96'>Let’s design, transform, and launch your projects.​</p>
                        <Link href="/services" className="btn bg-black text-white w-48">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewServicesHero
