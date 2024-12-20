import { useState } from "react";

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
          {/* Card Right */}
          <div
            className={`cardContainer relative w-1/2 h-[80vh] transition-transform duration-300 ${
              hover === "right" ? "scale-95" : ""
            }`}
            onMouseEnter={() => setHover("right")}
            onMouseLeave={() => setHover(null)}
          >
            <h1
              className="absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter font-bold font-['Test_Founders_Grotesk_X-Cond SmBd'] text-[#cdea68] text-8xl"
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

          {/* Card Left */}
          <div
            className={`cardContainer relative w-1/2 h-[80vh] transition-transform duration-300 ${
              hover === "left" ? "scale-95" : ""
            }`}
            onMouseEnter={() => setHover("left")}
            onMouseLeave={() => setHover(null)}
          >
            <h1
              className="absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter font-bold font-['Test_Founders_Grotesk_X-Cond SmBd'] text-[#cdea68] text-8xl"
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
        </div>
      </div>
    </div>
  );
}

export default Featured;
