import React from 'react';
import '../../App.css';
import HeroSection from '../AboutHeroSection';
import CompanyOverview from "../CompanyOverview";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import OurStory from "../OurStory";
import Mission from "../Mission";

function AboutUs() {
    return (
        <>
            <HeroSection />
            <CompanyOverview/>
            <OurStory/>
            <Mission/>
            <ContactUs/>
            <Footer/>
        </>
    );
}

export default AboutUs;