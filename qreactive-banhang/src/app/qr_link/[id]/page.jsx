"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Link({params}) {
    const [link, setLink] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            
            try {
            const response = await axios.get(`http://localhost:5000/link/edit/${params.id}`);
            setLink(response.data.content);
            setLoading(false);
            } catch (error) {
            console.error('Error fetching data: ', error);
            setError(error);
            setLoading(false);
            }
        };
    
        fetchData();
        }
    , []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5000/link/edit/${params.id}`, {
                link,
            });
            console.log(response.data);
            //navigate to the list page
            router.push("/qr_list");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <div>
            <label htmlFor="link">Link</label>
            <input type="text" name="link" value={link} onChange={(e) => setLink(e.target.value)} />

            <button onClick={handleSubmit}>Submit</button>

        </div>
        </>
    )
}

