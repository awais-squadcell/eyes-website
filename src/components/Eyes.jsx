import { useEffect, useState } from "react";

function Eyes() {
  const [irisOffset1, setIrisOffset1] = useState({ x: 0, y: 0 });
  const [irisOffset2, setIrisOffset2] = useState({ x: 0, y: 0 });

  const [rotate1, setRotate1] = useState(0);
  const [rotate2, setRotate2] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Eye 1: Calculate the center of the first eye
      const eye1 = document.getElementById("eye1");
      const rect1 = eye1.getBoundingClientRect();
      const centerX1 = rect1.left + rect1.width / 2;
      const centerY1 = rect1.top + rect1.height / 2;

      // Calculate delta for Eye 1
      const deltaX1 = clientX - centerX1;
      const deltaY1 = clientY - centerY1;

      // Constrain Eye 1 iris movement
      const irisLimit = 15; // Max movement in pixels
      const irisX1 = Math.min(Math.max(deltaX1 * 0.02, -irisLimit), irisLimit);
      const irisY1 = Math.min(Math.max(deltaY1 * 0.02, -irisLimit), irisLimit);

      setIrisOffset1({ x: irisX1, y: irisY1 });

      // Calculate rotation for the pupil
      const angle1 = Math.atan2(deltaY1, deltaX1) * (180 / Math.PI);
      setRotate1(angle1 - 180);

      // Eye 2: Calculate the center of the second eye
      const eye2 = document.getElementById("eye2");
      const rect2 = eye2.getBoundingClientRect();
      const centerX2 = rect2.left + rect2.width / 2;
      const centerY2 = rect2.top + rect2.height / 2;

      // Calculate delta for Eye 2
      const deltaX2 = clientX - centerX2;
      const deltaY2 = clientY - centerY2;

      // Constrain Eye 2 iris movement
      const irisX2 = Math.min(Math.max(deltaX2 * 0.02, -irisLimit), irisLimit);
      const irisY2 = Math.min(Math.max(deltaY2 * 0.02, -irisLimit), irisLimit);

      setIrisOffset2({ x: irisX2, y: irisY2 });

      // Calculate rotation for the pupil
      const angle2 = Math.atan2(deltaY2, deltaX2) * (180 / Math.PI);
      setRotate2(angle2 - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="flex gap-12 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {/* Eye 1 */}
          <div
            id="eye1"
            className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white"
          >
            <div
              style={{
                transform: `translate(${irisOffset1.x}px, ${irisOffset1.y}px)`,
              }}
              className="relative w-2/3 h-2/3 rounded-full bg-zinc-900"
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate1}deg)`,
                }}
                className="line absolute w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-8 h-8 rounded-full bg-white"></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div
            id="eye2"
            className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white"
          >
            <div
              style={{
                transform: `translate(${irisOffset2.x}px, ${irisOffset2.y}px)`,
              }}
              className="relative w-2/3 h-2/3 rounded-full bg-zinc-900"
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate2}deg)`,
                }}
                className="line absolute w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-8 h-8 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
