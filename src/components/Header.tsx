import React from 'react';
import { NavLink } from 'react-router-dom';
import { ABOUT_LINK_LABEL, LOGO_TEXT, TODOLIST_LINK_LABEL } from '../constants/constants';

export const Header: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper padding-lr purple darken-3">
                <NavLink exact to="/" className="brand-logo">{ LOGO_TEXT}</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/" exact>{ TODOLIST_LINK_LABEL}</NavLink></li>
                    <li><NavLink to="/about">{ ABOUT_LINK_LABEL}</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}