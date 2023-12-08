import React from "react";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  const menu = [
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Shops",
      to: "/shops",
    },
    {
      name: "Store",
      to: "/store",
    },
    {
      name: `What's Donut`,
      to: "/whats-donut",
    },
  ];
  return (
    <div>
      <div className=" flex justify-between items-center gap-x-10 pl-14 py-14">
        <h1>IMG</h1>
        <div className=" h-[50px] w-[50px] bg-black rounded-full relative">
          <h1 className=" absolute top-0 left-0 right-0 bottom-0 text-white">J</h1>
        </div>
        <div className=" flex justify-center items-center gap-x-20">
          {menu.map((obj, i) => {
            return (
              <Link className=" no-underline text-black text-3xl tracking-wide" key={i} to={obj.to}>
                {obj.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
