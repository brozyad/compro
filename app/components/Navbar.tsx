"use client"

import Link from 'next/link';
import { FC, useState } from 'react';
import { clsx } from 'clsx';


const Navbar: FC = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <nav className="bg-gray-800 p-4 sticky z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">BARAYA🌐</div>
        <div className="space-x-4 hidden lg:flex">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About Us
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <Link href="/teams" className="text-gray-300 hover:text-white">
            Teams
          </Link>
        </div>
        <button onClick={() => setNavbar(!false)} className='text-white flex lg:hidden'><svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg></button>


      </div>
      <section className={clsx('w-screen z-50 h-screen top-0 bottom-0 right-0 bg-black/80 absolute -translate-x-full', navbar && 'translate-x-0')}>
        <span onClick={() => setNavbar(false)} className='absolute top-5 right-5 cursor-pointer text-white'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></span>
        <div className='flex flex-col items-center justify-center text-white h-screen text-2xl font-bold gap-5'>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About Us</Link>
          <Link href={'/services'}>Services</Link>
          <Link href={'/teams'}>Teams</Link>
        </div>

      </section>
    </nav>
  );
};

export default Navbar;