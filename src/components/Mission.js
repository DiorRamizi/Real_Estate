import React from "react";
import './Mission.css'

const Mission = (props) => {
    return (
        <section className="mission-vision">
            <div className="mission-vision__container">
                <h1>Mission and Vision</h1>
                <p>
                    <span>Our Mission: </span> To empower individuals and families by providing exceptional real estate services
                    tailored to their unique needs. We strive to be the trusted partner in every client’s journey,
                    delivering unparalleled support and expertise to help them make informed decisions.
                </p>
                <p>
                    <span>Our Vision:</span> To redefine the real estate experience by fostering lasting relationships built on
                    trust, integrity, and transparency. We envision a future where everyone has access to the home of
                    their dreams, and we are committed to making that vision a reality, one property at a time.
                </p>
            </div>
        </section>
    )
}

export default Mission;
