import Link from 'next/link'
import React from 'react'

export const AboutUsTeamsHero = () => {
  return (
    <div>
         <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://www.ukmusic.org/wp-content/uploads/2023/01/Trans-Creative-Collective-01-1024x678.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        {/* <h1 className="mb-5 text-5xl font-bold text-white">Teams</h1> */}
                        <p className="mb-5 text-white">Meet the talented individuals who drive our success for developing your projects.</p>
                        <Link href="/teams" className="btn bg-black text-white w-48">Teams</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
