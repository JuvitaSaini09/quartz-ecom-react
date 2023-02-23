import { useLocation, Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  console.log("token :", token, "location :", location);

  // let from = location?.state?.from?.pathname || "/home";
  return token ? <Outlet /> : <Navigate to="/loginPage" replace={true} />;
};
