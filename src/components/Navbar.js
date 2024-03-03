import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link className='links' to="/"><svg className='navbar_logo' width="40" height="40" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="70" height="70" rx="20" fill="url(#paint0_linear_3_3554)"/>
    <g filter="url(#filter0_i_3_3554)">
        <path d="M51 35L23.25 46.2583L23.25 23.7417L51 35Z" fill="white"/>
    </g>
    <defs>
        <filter id="filter0_i_3_3554" x="23.25" y="23.7417" width="29.75" height="24.5167" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.42 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_3554"/>
        </filter>
        <linearGradient id="paint0_linear_3_3554" x1="35" y1="0" x2="35" y2="70" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B03FE5"/>
        <stop offset="1" stop-color="#461A5B"/>
        </linearGradient>
    </defs>
    </svg></Link>
                <ul className='linkList'>
                    <li className='nav-item'><Link className='links' to="/">Customers</Link></li>
                    <li className='nav-item'><Link className='links' to="/films">Films</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;