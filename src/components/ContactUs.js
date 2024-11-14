import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:support@ddrealestate.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    };

    return (
        <>
            <div className="contact">
        <div className="contact__container">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Fill out the form below to get in touch.</p>
            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form__group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="contact__button">Send Message</button>
            </form>
        </div>
                </div>
            </>
    );
}

export default ContactUs;