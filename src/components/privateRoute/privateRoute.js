import { useLocation, Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  // let from = location?.state?.from?.pathname || "/home";
  //when user logs in,send him to the from location,we have to save the from in Navigate state attribute then use it in login page after user logs in
  return token ? <Outlet /> : <Navigate to="/loginPage" replace={true} />;
};
