import React from 'react';
import '../App.css';
import './HeroSection.css';
import video2 from '../media/video2.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video2} autoPlay loop muted />
            <h1>D&D REAL ESTATE</h1>
            <p>United by Purpose: Our Mission Unfolds</p>
        </div>
    );
}

export default HeroSection;