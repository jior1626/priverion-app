
import React from "react";

import "./Layout.css";
import NavbarMenu from "./Navbar/Navbar";

interface LayoutInterface {
    children?: React.ReactNode;
}
const Layout: React.FC<LayoutInterface> = ({children}) => {
    return (
       <div className="wrapper">
            <div className="main-panel">
                <div className="">
                    {/* <NavbarMenu />  */}
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div> 
    )
}

export default Layout;