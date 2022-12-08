import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end:true })
        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        )
    }

    return (
        <nav className="nav">
            <div className="site-title">Grouper</div>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
            </ul>
        </nav>
    )
};

export default Navbar;
