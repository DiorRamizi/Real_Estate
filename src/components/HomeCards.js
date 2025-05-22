import React, { useEffect, useState } from 'react';
import './HomeCards.css';
import { Link } from 'react-router-dom';

function HomeCards() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch("https://real-estate-b5yi.onrender.com/api/properties")
            .then(response => response.json())
            .then(data => setProperties(data.slice(0, 3)))
            .catch(error => console.error("Error fetching properties:", error));
    }, []);

    return (
        <div className='cards'>
            <h1>Properties</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        {properties.map((property) => (
                            <li key={property.id} className='cards-item'>
                                <Link to={`/properties/${property.id}`} className='cards-item-link'>
                                    <figure className='cards-item-pic-wrap'>
                                        <img
                                            src={property.photos[0]}
                                            alt={property.name}
                                            className='cards-item-img'
                                        />
                                    </figure>
                                    <div className='cards-item-info'>
                                        <h5 className='cards-item-text'>
                                            Explore properties in {property.location}
                                        </h5>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HomeCards;
