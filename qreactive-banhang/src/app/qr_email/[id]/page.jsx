"use client";
// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


export default function EmailQREdit({ params }) {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
  

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch email QR data by ID
                const response = await axios.get(`http://localhost:5000/email/edit/${params.id}`);
                const { email, subject, body } = response.data;
                
                // Set state with retrieved data
                setEmail(email);
                setSubject(subject);
                setBody(body);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data: ', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [params.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Update email QR data by ID
            const response = await axios.post(`http://localhost:5000/email/edit/${params.id}`, {
                email,
                subject,
                body,
            });

            console.log(response.data);

            // Navigate to the list page
            router.push("/qr_list");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Edit Email QR Code</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />

                <label htmlFor="body">Body</label>
                <textarea name="body" value={body} onChange={(e) => setBody(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
