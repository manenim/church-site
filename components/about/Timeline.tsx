import React from 'react'

const Timeline = () => {
  return (
    <div className='px-4 pt-[8%] md:px-6 lg:px-28'>
      <div className='flex flex-col md:flex-row-reverse'>
        <div className='mb:pb-16 w-full pt-16 pb-0 text-right  text-2xl font-bold md:w-1/2 md:pl-12 md:text-left'>
          <p>2019</p>
          <p className='text-sm font-bold text-dark md:pt-2'>JUN 1</p>
        </div>
        <div className='w-full py-4 text-right md:w-1/2 md:border-r-2 md:py-16'>
          <h3 className='text-2xl font-bold md:pr-12'>Volutpat nibh dictum eleifend torquent</h3>
          <p className='mt-4 pl-2 leading-8 text-dark md:pr-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div> 
      

      <div className='flex flex-col md:flex-row'>
        <div className='w-full pt-8 pb-4 text-left text-2xl font-bold md:w-1/2 md:border-r-2 md:pr-12 md:pb-16 md:text-right'>
          <p>2019</p>
          <p className='pt-2 text-sm font-bold text-dark'>JUN 1</p>
        </div>
        <div className='w-full text-left md:w-1/2 md:pb-16 md:pl-12'>
          <h3 className='text-2xl font-bold'>Volutpat nibh dictum eleifend torquent</h3>
          <p className='mt-4  leading-8 text-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>   

      <div className='flex flex-col md:flex-row-reverse'>
        <div className='mb:pb-16 w-full pt-8 pb-0 text-right text-2xl  font-bold md:w-1/2 md:pt-16 md:pl-12 md:text-left'>
          <p>2019</p>
          <p className='text-sm font-bold text-dark md:pt-2'>JUN 1</p>
        </div>
        <div className='w-full py-4 text-right md:w-1/2 md:border-r-2 md:py-16'>
          <h3 className='text-2xl font-bold md:pr-12'>Volutpat nibh dictum eleifend torquent</h3>
          <p className='mt-4 pl-2 leading-8 text-dark md:pr-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div> 


       <div className='flex flex-col md:flex-row'>
        <div className='w-full pt-8 pb-4 text-left text-2xl font-bold md:w-1/2 md:border-r-2 md:pr-12 md:pb-16 md:text-right'>
          <p>2019</p>
          <p className='pt-2 text-sm font-bold text-dark'>JUN 1</p>
        </div>
        <div className='w-full pb-16 text-left md:w-1/2 md:pl-12'>
          <h3 className='text-2xl font-bold'>Volutpat nibh dictum eleifend torquent</h3>
          <p className='mt-4  leading-8 text-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>   

      
    </div>
  )
}

export default Timeline