import { biscuits, chocolate, pink, strawberry } from "@assets/images/donuts";
import { useEffect, useState } from "react";
import HomeNavbar from "./HomeNavbar";
import HomeHeroText from "./HomeHeroText";

const HomePageHero = () => {
  // const [images, setImages] = useState([strawberry, biscuits, chocolate, pink]);

  const [images, setImages] = useState([
    {
      src: strawberry,
      bgTo: "#FE6151",
      bgFrom: "#FD5688",
      title: "Strawberry Donut",
      desc: "Soft donut base meets sweet strawberry glaze for a delightful treat.",
      buttonTextColor: "white",
    },
    {
      src: biscuits,
      bgTo: "#F4DECC",
      bgFrom: "#AB9078",
      title: "Biscuits Donut",
      desc: "Flaky biscuit-inspired donut with a golden exterior, a tempting twist.",
      buttonTextColor: "black",
    },
    {
      src: chocolate,
      bgTo: "#663C0A",
      bgFrom: "#7E5B26",
      title: "Chocolate Donut",
      desc: "Decadent cocoa-infused donut with velvety chocolate glaze for pure indulgence.",
      buttonTextColor: "white",
    },
    {
      src: pink,
      bgTo: "#E9A4D7",
      bgFrom: "#84548E",
      title: "Happy Donut",
      desc: "Joyful donut with a cheerful sprinkle of happiness and sweet delight.",
      buttonTextColor: "white",
    },
  ]);
  // const [gradient, setGradient] = useState(`from-[#FD5688] to-[#FD5688]`);
  // const [gradient, setGradient] = useState({
  //   bgTo: images[0].bgTo,
  //   bgFrom: images[0].bgFrom,
  // });
  const [activeData, setActiveData] = useState({ ...images[0] });
  console.log("GRADIENT", activeData);

  const handleClick = (i) => {
    const newImages = [...images];
    [newImages[i], newImages[0]] = [newImages[0], newImages[i]];
    setImages(newImages);

    // setGradient(generateGradientColor());
    // setGradient({ ...obj });
  };

  useEffect(() => {
    setActiveData({ ...images[0] });
  }, [images]);

  console.log(activeData);

  return (
    <div className=" bg-[#FCF8F8]">
      <div className=" grid grid-cols-4 overflow-hidden h-screen">
        <div className=" col-span-2">
          <HomeNavbar />
          <HomeHeroText activeData={activeData} />
        </div>

        <div className=" col-span-2 grid grid-cols-2 grid-rows-3 gap-y-5 transition-all duration-500 ease-in-out w-full relative z-10">
          {/* <circle className={` bg-gradient-to-tr from-[#FD5688] to-[#FD5688] rounded-s-[50%] w-full h-full absolute`} /> */}
          <div
            className={`rounded-s-[48%] w-full h-full absolute transition-all duration-200 z-[-1]`}
            // style={{ background: `linear-gradient(to left top, ${gradient.bgFrom}, 50%, ${gradient.bgTo})` }}
            style={{ background: `linear-gradient(200deg, ${activeData?.bgFrom}, 50%, ${activeData?.bgTo})` }}
            // style={{ background: `linear-gradient(${gradient.bgFrom}, 50%, ${gradient.bgTo})` }}
          />
          {/* <div
            className={` bg-gradient-to-tr from-[${bgTo}] to-[${bgTo}] rounded-s-[50%] w-full h-full absolute`}
          ></div> */}
          {images.map((obj, i) => {
            let rowSpan;
            let scale;
            if (i === 0) {
              rowSpan = "row-span-3 justify-end";
              // scale = "scale-[2.00] hover:scale-[2.10]";
              scale = "w-[75%] hover:scale-110";
            } else {
              rowSpan = "row-span-1 justify-center";
              // scale = "scale-[1.20] hover:scale-[1.30]";
              scale = "w-[50%] hover:scale-110";
            }
            return (
              <div className={`${rowSpan} col-span-1 flex items-center transition-all duration-300`} key={i}>
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
