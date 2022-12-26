import Image from 'next/image'
import React from 'react'
import {FaCross} from 'react-icons/fa'

const Blog = () => {
  return (
    <div className='bg-[#fcfcfc] px-4 pt-[4.375rem] md:px-6 lg:px-[8.125rem]'>
      <div className="mb-[1.875rem] text-center">
                <p className="relative  inline-block text-[1rem] font-extrabold uppercase text-secondary">Blog</p> 

                <h3 className="text-[30px] font-[700] text-primary md:text-[40px] lg:text-[46px]">News Feed</h3>
            </div>
      <div className='flex flex-col flex-wrap items-center justify-between lg:flex-row'>
        <div className='w-full border-2 lg:w-[calc(94%/3)]'>
          <div>
            <Image
              src = "/assets/img/home/portfolio1.jpg"
                alt=""
                width = {400}
              height={200}
              className = 'w-full'
            />
                  </div>
          <div className='px-6 pb-4 pt-8'>
             <div className='mb-2 flex'><FaCross className='mr-2 text-secondary'/><p className = " text-sm font-semibold" >Church Love</p></div>
                    <p className=' pb-4 text-xl font-bold'>All we discovered by now, the world can change</p>
                    <div className='flex items-center '>
              <Image
              src = "/assets/img/home/portfolio1.jpg"
                alt=""
                width = {80}
                height={80}
                className = 'mr-4 h-12 w-12 rounded-full'
              />
                      <div>
                        by <span className='font-bold'>Jina Flock</span>
                      </div>
                    </div>
                  </div>
              </div>
        <div className='my-8 w-full border-2 lg:my-0 lg:w-[calc(94%/3)]'>
          <div>
            <Image
              src = "/assets/img/home/portfolio1.jpg"
                alt=""
                width = {400}
              height={200}
              className = 'w-full'

            />
                  </div>
          <div className='px-6 pb-4 pt-8'>
             <div className='mb-2 flex'><FaCross className='mr-2 text-secondary'/><p className = " text-sm font-semibold" >Church Love</p></div>
                    <p className=' pb-4 text-xl font-bold'>All we discovered by now, the world can change</p>
                    <div className='flex items-center '>
              <Image
              src = "/assets/img/home/portfolio1.jpg"
                alt=""
                width = {80}
                height={80}
                className = 'mr-4 h-12 w-12 rounded-full'
              />
                      <div>
                        by <span className='font-bold'>Jina Flock</span>
                      </div>
                    </div>
                  </div>
              </div>
        <div className='w-full border-2 lg:w-[calc(94%/3)]'>
          <div>
            <Image
              src = "/assets/img/home/portfolio1.jpg"
                alt=""
                width = {400}
              height={200}
                className = 'w-full'

            />
                  </div>
          <div className='px-6 pb-4 pt-8'>
             <div className='mb-2 flex'><FaCross className='mr-2 text-secondary'/><p className = " text-sm font-semibold" >Church Love</p></div>
                    <p className=' pb-4 text-xl font-bold'>All we discovered by now, the world can change</p>
                    <div className='flex items-center '>
              <Image
              src = "/assets/img/home/portfolio1.jpg"
                alt=""
                width = {80}
                height={80}
                className = 'mr-4 h-12 w-12 rounded-full'
              />
                      <div>
                        by <span className='font-bold'>Jina Flock</span>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Blog