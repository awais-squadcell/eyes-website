import { FaArrowAltCircleRight } from "react-icons/fa";
import stare from '/src/assets/stare.png';

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.1' className="w-full p-20 bg-[#cdea68] rounded-t-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tighter">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className="w-full flex gap-5 border-t-[2px] pt-10 mt-20 border-[#819830]">
      <div className="w-1/2 ">
      <h1 className="text-5xl">Our approach:</h1>
      <button className="flex gap-10 uppercase items-center px-10 py-6 bg-zinc-900 rounded-full mt-10 text-white transition ease-linear duration-600 delay-100 hover:text-black hover:bg-white">Read More 
        <FaArrowAltCircleRight />
      </button>
      </div>
      <div className="w-1/2 h-[70vh] bg-[#7e952c] rounded-3xl overflow-hidden">
      <img className='w-full h-full object-cover' src={stare} alt="The stare has not yet begun ..." />
      </div>
      </div>
    </div>
  )
}

export default About
