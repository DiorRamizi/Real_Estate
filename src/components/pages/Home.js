import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import HomeCards from "../HomeCards";
import HomeAboutUs from "../HomeAboutUs";
import Cities from "../Cities";
import ContactUs from "../ContactUs";
import Footer from "../Footer";

function Home() {
    return (
        <>
            <HeroSection />
            <HomeCards />
            <HomeAboutUs />
            <Cities/>
            <ContactUs/>
            <Footer/>
        </>
    );
}

export default Home;