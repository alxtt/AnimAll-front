import React, {useEffect, useState} from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import About from "./pages/About";
import Posts from "./pages/Posts";
import {Shelter} from "./pages/Shelter";
import {Animal} from "./pages/Animal";
import Profile from "./pages/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ExternalApi from "./pages/ExternalApi";
import {PublicAnimal} from "./pages/PublicAnimal";

function App() {

    const { isLoading, error } = useAuth0();

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<About />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/posts" element={<Posts />}/>
                <Route path="/shelter" element={<Shelter />}/>
                <Route path="/animal" element={<Animal />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/publicanimal" element={<PublicAnimal />} />
                <Route path="/external-api" component={ExternalApi} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;


