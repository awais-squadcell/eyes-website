import { motion } from "framer-motion"
function Marquee() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1'  className="w-full py-10 rounded-t-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1 initial= {{x:0}} animate= {{x:'-100%'}} transition={{ease:'linear', repeat: Infinity, duration: 10}} className="text-[22vw] leading-none font-['Test_Founders_Grotesk_X-Cond SmBd'] uppercase pt-1 -mb-1 font-bold'] pr-20">The eyes are watching.</motion.h1>
        <motion.h1 initial= {{x:0}} animate= {{x:'-100%'}} transition={{ease:'linear', repeat: Infinity, duration: 10}} className="text-[22vw] leading-none font-['Test_Founders_Grotesk_X-Cond SmBd'] uppercase pt-1 -mb-1 font-bold'] pr-20">The eyes are watching.</motion.h1>
        <motion.h1 initial= {{x:0}} animate= {{x:'-100%'}} transition={{ease:'linear', repeat: Infinity, duration: 10}} className="text-[22vw] leading-none font-['Test_Founders_Grotesk_X-Cond SmBd'] uppercase pt-1 -mb-1 font-bold']  pr-20">The eyes are watching.</motion.h1>
      </div>
    </div>

  )
}

export default Marquee
