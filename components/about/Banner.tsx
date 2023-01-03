import Image from 'next/image'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Banner = () => {
  return (
       <div className="flex h-[92vh] w-screen items-center justify-center bg-home-hero bg-cover bg-center text-light">
        <div className="w-[85%]">
            {/* <div className="mb-7 inline-flex bg-white py-[7px] px-[26px] font-[500] text-primary">We Believe in God</div>  */}
            <div className="text-[2.5rem] font-bold md:text-[5rem]">About Us</div> 
            <div className="md:w-[55%] lg:w-[35%]">We are a church that belives in Jesus christ and the followers and We are a church that belives in Jesus christ</div> 
            <button className="relative mt-[1.1rem] flex cursor-pointer items-center whitespace-nowrap bg-secondary px-[1rem] py-[.8rem] text-center align-middle text-[0.875rem] font-bold uppercase text-white">Explore Our Church <FiArrowRight className='ml-[.5rem]' /></button>
      </div>
    </div>
  )
}

export default Banner