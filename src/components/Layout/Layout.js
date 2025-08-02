import React from "react";
import './Layout.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


const Layout = () =>{
    return(
        <div className="layout">
            <Navbar className="navbar"/>
            <main className="Main">
                <Outlet />
            </main>
            <Footer className="footer"/>
        </div>
    );
};

export default Layout;