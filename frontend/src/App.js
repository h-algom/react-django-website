import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/styles/public/global.scss";

import Layout from "./pages/Layout";

import Home from "./pages/public/Home";
import Contact from "./pages/public/Contact";

import Login from "./pages/public/Login";
import Register from "./pages/public/Register";

import AuthUser from "./pages/AuthUser";
import Main from "./pages/private/Main";

import Missing from "./pages/public/Missing";

import Test from "./pages/public/Test";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/`} element={<Layout />}>
                    <Route path={`/`} element={<Home />} />
                    <Route path={`/contact-us`} element={<Contact />} />
                </Route>
                <Route element={<AuthUser />}>
                    <Route path={`/app`} element={<Main />} />
                </Route>
                <Route path={`/login`} element={<Login />} />
                <Route path={`/register`} element={<Register />} />
                <Route path={`/test`} element={<Test />} />
                <Route path={`*`} element={<Missing />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
