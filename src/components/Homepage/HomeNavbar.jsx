import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
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
        {/* <h1>IMG</h1> */}
        {/* <div className=" h-[50px] w-[50px] rounded-full flex justify-center items-center bg-[#8C5D5D]">
          <h1 className=" text-white font-qahiri">D</h1>
        </div> */}
        {/* <Avatar size={64} icon={<UserOutlined />} /> */}
        <Avatar className="bg-[#8C5D5D]" size={64} icon={<h1 className=" text-[36px] font-light">D</h1>} />
        <div className=" flex justify-center items-center gap-x-20">
          {menu.map((obj, i) => {
            return (
              <Link
                className=" no-underline text-black text-[28px] tracking-wide hover:scale-105 transition-all duration-300"
                key={i}
                to={obj.to}
              >
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
