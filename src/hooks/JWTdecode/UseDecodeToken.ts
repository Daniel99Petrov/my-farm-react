import { jwtDecode } from "jwt-decode";

interface Token {
    id: string;
    username: string;
    role: string;
    iat: number;
    exp: number;
}
const useDecodeToken = () => {
  const token =  localStorage.getItem("token");

  try {
    if(token){
    const decodedToken: Token = jwtDecode(token);
    return decodedToken;
}
  } catch(error){
    throw new Error("ERROR TOKEN");
  }
}
  export default useDecodeToken;