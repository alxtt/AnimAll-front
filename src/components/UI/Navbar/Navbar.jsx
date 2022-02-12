import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import CustomButton from "../button/CustomButton"
import Profile from "../../Profile";
import LogoutButton from "../../LogOutButton";
import LoginButton from "../../LoginButton";


const Navbar = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isAuthenticated) {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                <a className="navbar-brand" href="/about">Homepage</a>
                <a className="navbar-brand" href="/posts">Dashboard</a>
                <a className="navbar-brand" href="/shelter">Shelters</a>
                <a className="navbar-brand" href="/animal">Animals</a>
                </div>
            </nav>
            );
    } else {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/about">Homepage</a>
                <a className="navbar-brand" href="/posts">Dashboard</a>
            </nav>
        );
    }
};

export default Navbar;
