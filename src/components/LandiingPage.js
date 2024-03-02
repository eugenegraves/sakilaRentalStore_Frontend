import React from 'react';
import Navbar from './Navbar';
import TopFiveFilmsSection from './TopFiveFilmsSection';
import TopFiveActorsSection from './TopFiveActorsSection';

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <div className='hero-section'>
                <h1 className='hero-title'>The #1 Film Rental Spot in the U.S.</h1>
                <svg width="350" height="418" viewBox="0 0 662 790" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="500" height="274" rx="75" transform="matrix(1 0 0 -1 80 774)" fill="url(#paint0_linear_3_3555)"/>
    <g filter="url(#filter0_f_3_3555)">
    <path d="M136 744H521" stroke="#E6D8EC" stroke-opacity="0.1" stroke-width="18"/>
    </g>
    <g filter="url(#filter1_f_3_3555)">
    <rect width="31" height="194" rx="15.5" transform="matrix(1 0 0 -1 120 722)" fill="#AAAAAA" fill-opacity="0.2"/>
    </g>
    <g filter="url(#filter2_f_3_3555)">
    <rect width="31" height="194" rx="15.5" transform="matrix(1 0 0 -1 505 722)" fill="#AAAAAA" fill-opacity="0.2"/>
    </g>
    <g filter="url(#filter3_i_3_3555)">
    <path d="M242 598.844V673.068C242 679.613 248.182 684.393 254.516 682.747L399.254 645.126C409.267 642.524 409.22 628.29 399.19 625.753L254.452 589.149C248.134 587.551 242 592.327 242 598.844Z" fill="white" fill-opacity="0.05"/>
    </g>
    <ellipse cx="331" cy="500" rx="331" ry="60" fill="url(#paint1_radial_3_3555)" fill-opacity="0.25"/>
    <rect x="80" width="500" height="500" rx="75" fill="url(#paint2_linear_3_3555)"/>
    <g filter="url(#filter4_f_3_3555)">
    <path d="M136 56L521 56" stroke="#E6D8EC" stroke-width="18"/>
    </g>
    <g filter="url(#filter5_f_3_3555)">
    <rect x="120" y="94" width="31" height="354" rx="15.5" fill="#AAAAAA"/>
    </g>
    <g filter="url(#filter6_f_3_3555)">
    <rect x="505" y="94" width="31" height="354" rx="15.5" fill="#AAAAAA"/>
    </g>
    <g filter="url(#filter7_i_3_3555)">
    <path d="M242 325.871V174.812C242 167.468 249.651 162.629 256.286 165.777L417.692 242.341C425.355 245.976 425.297 256.901 417.596 260.456L256.191 334.951C249.564 338.009 242 333.169 242 325.871Z" fill="white"/>
    </g>
    <path d="M242 325.871V174.812C242 167.468 249.651 162.629 256.286 165.777L417.692 242.341C425.355 245.976 425.297 256.901 417.596 260.456L256.191 334.951C249.564 338.009 242 333.169 242 325.871Z" stroke="url(#paint3_linear_3_3555)"/>
    <defs>
    <filter id="filter0_f_3_3555" x="93" y="692" width="471" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="21.5" result="effect1_foregroundBlur_3_3555"/>
    </filter>
    <filter id="filter1_f_3_3555" x="65" y="473" width="141" height="304" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="27.5" result="effect1_foregroundBlur_3_3555"/>
    </filter>
    <filter id="filter2_f_3_3555" x="450" y="473" width="141" height="304" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="27.5" result="effect1_foregroundBlur_3_3555"/>
    </filter>
    <filter id="filter3_i_3_3555" x="242" y="588.839" width="168.738" height="100.235" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="4" dy="7"/>
    <feGaussianBlur stdDeviation="3"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_3555"/>
    </filter>
    <filter id="filter4_f_3_3555" x="93" y="4" width="471" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="21.5" result="effect1_foregroundBlur_3_3555"/>
    </filter>
    <filter id="filter5_f_3_3555" x="65" y="39" width="141" height="464" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="27.5" result="effect1_foregroundBlur_3_3555"/>
    </filter>
    <filter id="filter6_f_3_3555" x="450" y="39" width="141" height="464" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="27.5" result="effect1_foregroundBlur_3_3555"/>
    </filter>
    <filter id="filter7_i_3_3555" x="241.5" y="164.299" width="186.406" height="178.084" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="4" dy="7"/>
    <feGaussianBlur stdDeviation="3"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.66 0"/>
    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_3555"/>
    </filter>
    <linearGradient id="paint0_linear_3_3555" x1="250" y1="0" x2="250" y2="274" gradientUnits="userSpaceOnUse">
    <stop stop-color="#4C4C4C" stop-opacity="0"/>
    <stop offset="1" stop-color="#7C3C9A" stop-opacity="0.56"/>
    </linearGradient>
    <radialGradient id="paint1_radial_3_3555" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(331 500) rotate(90) scale(60 331)">
    <stop/>
    <stop offset="0.182083"/>
    <stop offset="0.382083"/>
    <stop offset="0.557083"/>
    <stop offset="0.782083"/>
    <stop offset="1" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="paint2_linear_3_3555" x1="330" y1="0" x2="330" y2="500" gradientUnits="userSpaceOnUse">
    <stop stop-color="#AC3BE2"/>
    <stop offset="1" stop-color="#371B45"/>
    </linearGradient>
    <linearGradient id="paint3_linear_3_3555" x1="339.5" y1="159" x2="339.5" y2="341.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="1" stop-color="white" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>

            </div>
            <TopFiveFilmsSection />
            <TopFiveActorsSection />
    </div>
    );
};

export default LandingPage;