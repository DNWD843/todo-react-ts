import React from 'react';

export const Header: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper padding-lr purple darken-3">
                <a href="/" className="brand-logo">TODO React &amp; Typescript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Список дел</a></li>
                    <li><a href="badges.html">О нас</a></li>
                </ul>
            </div>
        </nav>
    );
}