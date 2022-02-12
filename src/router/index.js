import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";


export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/animal', component: Posts, exact: true},
    {path: '/shelter', component: Posts, exact: true},
]

export const publicRoutes = [
    {path: '/posts/:id', component: PostIdPage, exact: true},
]
