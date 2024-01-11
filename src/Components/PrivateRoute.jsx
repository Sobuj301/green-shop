import {  useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,isLoading} = useContext(AuthContext)

     if(isLoading){
        return <progress className="progress w-56"></progress>
     }

    if(!user){
     return <Navigate to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;