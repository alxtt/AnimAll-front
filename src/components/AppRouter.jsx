import React, {useContext} from 'react';
import { Routes ,Route } from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../router";
import App from "../App";
import About from "../pages/About";
import Posts from "../pages/Posts";
import {Shelter} from "../pages/Shelter";
import {Animal} from "../pages/Animal";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/shelter" element={<Shelter />} />
            <Route path="/animal" element={<Animal />} />
        </Routes>
    );
};

export default AppRouter;
