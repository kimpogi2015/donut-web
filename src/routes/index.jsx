/* eslint-disable react/prop-types */
import CmsLayout from "@pages/layout/CmsLayout";
import LoginPage from "@pages/login-page/LoginPage";
import HomePage from "@pages/non-authenticated/HomePage";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { cmsRoutes } from "./routes-data";

export const userRole = {
  ADMIN: "ADMIN",
  SOCIAL_MEDIA_MANAGER: "SOCIAL MEDIA MANAGER",
  CONTENT_WRITER: "CONTENT WRITER",
  CONTENT_CREATOR: "CONTENT CREATOR",
  DATA_ANALYST: "DATA ANALYST",
};

const PrivateRoute = ({ roleAllowed }) => {
  //   const auth = getisAuth();
  const auth = {
    role: "ADMIN",
  };
  const location = useLocation();
  if (auth) {
    const { role } = auth;
    if (roleAllowed.includes(role)) {
      console.log(roleAllowed.includes(role));
      return <Outlet />;
    } else {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export const UnAuthPage = () => {
  // const { role } = getisAuth() || { role: "" };
  const auth = {
    role: "ADMIN",
  };

  const { role } = auth;
  const location = useLocation();

  if (role === userRole.ADMIN || role === userRole.DATA_ANALYST) {
    return <Navigate to="/admin/cms/dashboard" state={{ from: location }} replace />;
  } else if (role === userRole.SOCIAL_MEDIA_MANAGER) {
    return <Navigate to="/admin/cms/testimonials" state={{ from: location }} replace />;
  } else if (role === userRole.CONTENT_CREATOR) {
    return <Navigate to="/admin/cms/news" state={{ from: location }} replace />;
  } else {
    return <Outlet />;
  }
};

const Routers = () => {
  return (
    <Routes>
      <Route element={<UnAuthPage />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<CmsLayout />}>
        {cmsRoutes.map((route, index) => (
          <Route key={index} element={<PrivateRoute roleAllowed={route.privilage} />}>
            <Route path={`/admin${route.path}`} element={route.element} />
          </Route>
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Routers;
