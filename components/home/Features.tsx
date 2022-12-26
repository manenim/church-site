import {RiFilePaper2Line} from 'react-icons/ri'
import Card from './Card'



const Features = () => {
    return (
        <div className="bg-[#fcfcfc] px-4 pt-[4.375rem] md:px-6 lg:px-[8.125rem]">
            <div className="mb-[1.875rem] text-center">
                <p className="relative  inline-block bg-[#e6e8e7]  px-[20px] py-[5px] text-[13px] font-extrabold uppercase text-secondary">Features</p> 

                <div className="text-[30px] font-[700] text-primary md:text-[40px] lg:text-[46px]">How We can Help</div>
            </div>

            <div className="grid grid-cols-1 gap-6 pb-[4.375rem] md:grid-cols-2">
                <Card title = "Ministries" />
                <Card title = "Sermons"/>
                <Card title = "House Church"/>
                <Card title = "Our Church"/>
            </div>
       </div>
  )
}

export default Features