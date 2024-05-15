import React from "react";
import Template from '../components/Template'

const Login = ({setIsLoggedIn}) => {
    return (
        <Template
        title="Welcome Back"
        desc1="Nurturing Mental Well-being: "
        desc2="Detecting and Addressing Depression"
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}>
        </Template>
    )
}

export default Login