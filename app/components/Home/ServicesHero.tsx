import React from 'react'

export const ServicesHero = () => {
  return (
    <div>
              <div className="text-5xl bg-white py-8 p-5">
        <div className="flex">
          <h1>We help</h1>
          <h2 className="font-extrabold ml-2 hover:scale-95 duration-200">ambitious brands</h2>
          </div>
        <h3>sell more product.</h3>
      </div>
      <div className="text-3xl ml-5 flex w-full">
        <div className="hover:scale-105 duration-200">
          {/* <Carousel/> */}
        </div>
        <div className="text- py-20 ml-20">
          <div className="flex">
          <p>We create</p>
          <p className="font-bold ml-1 mr-1 hover:scale-95 duration-200">custom</p>
          <p>online stores.</p>

          </div>
          <p>Handling everything from marketing and payments,</p>
          <p>to secure checkout and shipping.</p>
          <br />
        </div>
      </div>
    </div>
  )
}
