import React from 'react';
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import {Link} from "react-router-dom";
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

