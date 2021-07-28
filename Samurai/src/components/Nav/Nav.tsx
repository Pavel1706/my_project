import React from 'react';
import p from './Nav.module.css';
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <nav className={p.nav}>
            <div className={`${p.sentence} ${p.active}`}>
                <NavLink to="/face" activeClassName={p.activeLink}>Profile</NavLink>
            </div>
            <div className={p.sentence}>
                <NavLink to="/conversation" activeClassName={p.activeLink}>Messages</NavLink>
            </div>
            <div className={p.sentence}>
                <NavLink to="/news" activeClassName={p.activeLink}>News</NavLink>
            </div>
            <div className={p.sentence}>
                <NavLink to="/music" activeClassName={p.activeLink}>Music</NavLink>
            </div>
            <div className={p.sentence}>
                <NavLink to="/settings" activeClassName={p.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}
