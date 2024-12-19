import { motion } from "framer-motion"
function Marquee() {

  return (
    <div className="w-full py-20 rounded-t-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-44 overflow-hidden whitespace-nowrap">
        <motion.h1 initial= {{x:0}} animate= {{x:'-100%'}} transition={{ease:'linear', repeat: Infinity, duration: 5}} className="text-[22vw] leading-none font-['Test_Founders_Grotesk_X-Cond SmBd'] uppercase pt-1 -mb-1 font-semibold']">The eyes are watching.</motion.h1>
        <motion.h1 initial= {{x:0}} animate= {{x:'-100%'}} transition={{ease:'linear', repeat: Infinity, duration: 5}} className="text-[22vw] leading-none font-['Test_Founders_Grotesk_X-Cond SmBd'] uppercase pt-1 -mb-1 font-semibold']">The eyes are watching.</motion.h1>
        <motion.h1 initial= {{x:0}} animate= {{x:'-100%'}} transition={{ease:'linear', repeat: Infinity, duration: 5}} className="text-[22vw] leading-none font-['Test_Founders_Grotesk_X-Cond SmBd'] uppercase pt-1 -mb-1 font-semibold']">The eyes are watching.</motion.h1>
      </div>
    </div>

  )
}

export default Marquee
