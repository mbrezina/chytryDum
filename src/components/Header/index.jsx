import React from "react";
import './style.css';

const Header = ({title}) => {
    return (
        <div className="header">
            <h1 className="header__title">{title}</h1>
        </div>
    )
}

export default Header;