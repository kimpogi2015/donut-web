import { biscuits, chocolate, pink, strawberry } from "@assets/images/donuts";
import { useEffect, useState } from "react";
import HomeNavbar from "./HomeNavbar";

const HomePageHero = () => {
  // const [images, setImages] = useState([strawberry, biscuits, chocolate, pink]);

  const [images, setImages] = useState([
    {
      src: strawberry,
      bgTo: "#FE6151",
      bgFrom: "#FD5688",
    },
    {
      src: biscuits,
      bgTo: "#F4DECC",
      bgFrom: "#AB9078",
    },
    {
      src: chocolate,
      bgTo: "#663C0A",
      bgFrom: "#7E5B26",
    },
    {
      src: pink,
      bgTo: "#E9A4D7",
      bgFrom: "#84548E",
    },
  ]);
  // const [gradient, setGradient] = useState(`from-[#FD5688] to-[#FD5688]`);
  const [gradient, setGradient] = useState({
    bgTo: images[0].bgTo,
    bgFrom: images[0].bgFrom,
  });

  const handleClick = (i) => {
    const newImages = [...images];
    [newImages[i], newImages[0]] = [newImages[0], newImages[i]];
    setImages(newImages);

    // setGradient(generateGradientColor());
    // setGradient({ ...obj });
  };

  useEffect(() => {
    setGradient({
      bgTo: images[0].bgTo,
      bgFrom: images[0].bgFrom,
    });
  }, [images]);

  console.log(gradient);

  return (
    <div className=" bg-[#FCF8F8]">
      <div className=" grid grid-cols-4 overflow-hidden h-screen">
        <div className=" col-span-2">
          <HomeNavbar />
        </div>

        <div className=" col-span-2 grid grid-cols-2 grid-rows-3 gap-y-5 transition-all duration-500 ease-in-out w-full relative z-10">
          {/* <circle className={` bg-gradient-to-tr from-[#FD5688] to-[#FD5688] rounded-s-[50%] w-full h-full absolute`} /> */}
          <div
            className={`rounded-s-[48%] w-full h-full absolute transition-all duration-200 z-[-1]`}
            // style={{ background: `linear-gradient(to left top, ${gradient.bgFrom}, 50%, ${gradient.bgTo})` }}
            style={{ background: `linear-gradient(200deg, ${gradient?.bgFrom}, 50%, ${gradient?.bgTo})` }}
            // style={{ background: `linear-gradient(${gradient.bgFrom}, 50%, ${gradient.bgTo})` }}
          />
          {/* <div
            className={` bg-gradient-to-tr from-[${bgTo}] to-[${bgTo}] rounded-s-[50%] w-full h-full absolute`}
          ></div> */}
          {images.map((obj, i) => {
            let rowSpan;
            let scale;
            if (i === 0) {
              rowSpan = "row-span-3";
              // scale = "scale-[2.00] hover:scale-[2.10]";
              scale = "w-[75%] hover:scale-110";
            } else {
              rowSpan = "row-span-1";
              // scale = "scale-[1.20] hover:scale-[1.30]";
              scale = "w-[50%] hover:scale-110";
            }
            return (
              <div
                className={`${rowSpan} col-span-1 flex justify-center items-center transition-all duration-300`}
                key={i}
              >
                <img
                  draggable={false}
                  className={`${scale} object-contain bg-transparent cursor-pointer transition-all duration-300`}
                  key={i}
                  src={obj.src}
                  alt={`Image ${i + 1}`}
                  onClick={() => {
                    handleClick(i);
                  }}
                />
              </div>
            );
          })}
          {/* <button onClick={handleClick}>Swap Images</button> */}
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
