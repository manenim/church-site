import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='mt-[4.375rem] bg-home-hero px-4 py-[4.375rem] md:px-6 lg:px-[8.125rem]'>
      <div className='w-full'>
          <p className="relative inline-block bg-[#e6e8e7]  px-[20px] py-[5px] text-[13px] font-extrabold uppercase text-secondary">Portfolio</p> 
          <div className="text-[30px] font-[700] text-white md:pr-52 md:text-[40px] lg:pr-0 lg:text-[46px]">Our Ministries</div>
              
                      
        
        <div className='relative mt-10 flex  flex-col justify-between md:flex-row'>
          <div className='mr-0 md:mr-8'>
            <div className='relative h-[100%] w-[100%]'>
            <Image
                src="/assets/img/home/portfolio1.jpg"  
                width={1200}
                height={1200}
                          alt=""
                         className='z-10 h-full w-full object-cover object-center'

            />
            </div>
           
          </div>
          <div className='mt-8 md:mt-0'>
            <div className='relative h-[100%] w-[100%] md:bg-green-700'>
            <Image
                       src="/assets/img/home/portfolio2.jpg"
              
                        
                         width={1200}
                height={1200}
                          alt=""
                         className='z-10 h-full w-full object-cover object-center'

            />
            </div>
           
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Portfolio

{/* <div className="mb-[1.875rem] text-left">
            <p className="relative inline-block bg-[#e6e8e7]  px-[20px] py-[5px] text-[13px] font-extrabold uppercase text-secondary">Portfolio</p> 
            <div className="text-[30px] font-[700] text-primary md:pr-52 md:text-[40px] lg:pr-0 lg:text-[46px]">Our Ministries</div>
              
            <div className='w-screen bg-red-800 h-[30vh] relative flex flex-col md:flex-row justify-between'>
                <div className='relative w-[46%] h-[100%]'>
                      <Image
                       src="/assets/img/home/portfolio1.jpg"
                        fill
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                          alt=""
                         className='w-full object-cover object-center'

                      />   
                      <div className='w-[90%] mt-[60%] h-[3rem] z-10 bg-white text-lg text-secondary'>
                          Learn more
                      </div>
              </div>
                  <div className='relative w-[46%] h-[100%]'>
                      <Image
                          src="/assets/img/home/portfolio2.jpg"
                        fill
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                          alt=""
                          className='w-full object-cover object-center'
                      />    
                      
                  </div>    
            </div>
        </div> */}