import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import "./navbar.css"
function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();

    const logout = () => {
        localStorage.clear();
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('musicPlayerUser')));
    }, [location]);

    return (
        <div className="nav-container" style={{ display: 'flex', justifyContent: "space-around" }}>
            <Link to="/"><h2 className="logo">Music Player</h2></Link>
            <div className="button-container">
                {user ? <button className="logout-button" onClick={logout}>Log Out</button>
                    :
                    <div>
                        <Link className="login-link" to="/login" ><button>LogIn</button></Link>
                    </div>
                }

            </div>
        </div>
    )
}

export default Navbar
