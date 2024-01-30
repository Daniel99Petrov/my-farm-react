import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";


export default function PrivateRoutes() {
  const token = localStorage.getItem("token");

  const isValidToken = token && isTokenValid(token);

  return isValidToken ? <Outlet /> : <Navigate to="/user/signin" />;
}

const isTokenValid = (token: string) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken && !isTokenExpired(decodedToken.exp);
  } catch (error) {
    return false;
  }
};

const isTokenExpired = (exp: number | undefined) => {
  const currentTime = Date.now() / 1000;
  return exp < currentTime;
};