import Image from 'next/image'
import React from 'react'

const Approach = () => {
    return (
      <div className='mt-[8%] flex flex-col items-center justify-between px-4 md:px-6 lg:flex-row lg:px-32'>
            
            <div className="w-full lg:w-[48%]">
                    <div className="mb-[1.875rem] text-left">
                        <p className="relative mb-[1rem] inline-block text-[16px] font-extrabold uppercase text-secondary">OUR APPROACH</p> 

                        <div className="text-[30px] font-[700] text-primary md:pr-52 md:text-[40px] lg:pr-0 lg:text-[46px]">We Are A Church That Believes In Jesus</div>

                        <p className='leading-8 text-dark'>Praesent sapien youg massa, convallis a is pellentesque nec, egestas non nisi. Vivamus mhi magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                        <p className='leading-8 text-dark'>Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat.</p>
                    <p className='leading-8 text-dark'>Praesent sapien youg massa, convallis a is pellentesque nec, egestas non nisi. Vivamus mhi magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                    
                    </div>
            </div>

            <div>
                <Image 
                    src='/assets/img/home/portfolio2.jpg'
                    alt=''
                    width={800}
                    height={800}
                    className =  "h-[22rem] object-cover object-center lg:w-[32rem]"
                />
            </div>
      </div>
  )
}

export default Approach