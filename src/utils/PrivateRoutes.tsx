
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


export default function PrivateRoutes() {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  

  return isAuthenticated ? <Outlet /> : <Navigate to="/user/signin" />;
}

//   const token = localStorage.getItem("token");

//   const isValidToken = token && isTokenValid(token);

//   return isValidToken ? <Outlet /> : <Navigate to="/user/signin" />;
// }

// const isTokenValid = (token: string) => {
//   try {
//     const decodedToken = jwtDecode(token);
//     return decodedToken && !isTokenExpired(decodedToken.exp);
//   } catch (error) {
//     return false;
//   }
// };

// const isTokenExpired = (exp: number | undefined) => {
//   const currentTime = Date.now() / 1000;
//   return exp < currentTime;
// };