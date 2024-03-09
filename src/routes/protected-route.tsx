import { AuthContext } from "@/hooks/useAuth";
import { Auth } from "@/types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props) => {

    const { user } = useContext(AuthContext) as Auth

    if (!user) {
        // user is not authenticated
        return <Navigate to="/" />;
    }
    return children;
}

export { ProtectedRoute };

