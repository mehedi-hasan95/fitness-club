import React from 'react';
import logo from '../../imgs/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h2>UtRA-Active-club</h2>
        </div>
    );
};

export default Header;