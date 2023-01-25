import Image from "next/image"


const About = () => {
    return (
      <div className="bg-[#fcfcfc] px-4 pt-[4.375rem] md:px-6 lg:px-[8.125rem]">
        <div className="flex justify-between">
          <div className="w-full lg:w-[52%]">
              <div className="mb-[1.875rem] text-left">
                <p className="relative mb-[1rem] inline-block bg-[#e6e8e7]  px-[20px] py-[5px] text-[13px] font-extrabold uppercase text-secondary">About Us</p> 

                <div className="text-[30px] font-[700] text-primary md:pr-52 md:text-[40px] lg:pr-0 lg:text-[46px]">We Are A Church That Believes In Jesus</div>

                <p className='leading-8 text-dark'>Praesent sapien youg massa, convallis a is pellentesque nec, egestas non nisi. Vivamus mhi magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
              
              </div>
            
              <div className="md:flex lg:block">
              <div className="flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-secondary">
                  50%
                </div>
                <div className="w-full text-left lg:w-[82%]">
                      <h5 className = "text-2xl font-bold text-primary">Ethnic Community</h5>
                      <p className='leading-8 text-dark'>Praesent sapien massa, convallis a is pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed.</p>
                </div>
              </div>
            

                  <div className="mt-6 flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-primary">
                      50%
                    </div>
                    <div className="w-full text-left lg:w-[82%]">
                          <h5 className = "text-2xl font-bold text-primary">Active Members</h5>
                          <p className='leading-8 text-dark'>Praesent sapien massa, convallis a is pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed.</p>
                    </div>
                  </div>
              </div>
          </div>

            <div className="relative hidden w-[42%] shadow-2xl lg:block">
              <Image 
                src="/assets/img/aboutsec/1.jpg"
                fill
                alt="aboutpic"

                className="rounded-[20px] object-cover object-center shadow-2xl"
              />
            </div>
        </div>
      </div> 
  )
}

export default About