import { Outlet } from "react-router-dom";

import Header from "../components/sections/public/Header";
import Footer from "../components/sections/public/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <div className="quick-chat center fixed c-pointer  size-45">
          <svg
              height="21"
              viewBox="0 0 21 21"
              width="21"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
                  d="m8 13.5172414c4.418278 0 8-3.2845583 8-7.0172414 0-3.73268314-3.581722-6.5-8-6.5s-8 3.02593755-8 6.75862069c0 1.45741942.5460328 2.80709561 1.47469581 3.91098161l-.97469581 4.5803977 3.91607376-2.4472652c1.07810761.4571647 2.29544433.7145066 3.58392624.7145066z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  transform="translate(3 3)"
              />
          </svg>
      </div>
    </>
  );
};

export default Layout;
