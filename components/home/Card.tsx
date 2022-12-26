import React from 'react'
import { RiFilePaper2Line } from 'react-icons/ri'

type Prop = {
    title: string
}

const Card = ({title}: Prop) => {
    return (
            <div className='flex flex-col items-start justify-center bg-[rgb(255,255,255)] p-[1.4rem] drop-shadow-[rgba(87, 87, 87, 0.459)] drop-shadow-xl lg:flex-row lg:p-[2.5rem]'>
                <RiFilePaper2Line className='mr-[1.25rem] mb-2 text-8xl text-secondary lg:mb-0'/>
                
                <div className="">
                    <h5 className = "text-2xl font-bold text-primary">{title}</h5>
                    <p className='leading-8 text-dark'>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.</p>
                </div>
            </div>

                

  )
}

export default Card