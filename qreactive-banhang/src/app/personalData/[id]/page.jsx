"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const EditPersonalData = ({ personalData }) => {
    const [editedProperties, setEditedProperties] = useState([]);
    useEffect(() => {
        console.log(personalData);
        if (personalData && personalData.properties) {
            setEditedProperties([...personalData.properties]);
            console.log(personalData.properties);
        }
    }, [personalData]);
    const handlePropertyChange = (index, key, value) => {
        const newProperties = [...editedProperties];
        newProperties[index] = { key, value };
        setEditedProperties(newProperties);
    };

    // Handle form submission to update the personal data
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`http://localhost:5000/personalData/edit/${personalData._id}`, { properties: editedProperties });
            console.log(response.data);
        }
        catch (error) {
            console.error('Error updating personal data:', error);
        }
        

        // Redirect or handle the response as needed
    };

    return (
        <div>
            <h1>Edit Personal Data</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    {editedProperties.map((property, index) => (
                        <li key={index}>
                            <input
                                type="text"
                                placeholder="Key"
                                value={property.key}
                                onChange={(e) => handlePropertyChange(index, e.target.value, property.value)}
                            />
                            <input
                                type="text"
                                placeholder="Value"
                                value={property.value}
                                onChange={(e) => handlePropertyChange(index, property.key, e.target.value)}
                            />
                        </li>
                    ))}
                </ul>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditPersonalData;