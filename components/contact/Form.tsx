import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Form = () => {
    return (
    <div className='bg-[#fafafa] px-2 pt-[8%] md:px-6 lg:px-32'>
    <form action="" className='mx-auto w-full rounded-lg bg-white lg:p-8'>
        <div className='flex justify-between'>
              <input type="text" placeholder='Fullname' className='mb-6 w-[calc(94%/3)] bg-[#eeeded] p-4 lg:py-6'/>
              <input type="text" placeholder='email Adress' className='mb-6 w-[calc(94%/3)] bg-[#eeeded] p-4 lg:py-6' />
              <input type="text" placeholder='subject' className='mb-6 w-[calc(94%/3)] bg-[#eeeded] p-4 lg:py-6' />
          </div>
          <div>
              <textarea name="" placeholder='message' className='w-full bg-[#eeeded] py-6 px-4 pb-10'></textarea>
        </div>
        <button className="relative mx-auto mt-[1.3rem] flex cursor-pointer items-center whitespace-nowrap bg-secondary px-[3rem] py-[1.2rem] text-center align-middle text-[0.875rem] font-bold uppercase text-white">Submit</button>
        </form>
    </div>
  )
}

export default Form