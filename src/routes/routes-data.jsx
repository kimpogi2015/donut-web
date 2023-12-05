import { HomeOutlined, ProfileOutlined, SoundOutlined } from "@ant-design/icons";
import Dashboard from "@pages/authenticated/Dashboard";
// import Dashboard from "@pages/cms/Dashboard";
// import News from "@pages/cms/News";
// import Users from "@pages/cms/Users";
import { Link } from "react-router-dom";

export const cmsRoutes = [
  {
    path: "/cms/dashboard",
    element: <Dashboard />,
    privilage: "ADMIN:DATA ANALYST",
  },
  // {
  //   path: "/cms/users",
  //   element: <Users />,
  //   privilage: "ADMIN",
  // },
  // {
  //   path: "/cms/news",
  //   element: <News />,
  //   privilage: "ADMIN:CONTENT CREATOR",
  // },
];

const getItem = (label, key, icon, children) => {
  return {
    label,
    key,
    icon,
    children,
  };
};

// label, key, icon, children
export const routeItems = {
  ADMIN: [
    getItem(<Link to="/admin/cms/dashboard">Dashboard</Link>, "dashboard", <HomeOutlined />),
    getItem("Data", "", <ProfileOutlined />, [
      getItem(<Link to="/admin/cms/news">News</Link>, "news"),
      // getItem(<Link to="/admin/cms/news">News</Link>, "news"),
    ]),
    getItem(<Link to="/admin/cms/users">Users</Link>, "users", <SoundOutlined />),
  ],
  "CONTENT CREATOR": [getItem(<Link to="/admin/cms/news">News</Link>, "news")],
  "DATA ANALYST": [getItem(<Link to="/admin/cms/dashboard">Dashboard</Link>, "dashboard", <HomeOutlined />)],
};
