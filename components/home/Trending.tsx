import Image from "next/image"

const Trending = () => {
  return (
<div className="mt-[50px] bg-[#fcfcfc] px-4 pt-[4.375rem] md:px-6 lg:px-[8.125rem]">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="w-full lg:w-[52%]">
              <div className="mb-[1.875rem] text-left">
                <p className="relative mb-[1rem] inline-block bg-[#e6e8e7]  px-[20px] py-[5px] text-[13px] font-extrabold uppercase text-secondary">Trending</p> 

                <div className="text-[30px] font-[700] text-primary md:pr-52 md:text-[40px] lg:pr-0 lg:text-[46px]">Here are Some Best Products To Offer</div>

                <p className='leading-8 text-dark'>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.Here are Some Best Products To Offer.</p>
                <p className='mt-4 leading-8 text-dark'>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.Vestibulum ac diam sit amet quam vehicula elementum sed.</p>
              
              </div>
            
              
          </div>

            <div className="relative grid grid-cols-2">
              <Image 
                src="/assets/img/home/products/1.jpg"
                alt="aboutpic"
                width={200}
                height={200}
                className=""
              />
              <Image 
                src="/assets/img/home/products/0.jpg"
                alt="aboutpic"
                width={200}
                height={200}
                className=""
              />
              <Image 
                src="/assets/img/home/products/4.jpg"
                alt="aboutpic"
                width={200}
                height={200}
                className="mt-14"
              />
              <Image 
                src="/assets/img/home/products/3.jpg"
                alt="aboutpic"
                width={200}
                height={200}
                className="mt-14"
              />
            </div>
        </div>
      </div> 
    )
}

export default Trending