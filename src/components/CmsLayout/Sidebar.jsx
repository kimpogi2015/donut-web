// import { HomeOutlined, ProfileOutlined } from "@ant-design/icons";
import { routeItems } from "@routes/routes-data";
import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { testlogo } from '../assets/logo';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ collapsed, setCollapsed }) => {
  // const dispatch = useDispatch();
  // const dispatch = useDispatch();
  // const { profileInfo } = useSelector((state) => state.user);
  const { Sider } = Layout;
  const location = useLocation();

  const [selectedKey, setSelectedKey] = useState(location.pathname);
  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedKey("/");
    } else {
      setSelectedKey(location.pathname.split("/").join(" ").trim().split(" ")[2]);
      // setSelectedKey(location.pathname.split('/')[1]);
    }
    // dispatch(getProfileFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // setSelectedKey(location.pathname.split('/')[location.pathname.split('/').length - 1]);
  // setSelectedKey(location.pathname.split('/')[1]);

  const userDetails = {
    role: "ADMIN",
  };

  const items = routeItems?.[userDetails?.role] || [];

  return (
    <div className="sticky left-0 top-0 h-screen bg-white">
      <Sider
        className=" h-screen relative "
        //   collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="lg"
        theme="light"
        width={250}
        collapsedWidth={50}
      >
        <div className="flex flex-col gap-y-0 transition-all duration-300">
          {/* {collapsed || <h1 className=" text-center py-10 text-3xl">JOIN ARMY</h1>} */}
          {/* {collapsed && <h1 className=" text-center py-5 text-3xl">J</h1>} */}
          {collapsed && (
            <div className=" w-full h-full bg-white flex justify-center items-center transition-all duration-300">
              {/* <img className="w-[48px] px-1 mx-auto my-5 rounded-sm" src={joinarmysmall} alt="" /> */}
            </div>
          )}
          {!collapsed && (
            <div className=" w-full h-full bg-white flex justify-center items-center transition-all duration-300">
              {/* <img className=" w-[150px] mx-auto my-7 rounded-sm" src={joinarmysmall} alt="" /> */}
            </div>
          )}

          {/* {collapsed && <img className=" w-[40px] mx-auto mt-10 mb-5 " src={testlogo} alt="" />} */}
          {/* <h1 className=" text-2xl font-bold text-center mt-5">Defensys PH</h1> */}
          <Menu
            mode="inline"
            items={items}
            defaultSelectedKeys={`${selectedKey}`}
            selectedKeys={[selectedKey]}
            className=" pt-5"
          />
          {/* {collapsed || (
							<div className=" text-center absolute bottom-20 left-0 right-0">
								<p className=" text-[#5E5E5E]">For question and inquiries</p>
								<p>inquire@worldbexevents.com</p>
								<p className=" text-[#5E5E5E]">or contact us at</p>
								<p>8656 9239</p>
							</div>
						)} */}
        </div>
      </Sider>
      {/* </ConfigProvider> */}
    </div>
  );
};

export default Sidebar;
