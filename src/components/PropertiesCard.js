import React from "react";
import { Link } from "react-router-dom";
import './PropertiesCard.css';

const PropertiesCard = ({ property }) => {
    return (
        <Link to={`/properties/${property.id}`} className="property-card-link">
            <div className="property-card">
                <div className="property-image-container">
                    <img
                        src={`${property.photos[0]}`}
                        alt={property.name}
                        className="property-image"
                    />
                </div>
                <div className="property-details">
                    <div className="property-info">
                        <h3 className="property-name">{property.name}</h3>
                        <p className="property-description">
                            {property.description}
                        </p>
                        <div className="property-specs">
                            <div className="spec">
                                 {property.rooms} Bedrooms
                            </div>
                            <div className="spec">
                                {property.bathrooms} Bathrooms
                            </div>
                            <div className="spec">
                                 {property.squareFeet} Sq Ft
                            </div>
                        </div>
                    </div>
                    <div className="property-price-container">
                        <p className="property-price">${property.price.toLocaleString()}</p>
                        <p className="property-status">For Sale</p>
                        <p className="property-location">{property.location}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default PropertiesCard;
