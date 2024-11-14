import React from 'react';
import './CompanyOverview.css';

const CompanyOverview = () => {
    return (
        <section className="company-overview">
            <div className="company-overview__container">
                <h2 className="company-overview__title">Company Overview</h2>
                <p className="company-overview__text">
                    At D&D Real Estate, we believe in creating lasting connections through exceptional service and unparalleled expertise. Founded in 2013 in the heart of New York, we specialize in residential and commercial real estate, committed to guiding our clients through every step of their property journey.
                </p>
                <p className="company-overview__text">
                    With a team of dedicated professionals, we bring a wealth of knowledge and experience to the table, ensuring our clients receive personalized solutions tailored to their unique needs. Whether you’re buying your first home, selling a cherished property, or seeking lucrative investment opportunities, we provide the support and insight necessary for making informed decisions.
                </p>
                <p className="company-overview__text">
                    Our passion for real estate goes beyond transactions; we aim to build communities and foster relationships that last a lifetime. At D&D Real Estate, your goals are our priority, and we are here to help you realize your vision of home.
                </p>
            </div>
        </section>
    );
};

export default CompanyOverview;