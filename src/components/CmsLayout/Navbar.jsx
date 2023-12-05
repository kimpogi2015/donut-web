import { DownOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown } from "antd";
import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { logout } from "@store/slice/auth-slice";

// eslint-disable-next-line react/prop-types
const Navbar = ({ collapsed, setCollapsed }) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  // 	if (!info?.firstName && !info?.lastName && !info?.sex) {
  // 		formGoogleReg.setFieldsValue({
  // 			firstName: userDetails.firstName,
  // 			lastName: userDetails.lastName,
  // 			email: userDetails.email,
  // 		});
  // 		setIsModalOpen(true);
  // 	}
  // }, []);

  useEffect(() => {
    // dispatch(getProfileFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = [
    {
      label: (
        <div className=" w-full justify-center flex">
          <Button
            className=" w-full"
            icon={<LogoutOutlined />}
            type=""
            // onClick={() => {
            //   dispatch(logout());
            //   setTimeout(() => {
            //     window.location.reload();
            //   }, 300);
            // }}
          >
            Logout
          </Button>
        </div>
      ),
      key: "0",
    },
  ];
  return (
    <>
      <div className=" flex items-center justify-between px-5 sm:justify-between gap-x-1 bg-[#967E76] 2xl:h-[70px] h-[8vh] sticky top-0 z-10 overflow-hidden">
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: "trigger scale-150 text-white",
          onClick: () => setCollapsed(!collapsed),
        })}
        {/* <Button
							className=" float-right right-5 top-0 bottom-0"
							onClick={() => {
								dispatch(logout());
								setTimeout(() => {
									window.location.reload();
								}, 300);
							}}
						>
							Logout
						</Button> */}
        <Dropdown
          placement="bottomRight"
          arrow
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <div className=" flex justify-center items-center sm:gap-x-4 gap-x-2 cursor-pointer py-2">
            <Avatar
              // icon={<DownOutlined />}
              className=" text-white uppercase bg-black relative"
              style={{
                verticalAlign: "middle",
              }}
              size="large"
              // src="https://lh3.googleusercontent.com/a/AAcHTtfT01lhudJkgVO9L80QDPwCpsy5O5eQetEgVOy4Eg=s96-c"
              // alt={info?.firstName?.charAt(0) || userDetails?.firstName?.charAt(0)}
            >
              {/* <DownOutlined className="absolute -bottom-1 left-0 right-0" /> */}
              {/* {profileInfo?.firstName?.charAt(0)?.toUpperCase() || "N/A"} */}
            </Avatar>
            <div className=" flex-col justify-center sm:flex hidden m-0 p-0">
              <p className=" m-0 p-0 sm:text-[16px] text-[15px] text-white capitalize">
                {/* {profileInfo?.firstName || "N/A"} {profileInfo?.lastName || "N/A"} */}
              </p>
              <p className=" m-0 sm:text-[15px] text-[14px] text-white">
                {/* {profileInfo?.email || "N/A"} <DownOutlined className=" w-3" /> */}
              </p>
            </div>
            <p className=" m-0 p-0 sm:text-[16px] text-[15px] text-white sm:hidden block capitalize">
              {/* {profileInfo?.firstName?.split(" ")[0] || "N/A"} */}
              <DownOutlined className=" w-3" />
            </p>
          </div>
        </Dropdown>
      </div>
      {/* </Header> */}
    </>
  );
};

export default Navbar;
