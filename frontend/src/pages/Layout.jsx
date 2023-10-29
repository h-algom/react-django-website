import { Outlet } from "react-router-dom";

import Header from "../components/sections/public/Header";
import Footer from "../components/sections/public/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
