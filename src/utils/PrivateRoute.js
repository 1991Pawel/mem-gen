import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useUserContext();
  let auth = { token: sessionStorage.getItem("token") };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;