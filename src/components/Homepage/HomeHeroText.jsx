/* eslint-disable react/prop-types */

const HomeHeroText = ({ activeData }) => {
  return (
    <div className=" flex flex-col gap-y-16 py-20 px-14">
      <h1 className=" text-[110px] font-normal tracking-wider leading-[130px] max-w-[500px]">{activeData?.title}</h1>
      <p className=" text-[28px] leading-[40px] font-light max-w-[600px]">{activeData?.desc}</p>
      <div>
        <button
          className={` px-8 py-4 border-none rounded-xl tracking-wider text-[${activeData?.buttonTextColor}] font-normal text-[28px] cursor-pointer hover:scale-105 transition-all duration-300`}
          style={{ background: `linear-gradient(200deg, ${activeData?.bgFrom}, 50%, ${activeData?.bgTo})` }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HomeHeroText;
