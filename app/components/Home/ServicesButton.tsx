import Link from 'next/link'
import React from 'react'

export const ServicesButton = () => {
  return (
    <div>
        <Link href ="/services" className="btn bg-black text-white">Services</Link>
    </div>
  )
}

export default ServicesButton