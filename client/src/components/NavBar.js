import React from 'react';
import { Link, useMatch, useResolvedPath, useNavigate } from 'react-router-dom';

const Navbar = ({ currentUser, setCurrentUser }) => {
    const navigate = useNavigate()

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        )
    }

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => setCurrentUser(""))
        .then(navigate("/"))
    }

    return (
        <nav className="nav">
            <div className="site-title">Grouper</div>
            <ul>
                {/* TODO: REDO HOMER -> MYGROUPER */}
                { !currentUser ? <CustomLink to="/">Login</CustomLink> : <><CustomLink><button onClick={handleLogout}>Logout</button></CustomLink><CustomLink to="/home">Home</CustomLink></> }
            </ul>
        </nav>
    )
};

export default Navbar;
