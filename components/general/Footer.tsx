import React from 'react'
import { CiMail, CiLocationOn } from 'react-icons/ci'
import { AiOutlinePhone, AiOutlineCalendar } from 'react-icons/ai'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='mt-28 bg-[#f5f5f5] px-4  pt-20 md:px-6 lg:px-[8.125rem]'>
          <div className='w-full'>
            <div className='flex flex-col pb-32 text-center md:flex-row md:justify-between md:text-left'>
                <div className='mb-12 w-full md:w-[40%] lg:w-[30%]'>
                    <h3 className='pb-6 text-[1.1rem] font-semibold'>About</h3>
                    <p className='pb-8 text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum iure repellendus aut accusantium laboriosam obcaecati?
                  </p>
                  <div className='flex justify-center text-dark md:justify-start'>
                    <AiOutlinePhone className='mr-4 text-[1.5rem] text-secondary' />
                    <div>987-987-930-302</div>

                  </div>
                  <div className='mt-4 flex justify-center text-dark md:justify-start'>
                    <CiMail className='mr-4 text-[1.5rem] text-secondary' />
                    <div>info@example.com</div>

                  </div>
                  <div className='mt-4 flex justify-center text-dark md:justify-start'>
                    <CiLocationOn className='mr-4 text-[1.5rem] text-secondary' />
                    <div>14/A, Poor Street City Tower, New York</div>

                  </div>
          </div>
          



                <div className='w-full md:w-[25%] lg:mb-8 lg:w-[20%] lg:pl-8'>
                    <h3 className='pb-6 text-[1.1rem] font-semibold'>Information</h3>
                    <ul className='text-dark'>
                      <li className = 'mb-4'>Ministries</li>
                      <li className = 'mb-4'>Services</li>
                      <li className = 'mb-4'>Our Church</li>
                      <li className = 'mb-4'>Sermons</li>
                      <li className = 'mb-4'>Volunteer</li>
                      <li className = 'mb-4'></li>
                    </ul>

          </div>
        
          

          
                <div className='mb-12 w-full md:w-[25%] lg:w-[20%] lg:pl-8'>
                    <h3 className='pb-6 text-[1.1rem] font-semibold'>Others</h3>
                    <ul className='text-dark'>
                      <li className = 'mb-4'>Ministries</li>
                      <li className = 'mb-4'>Services</li>
                      <li className = 'mb-4'>Our Church</li>
                      <li className = 'mb-4'>Sermons</li>
                      <li className = 'mb-4'>Volunteer</li>
                      <li></li>
                    </ul>

          </div>
          


                <div className='hidden w-full lg:block lg:w-[30%]'>
                  <h3 className='pb-6 text-[1.1rem] font-semibold'>Recent Post</h3>

                  <div className='mb-4 flex items-center'>
              <Image
                src = '/assets/img/footer/1.jpg'
                width={100}
                height={100}
                alt = ""
                className='mr-4 h-full w-[45%] object-cover object-center text-[4.5rem] text-secondary' />
                    <div>
                      <div className='mb-2 flex'>
                        <AiOutlineCalendar className='mr-4 text-[1.1rem] text-secondary' />
                         <p className='text-[.9rem] font-semibold'>May 20, 2021</p>
                       </div>
                      <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>

                  </div>
                  <div className='mb-4 flex items-center'>
              <Image
                src = '/assets/img/footer/1.jpg'
                width={100}
                height={100}
                alt = ""
                className='mr-4 h-full w-[45%] object-cover object-center text-[4.5rem] text-secondary' />
                    <div>
                      <div className='mb-2 flex'>
                        <AiOutlineCalendar className='mr-4 text-[1.1rem] text-secondary' />
                         <p className='text-[.9rem] font-semibold'>May 20, 2021</p>
                       </div>
                      <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>

            </div>
            

                  <div className='mb-4 flex items-center'>
              <Image
                src = '/assets/img/footer/1.jpg'
                width={100}
                height={100}
                alt = ""
                className='mr-4 h-full w-[45%] object-cover object-center text-[4.5rem] text-secondary' />
                    <div>
                      <div className='mb-2 flex'>
                        <AiOutlineCalendar className='mr-4 text-[1.1rem] text-secondary' />
                         <p className='text-[.9rem] font-semibold'>May 20, 2021</p>
                       </div>
                      <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>

                  </div>
                </div>
        </div>
        <p className='pb-8'>Copyright &#169; Grace Family - <span className='text-secondary'>2023</span></p>
          </div>
    </footer>
  )
}

export default Footer