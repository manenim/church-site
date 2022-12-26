import Image from 'next/image'
import React from 'react'

const Faq = () => {
  return (
      <div  className='bg-[#fcfcfc] px-4 pt-[4.375rem] md:px-6 lg:px-[8.125rem]'>
          <div className="flex justify-between items-center">
            <div className="relative hidden w-[42%] lg:block">
              <Image 
                src="/assets/img/home/faq.jpg"
                
                alt="aboutpic"
                      width={500}
                      height={300}
                className=""
              />
            </div>  
            
          <div className="w-full lg:w-[52%]">
              <div className="mb-[1.875rem] text-left">
                <p className="relative mb-[1rem] inline-block bg-[#e6e8e7]  px-[20px] py-[5px] text-[13px] font-extrabold uppercase text-secondary">About Us</p> 

                <div className="text-[30px] font-[700] text-primary md:pr-52 md:text-[40px] lg:pr-0 lg:text-[46px]">We Are A Church That Believes In Jesus</div>

                <p className='leading-8 text-dark'>Praesent sapien youg massa, convallis a is pellentesque nec, egestas non nisi. Vivamus mhi magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                <p className='leading-8 text-dark'>Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                <p className='leading-8 text-dark'>Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
              
                  </div>
            </div>

              
            
          </div>
          </div>
  )
}

export default Faq