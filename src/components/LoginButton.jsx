import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MyButton from "./UI/button/MyButton";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <MyButton onClick={() => loginWithRedirect()}>Log In</MyButton>;
};

export default LoginButton;