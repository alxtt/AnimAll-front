import React from 'react';
import SearchBar from "../components/SearchBar";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import LoginButton from "../components/LoginButton";
import {Link} from "react-router-dom";
import LogoutButton from "../components/LogOutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../components/Profile";


function About() {
    const { user, isAuthenticated, isLoading } = useAuth0();
            return (
                <div className="main">
                    <h1 className="header">AnimAll</h1>
                    <h2 className="subheader">Thousands of animals are waiting for you.</h2>
                </div>
            );
}

export default About;

