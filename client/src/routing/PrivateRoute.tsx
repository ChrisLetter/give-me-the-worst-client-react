import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const stateData = useSelector((state: any) => state);
  return stateData.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
