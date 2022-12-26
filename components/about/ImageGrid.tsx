import Image from 'next/image'
import React from 'react'
import {FaChurch } from 'react-icons/fa'

const ImageGrid = () => {
    return (
      <div className='mt-[8%] flex justify-between px-4 md:px-6 lg:px-32'>
           <div className='hidden lg:flex'>
          <div>
            <Image
            src="/assets/img/home/portfolio1.jpg"
            alt=""
            width={500}
                height={500}
                className = "mb-6 mr-8 h-[20rem] w-[16rem] object-cover object-center"
            />
            <Image
            src="/assets/img/about/6.jpg"
            alt=""
            width={500}
                height={500}
                className = "mr-8 h-[20rem] w-[16rem] object-cover object-center"
            />
          </div>
          <div className='mt-14'>
            <Image
            src="/assets/img/about/7.jpg"
            alt=""
            width={500}
                height={500}
                className = "mb-6 h-[20rem] w-[16rem] object-cover object-center"
            />
         
            <Image
            src="/assets/img/home/portfolio1.jpg"
            alt=""
            width={500}
                height={500}
                className = "h-[20rem] w-[16rem] object-cover object-center"
            />
          </div>
            </div>

            <div className="w-full lg:w-[45%]">
              <div className="mb-[1.875rem] text-left">
                <p className="relative mb-[1rem] inline-block text-[16px] font-extrabold uppercase text-secondary">WE HAVE 25+ YEARS OF EXPERIENCE</p> 

                <div className="text-[30px] font-[700] text-primary md:pr-52 md:text-[40px] lg:pr-0 lg:text-[46px]">We Are A Church That Believes In Jesus</div>

                <p className='leading-8 text-dark'>Praesent sapien youg massa, convallis a is pellentesque nec, egestas non nisi. Vivamus mhi magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
              
              </div>
            
              <div className="items-center justify-between sm:block md:flex lg:block">
              <div className="flex flex-col justify-center pr-8 lg:flex-row lg:items-center lg:justify-between">
                {/* <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-secondary">
                  50%
              </div> */}
              <FaChurch className = 'text-[4rem] text-secondary'/>
                <div className="w-full text-left lg:w-[82%]">
                      <h5 className = "text-2xl font-bold text-primary">Ethnic Community</h5>
                      <p className='leading-8 text-dark'>Praesent sapien massa, convallis a is pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed.</p>
                </div>
              </div>
            

                  <div className="mt-6 flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between">
                    {/* <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-primary">
                      50%
                    </div> */}
                    <FaChurch className = 'text-[4rem] text-secondary'/>

                    <div className="w-full text-left lg:w-[82%]">
                          <h5 className = "text-2xl font-bold text-primary">Active Members</h5>
                          <p className='leading-8 text-dark'>Praesent sapien massa, convallis a is pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed.</p>
                    </div>
                  </div>
              </div>
          </div>

      </div>
  )
}

export default ImageGrid