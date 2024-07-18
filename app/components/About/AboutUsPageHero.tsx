import React from 'react'

export const AboutUsPageHero = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://static.giggster.com/images/location/c205b955-ae60-44f9-ad14-bbfc8b2ffce9/c41f4baa-da0a-4d37-b988-876f14af77a0/full_hd_retina.jpeg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">About Us</h1>
                        <p className="mb-5 text-white">Our company was founded in Bandung since 2024. Our culuture is love doing creative things and make our clients dreams come true
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
