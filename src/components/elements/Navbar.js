import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Smart Records
                </Link>
                <div>
                    <Link to="/contacts/add" >
                        <button className="ml-auto" styles={{ backgroundColor: "white", borderRadius: "8px!important" }}> Create Contact</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
