import Link from 'next/link'
import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'




const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    

  return (
      <nav className='absolute mt-10 w-screen'>
          <div className='mx-auto w-[85%]'>
              <div className='flex h-[4rem] items-center justify-between bg-white px-8'>
                  <div className="text-[1.5rem] font-bold">LOGO.</div>
                  {/* <Hamburger size={20} toggled={isOpen} toggle={setOpen}/> */}
                  <ul className="hidden items-center justify-between md:flex">
                      <li><Link className='' href = '/'>Home</Link></li>
                      <li className='ml-10'><Link className='' href = '/about'>About</Link></li>
                      <li className='ml-10'><Link className='' href = '/#'>Blog</Link></li>
                      <li className='mx-10'><Link className='' href = '/contact'>Contact</Link></li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default Navbar