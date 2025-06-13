import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <nav className="navbar">
            <h1>Hazem Barkallah</h1>
            <ul>
                <li>
                    <Link to="/" className={pathname === "/" ? "active" : ""}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className={pathname === "/projects" ? "active" : ""}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={pathname === "/contact" ? "active" : ""}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;