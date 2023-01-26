import React from 'react'
import {CiMail} from 'react-icons/ci'
import { FiArrowRight, FiPhoneCall, FiSend } from 'react-icons/fi'

const Card = () => {
  return (
    <div className='flex flex-col justify-between bg-[#fafafa] px-4 pt-[8%] md:px-6 lg:flex-row lg:px-32 pb-36'>
        <div className='flex w-full flex-col items-center border-2 pt-12 lg:w-[calc(94%/3)]'>
            <p className="relative mb-4 inline-flex items-center text-[16px] font-extrabold uppercase text-secondary">Send Email<FiArrowRight className='ml-[.5rem]' /></p> 
            <p className='mb-4 text-2xl font-bold'>Email Adress</p>
              <p className='mb-2 text-dark'>info@example.com</p>
              <p className='mb-4 text-dark'>info@support.com</p>
              <CiMail className='text-[4.5rem] text-secondary'/>
        </div>
        <div className='my-8 flex w-full flex-col items-center border-2 pt-12 lg:my-0 lg:w-[calc(94%/3)]'>
            <p className="relative mb-4 inline-flex items-center text-[16px] font-extrabold uppercase text-secondary">Send Email<FiArrowRight className='ml-[.5rem]' /></p> 
            <p className='mb-4 text-2xl font-bold'>Email Adress</p>
              <p className='mb-2 text-dark'>info@example.com</p>
              <p className='mb-4 text-dark'>info@support.com</p>
              <CiMail className='text-[4.5rem] text-secondary'/>
        </div>
        <div className='flex w-full flex-col items-center border-2 pt-12 lg:w-[calc(94%/3)]'>
            <p className="relative mb-4 inline-flex items-center text-[16px] font-extrabold uppercase text-secondary">Send Email<FiArrowRight className='ml-[.5rem]' /></p> 
            <p className='mb-4 text-2xl font-bold'>Email Adress</p>
              <p className='mb-2 text-dark'>info@example.com</p>
              <p className='mb-4 text-dark'>info@support.com</p>
              <CiMail className='text-[4.5rem] text-secondary'/>
        </div>
        
        
    </div>
  )
}

export default Card