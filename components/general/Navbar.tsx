import Link from 'next/link'
import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { useRouter } from 'next/router'
import Image from 'next/image'




const Navbar = () => {

      const router = useRouter()


  return (
      <nav className='absolute mt-10 w-screen'>
          <div className='mx-auto w-[85%]'>
              <div className='flex h-[4rem] items-center justify-between rounded-t-[32px] bg-white px-8 shadow-2xl'>
                  <div className="text-[1.5rem] font-bold"><Image src="/assets/img/logo.svg" alt="logo" width={40} height={40} /></div>
                  {/* <Hamburger size={20} toggled={isOpen} toggle={setOpen}/> */}
                  <ul className="hidden items-center justify-between md:flex">
                      <li><Link className={'' + router.asPath == "/" ? 'font-semibold' : ''} href = '/'>Home</Link></li>
                      <li className='ml-10'><Link className={'' + router.asPath == "/about" ? 'font-semibold' : ''} href = '/about'>About</Link></li>
                      {/* <li className='ml-10'><Link className={'' + router.asPath == "/blog" ? 'font-semibold' : ''} href = '/#'>Blog</Link></li> */}
                      <li className='mx-10'><Link className={'' + router.asPath == "/contact" ? 'font-semibold' : ''} href = '/contact'>Contact</Link></li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default Navbar