import Navbar from "@components/CmsLayout/Navbar";
import Sidebar from "@components/CmsLayout/Sidebar";
import { Layout } from "antd";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const CmsLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [collapsed, setCollapsed] = useState(false);
  const { Content } = Layout;
  return (
    <Layout
      style={{
        height: "100%",
        minHeight: "100vh",
        // maxHeight: '100vh'
      }}
    >
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content>
          {/* <div className="h-full overflow-auto"> */}
          <div className="h-full">
            {/* <ConfigProvider theme={{ token: { colorPrimary: "#1C4E84" } }}> */}
            <Outlet />
            {/* </ConfigProvider> */}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default CmsLayout;
