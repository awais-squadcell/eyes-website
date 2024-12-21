import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Featured() {
  const [hover, setHover] = useState(null);

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards flex w-full gap-5 mt-10">
          {/* Card left */}
          <div className="w-full">
          <ul className="list-disc pl-5 m-2 p-2 font-semibold font-['Test_Founders_Grotesk_X-Cond SmBd'] text-2xl uppercase"><li>left</li></ul>
            <div
            className={`cardContainer relative w-full h-[80vh] transition-transform duration-300 ${
              hover === "left" ? "scale-95 z-20" : "z-10"
            }`}
            onMouseEnter={() => setHover("left")}
            onMouseLeave={() => setHover(null)}
          >
            <h1
              className="absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter font-bold font-['Test_Founders_Grotesk_X-Cond SmBd'] text-[#cdea68] text-8xl"
            >
              {hover === "left" ? "Left" : ""}
            </h1>
            <div className="card w-full overflow-hidden rounded-xl h-full">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="Eyes are watching"
              />
            </div>
          </div>
          <div className="m-2 p-2 flex gap-3">
          <button className="py-2 px-4 uppercase transition ease-linear duration-600 delay-100 hover:text-black hover:bg-white
          border-solid border-2 border-white rounded-full text-xs font-medium text-center">Audit</button>
          <button className="py-2 px-4 uppercase transition ease-linear duration-600 delay-100 hover:text-black hover:bg-white
          border-solid border-2 border-white rounded-full text-xs font-medium text-center">Copy Writing</button>
          <button className="py-2 px-4 uppercase transition ease-linear duration-600 delay-100 hover:text-black hover:bg-white
          border-solid border-2 border-white rounded-full text-xs font-medium text-center">Sales Deck</button>
          <button className="py-2 px-4 uppercase transition ease-linear duration-600 delay-100 hover:text-black hover:bg-white
          border-solid border-2 border-white rounded-full text-xs font-medium text-center">Slides Design</button>
          </div>
          </div>

          {/* Card right */}
          <div className="w-full">
          <ul className="list-disc pl-5 m-2 p-2 font-semibold font-['Test_Founders_Grotesk_X-Cond SmBd'] text-2xl uppercase"><li>right</li></ul>
          <div
            className={`cardContainer relative w-full h-[80vh] transition-transform duration-300 ${
              hover === "right" ? "scale-95 z-20" : "z-10"
            }`}
            onMouseEnter={() => setHover("right")}
            onMouseLeave={() => setHover(null)}
          >
            <h1
              className="absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter font-bold font-['Test_Founders_Grotesk_X-Cond SmBd'] text-[#cdea68] text-8xl"
            >
              {hover === "right" ? "Right" : ""}
            </h1>
            <div className="card w-full overflow-hidden rounded-xl h-full">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="Eyes are watching"
              />
            </div>
          </div>
          <div className="m-2 p-2 flex gap-3">
          <button className="py-2 px-4 uppercase transition ease-linear duration-600 delay-100 hover:text-black hover:bg-white
          border-solid border-2 border-white rounded-full text-xs font-medium text-center">Agency</button>
          <button className="py-2 px-4 uppercase transition ease-linear duration-600 delay-100 hover:text-black hover:bg-white
          border-solid border-2 border-white rounded-full text-xs font-medium text-center">Company Presentation</button>
          </div>
          </div>
        </div>
      </div>
      <div className="px-20">
        <div className="cards flex w-full gap-5 mt-10">
          {/* Card down left */}
          <div className="w-full">
          <ul className="list-disc pl-5 m-2 p-2 font-semibold font-['Test_Founders_Grotesk_X-Cond SmBd'] text-2xl uppercase"><li>left</li></ul>
            <div
            className={`cardContainer relative w-full h-[80vh] transition-transform duration-300 ${
              hover === "down left" ? "scale-95 z-20" : "z-10"
            }`}
            onMouseEnter={() => setHover("down left")}
            onMouseLeave={() => setHover(null)}
          >
            <h1
              className="absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter font-bold font-['Test_Founders_Grotesk_X-Cond SmBd'] text-[#cdea68] text-8xl"
            >
              {hover === "down left" ? "Left" : ""}
            </h1>
            <div className="card w-full overflow-hidden rounded-xl h-full">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt="Eyes are watching"
              />
            </div>
          </div>
          <div className="m-2 p-2 flex gap-3">
          <button className="py-2 px-4 uppercase transition ease-linear duration-600 delay-100 hover:text-black hover:bg-white
          border-solid border-2 border-white rounded-full text-xs font-medium text-center">Audit</button>
          <button className="py-2 px-4 uppercase transition ease-linear duration-600 delay-100 hover:text-black hover:bg-white
          border-solid border-2 border-white rounded-full text-xs font-medium text-center">Copy Writing</button>
          <button className="py-2 px-4 uppercase transition ease-linear duration-600 delay-100 hover:text-black hover:bg-white
          border-solid border-2 border-white rounded-full text-xs font-medium text-center">Sales Deck</button>
          <button className="py-2 px-4 uppercase transition ease-linear duration-600 delay-100 hover:text-black hover:bg-white
          border-solid border-2 border-white rounded-full text-xs font-medium text-center">Slides Design</button>
          </div>
          </div>

          {/* Card down right */}
          <div className="w-full">
          <ul className="list-disc pl-5 m-2 p-2 font-semibold font-['Test_Founders_Grotesk_X-Cond SmBd'] text-2xl uppercase"><li>right</li></ul>
          <div
            className={`cardContainer relative w-full h-[80vh] transition-transform duration-300 ${
              hover === "down right" ? "scale-95 z-20" : "z-10"
            }`}
            onMouseEnter={() => setHover("down right")}
            onMouseLeave={() => setHover(null)}
          >
            <h1
              className="absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter font-bold font-['Test_Founders_Grotesk_X-Cond SmBd'] text-[#cdea68] text-8xl"
            >
              {hover === "down right" ? "Right" : ""}
            </h1>
            <div className="card w-full overflow-hidden rounded-xl h-full">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt="Eyes are watching"
              />
            </div>
          </div>
          <div className="m-2 p-2 flex gap-3">
          <button className="py-2 px-4 uppercase transition ease-linear duration-600 delay-100 hover:text-black hover:bg-white
          border-solid border-2 border-white rounded-full text-xs font-medium text-center">Agency</button>
          <button className="py-2 px-4 uppercase transition ease-linear duration-600 delay-100 hover:text-black hover:bg-white
          border-solid border-2 border-white rounded-full text-xs font-medium text-center">Company Presentation</button>
          </div>
          </div>
        </div>
      </div>
      <div className="m-6 p-6 flex justify-center items-center">
      <button className="py-4 px-10 flex gap-5 items-center uppercase transition ease-linear duration-600 delay-100 hover:text-black hover:bg-white
          border-solid border-2 border-white rounded-full text-lg font-medium ">view all case studies <FaArrowAltCircleRight /></button>
      </div>
    </div>
  );
}

export default Featured;
