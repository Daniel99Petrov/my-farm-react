import React, { ReactNode } from "react";
import { useAuth } from "../../contexts/AuthContext";

 
interface UserRoleHOCProps {
    children: ReactNode;
}
 
const UserRoleHOC: React.FC<UserRoleHOCProps> = ({ children }) => {
    const { user } = useAuth();
    const canUserView = user?.role === "operator" || user?.role === "owner";
 
    return canUserView ? <>{children}</> : null;
};
 
export default UserRoleHOC;