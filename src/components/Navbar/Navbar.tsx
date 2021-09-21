import React from "react";
import './navbar.css'

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper teal darken-3 px1">
            <a href="/" className="brand-logo">TODO</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <a href="/">Todo List</a>
                </li>
                <li>
                    <a href="/">New Idea</a>
                </li>
                <li>
                    <a href="/">Notes</a>
                </li>
            </ul>
        </div>
    </nav>
)
