import React, { useEffect, useState } from 'react';
import PropertiesCard from './PropertiesCard';

const PropertiesList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch('https://real-estate-b5yi.onrender.com/api/properties');
                const data = await response.json();
                setProperties(data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, []);

    return (
        <div className="properties-list">
            {properties.map(property => (
                <PropertiesCard key={property.id} property={property} />
            ))}
        </div>
    );
}

export default PropertiesList;
