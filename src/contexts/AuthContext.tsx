import { jwtDecode } from "jwt-decode";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
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
  const navigate = useNavigate();
  const publicRoutes = ['/user/signin', '/user/signup'];

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      const isValidToken = token && isTokenValid(token);

      if (!isValidToken&&!publicRoutes.includes(window.location.pathname)) {
        // Redirect to sign-in page if not authenticated
        setIsAuthenticated(false);
        navigate("/user/signin");
      } else {
        if (!publicRoutes.includes(window.location.pathname)) {
            setIsAuthenticated(true);
          }
      }
    //   setIsAuthenticated(true);
    };

    checkAuth();
  }, [navigate]);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
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

  const isTokenExpired = (exp) => {
    const currentTime = Date.now() / 1000;
    return exp < currentTime;
  };

  const contextValue: AuthContextType = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
