import React from 'react';
import '../App.css';
import './HeroSection.css';
import video1 from '../media/video1.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video1} autoPlay loop muted />
            <h1>D&D REAL ESTATE</h1>
            <p>You Dream IT, We got IT!</p>
        </div>
    );
}

export default HeroSection;