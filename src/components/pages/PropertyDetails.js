import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../PropertyDetails.css';
import Footer from "../Footer";
import ContactUs from "../ContactUs";

const PropertyDetails = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/properties/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProperty(data))
            .catch(error => console.error("Error fetching property:", error));
    }, [id]);

    if (!property) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div className="property-details-page">
            <div className="main-image-container">
                <img
                    src={property.photos && property.photos[0] ? property.photos[0] : 'default-image.jpg'}
                    alt={property.name}
                    className="property-detail-image"
                />
            </div>
            <div className="gallery-container">
                {property.photos && property.photos.slice(1).map((photo, index) => (
                    <img key={index} src={photo} alt={`Gallery image ${index + 1}`} className="gallery-image" />
                ))}
            </div>
            <div className="property-info">
                <h1 className="property-title">{property.name}</h1>
                <p className="property-detail-price">${property.price.toLocaleString()}</p>
                <div className="property-specs">
                    <p className="spec">Location: {property.location}</p>
                    <p className="spec">{property.rooms} Bedrooms, {property.bathrooms} Bathrooms</p>
                    <p className="spec">{property.squareFeet} Sq Ft</p>
                </div>
                <div className="details-section shadow-box">
                    <p>{property.details}</p>
                </div>
            </div>
        </div>
            <ContactUs/>
        <Footer/>
        </>
    );
}

export default PropertyDetails;
