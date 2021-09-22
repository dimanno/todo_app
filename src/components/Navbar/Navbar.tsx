import React from "react";
import './navbar.css'
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper teal darken-3 px1">
            <a href="/" className="brand-logo">TODO</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <NavLink to="/">Todo List</NavLink>
                </li>
                <li>
                    <NavLink to="/idea">New Idea</NavLink>
                </li>
                <li>
                    <NavLink to="/">Notes</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)
