import React from 'react';
import './HomeAboutUs.css';
import {Link} from 'react-router-dom';

function HomeAboutUs() {
    return (
        <>
            <div className="about">
        <div className='about-container'>
            <h1>About Us</h1>
            <p>
                Founded in 2013 in New York, D&D Real Estate is committed to finding the perfect properties that meet your needs. With years of experience and dedication, we pride ourselves on turning dreams into reality. Whether you're searching for a home or an investment property, we are here to guide you every step of the way.
            </p>
            <Link to='/about'>
                <button className='more-btn'>Find Out More</button>
            </Link>
        </div>
           </div>
        </>
    );
}

export default HomeAboutUs;