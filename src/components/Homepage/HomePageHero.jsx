import { biscuits, chocolate, pink, strawberry } from "@assets/images/donuts";
import { useState } from "react";

const HomePageHero = () => {
  // const [images, setImages] = useState([strawberry, biscuits, chocolate, pink]);
  const [current, setCurrent] = useState(0);
  const [gradient, setGradient] = useState("from-[#FD5688] to-[#FD5688]");
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

  const generateGradientColor = () => {
    const currentImage = images[current];
    const gradientColor = `from-[${currentImage.bgFrom}] to-[${currentImage.bgTo}]`;
    return gradientColor;
  };
  const handleClick = (i) => {
    const newImages = [...images];
    [newImages[i], newImages[0]] = [newImages[0], newImages[i]];
    setImages(newImages);
    setCurrent(i);
    setGradient(generateGradientColor());
  };

  console.log(generateGradientColor());
  console.log(current);

  return (
    <div>
      <div className=" grid grid-cols-4 overflow-hidden h-screen">
        <div className=" col-span-2"></div>

        <div className=" col-span-2 grid grid-cols-2 grid-rows-3 gap-y-5 transition-all duration-500 ease-in-out w-full relative">
          <circle className={` bg-gradient-to-tr ${gradient} rounded-s-[50%] w-full h-full absolute`} />
          {images.map((obj, i) => {
            let rowSpan;
            let scale;
            if (i === 0) {
              rowSpan = "row-span-3";
              scale = "scale-150";
            } else {
              rowSpan = "row-span-1";
              scale = "scale-100";
            }
            return (
              <div className={`${rowSpan} col-span-1 flex justify-center items-center`} key={i}>
                <img
                  className={`${scale} object-contain bg-transparent cursor-pointer`}
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
