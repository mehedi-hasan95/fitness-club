import React from 'react';
import logo from '../../imgs/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='logo'>
            <img src={logo} alt="" />
            <p>Fitness Club</p>
        </div>
    );
};

export default Header;