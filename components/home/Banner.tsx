import {FiArrowRight} from  'react-icons/fi'
    
    
const Banner = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-home-hero bg-cover bg-center text-light">
        <div className="w-[85%] text-center">
            <div className="mb-7 inline-flex bg-white py-[7px] px-[26px] font-[500] text-primary">We Believe in God</div> 
            <div className="text-[2.5rem] font-bold md:text-[5rem]">Church Of God</div> 
            <div className="mx-auto lg:w-[35%]">New Birth is a life giving church, Marked by the presence of God, Activating us to Impact others. We Gather in Person and Online.</div> 
            <button className="relative mx-auto mt-[1.1rem] flex cursor-pointer items-center whitespace-nowrap bg-secondary px-[1rem] py-[.8rem] text-center align-middle text-[0.875rem] font-bold uppercase text-white">Explore Our Church <FiArrowRight className='ml-[.5rem]' /></button>
        </div>
    </div>
  )
}

export default Banner