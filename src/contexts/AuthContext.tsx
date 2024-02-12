import { jwtDecode } from "jwt-decode";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../static/types/types";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a hook to use the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
// Create a provider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(() => {
    // Initialize user from local storage upon component initialization
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const navigate = useNavigate();
  const publicRoutes = ['/user/signin', '/user/signup'];

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      const currentUser = user;
      const isValidToken = token && isTokenValid(token);

      if (!isValidToken&&!publicRoutes.includes(window.location.pathname)) {
        setIsAuthenticated(false);
        setUser(null);
        navigate("/user/signin");
      } else {
        if (!publicRoutes.includes(window.location.pathname)) {
            setIsAuthenticated(true);
            setUser(currentUser);
          }
      }
    };

    checkAuth();
  }, [navigate]);


  const login = (token: string, user: User) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user)
    console.log(user);
    
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

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
    if(exp){
    return exp < currentTime;
    }
  };

  const contextValue: AuthContextType = {
    isAuthenticated,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
