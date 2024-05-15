import React from "react";
import { Navigate, useNavigate } from "react-router";

const PrivateRoute = ({isLoggedin, children}) => {
    if(isLoggedin){
        return children;
    }
    else{
        return <Navigate to="/login"/>
    }
}

export default PrivateRoute