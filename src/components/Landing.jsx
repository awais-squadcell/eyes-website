import { FaLongArrowAltUp } from "react-icons/fa";
import eye from '/src/assets/eye.png';
import { useEffect, useState } from "react";
import {motion} from 'framer-motion'

function Landing() {

  const [isVisible, setIsVisble] = useState(false);
  useEffect(()=>{
    const timer  = setTimeout(()=>{
    setIsVisble(true);}, 500);
    return()=> clearTimeout(timer);
  },[]);

  return (

    <div data-scroll data-scroll-section data-scroll-speed='-.3' className="w-[100%] h-[100%] bg-zinc-900 pt-1">

      <div className="text mt-36 px-14">
        {['we create',
        'eye-catching',
        'presentations'].map((item,index)=>{
            return <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  isVisible && (
                    <motion.div initial={{width:0}} animate={{width:'8vw'}} transition={{duration:1,ease:[0.76,0,0.24,1]}} className="mr-5 w-[8vw] -top-[1.2vw] rounded-full h-[5vw] bg-blue-900 relative overflow-hidden">
                    <img className="w-full h-full object-cover" src={eye} alt="eye-opening" />
                  </motion.div>
                  ))}
              <h1 className="mb-[1vw] leading-[.75] uppercase text-[5vw] font-['Test_Founders_Grotesk_X-Cond SmBd'] font-bold">{item}</h1>
              </div>
        </div>})}
      </div>

      <div className="h-[15%] border-t-[1px] border-zinc-500 mt-40 flex justify-between items-center py-16 px-20">
        {['For public and private companies',
        'From the first pitch to IPO'].map((item,index)=>(
            <p className="text-md font-light tracking-tight leading-none" key={index}>{item}</p>
        ))}
        <div className="start flex place-items-center gap-2">
            <div className="px-5 py-2 border-[1px] border-zinc-500 font-light rounded-full text-md uppercase">Start the Project</div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center border-[2px] border-zinc-500">
                <span className="rotate-45">
                    <FaLongArrowAltUp/>
                </span>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Landing
