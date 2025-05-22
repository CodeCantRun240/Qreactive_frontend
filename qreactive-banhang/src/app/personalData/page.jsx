"use client";
// Assuming this code is in app/personalData/page.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useQueryClient, QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useRouter } from "next/navigation";
import styles from './styles.module.css';
import { getEmailUser } from '@/components/emailuser';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PersonalQRForm />
    </QueryClientProvider>
  )
}

export async function handler(req, res) {
  try {
    const email = await getEmailUser();
    const data = req.body;
    const response = await axios.post('https://qreactive-backend.onrender.com/personalQR/generate', {
      data,
      email,
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const PersonalQRForm = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({ properties: [] });
  const [qrImageUrl, setQrImageUrl] = useState('');
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  // Router instance
  const router = useRouter();


  // State to track the selected QR code type
  const [selectedType, setSelectedType] = useState(null);
  // Function to handle type selection
  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  // Function to navigate to a specific QR code type page
  const navigateToQRType = (type) => {
    router.push(`${type}`);
    handleTypeSelection(type);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://qreactive-backend.onrender.com/personalDataQR/generate', formData);

      // Invalidate and refetch the data to update the UI
      queryClient.invalidateQueries('personalQR');
      setQrImageUrl(response.data.qrImageUrl);
      console.log('QR Code Image URL:', response.data.qrImageUrl);
    } catch (error) {
      console.error('Error generating Personal QR:', error);
    }
  };

  const handlePropertyChange = (index, key, value) => {
    const newProperties = [...formData.properties];
    newProperties[index] = { key, value };
    setFormData({ ...formData, properties: newProperties });
    
    console.log(newProperties);
  };

  const addProperty = () => {
    setFormData({
      ...formData,
      properties: [...formData.properties, { key: '', value: '' }],
    });
  };

  const removeProperty = (index) => {
    const newProperties = [...formData.properties];
    newProperties.splice(index, 1);
    setFormData({ ...formData, properties: newProperties });
  };

  return (
      <>

        <div className={styles.header}>
          {/* Back button */}
          <button className={styles.backButton} onClick={() => router.back()}>
            <img src="/returnBack.png" alt="return Icon" className={styles.icon}/>

            Back
          </button>
          <div className={styles.headerContent}>
            <h1>Select type of QR code</h1>
          </div>
        </div>

        {/* Container for QR code type buttons */}
        <div className={styles.container}>
          {/* Button to navigate to QR Link page */}
          <div className="flex-row">

            <button className={styles.button2} onClick={() => navigateToQRType("qr_link")}>

              <img src="/link.png" alt="Link Icon" className={styles.icon}/>
              Link
            </button>

            {/* Button to navigate to QR Text page */}
            <button className={styles.button2} onClick={() => navigateToQRType("qr_text")}>
              <img src="/text.png" alt="Text Icon" className={styles.icon}/>

              Text
            </button>

            {/* Button to navigate to QR Personal page */}
            <button className={styles.button2} onClick={() => navigateToQRType("qr_personal")}>
              <img src="/vcard.png" alt="Vcard Icon" className={styles.icon}/>

              Vcard
            </button>

            {/* Button to navigate to QR Personal Data */}
            <button className={styles.button2} onClick={() => navigateToQRType("personalData")}>
              <img src="/person.png" alt="Person Icon" className={styles.icon}/>

              Custom
            </button>

            {/* Button to navigate to QR List page */}
            <button className={styles.button2} onClick={() => navigateToQRType("qr_wifi")}>
              <img src="/wifi.png" alt="Wifi Icon" className={styles.icon}/>

              Wifi
            </button>
            <button className={styles.button2} onClick={() => navigateToQRType("qr_email")}>
              <img src="/mail.png" alt="Mail Icon" className={styles.icon}/>

              Email
            </button>
          </div>

          <form className="w-3/4 border-0 border-r-4 flex flex-col items-center bg-white border-b-2 min-h-screen mt-4 "
                onSubmit={handleSubmit}>
            {formData.properties.map((property, index) => (
                <div className="relative mb-3 ml-14 flex flex-row mt-5 content-center " key={index}>
                  <div className={styles.input_group}>{/* Your input goes here */}
                    <input
                        type="text"
                        className={styles.input}
                        value={property.key}
                        onChange={(e) => handlePropertyChange(index, e.target.value, property.value)}

                        required
                        
                    />
                    <label htmlFor="Key" className={styles.user_label}>
                      Type of information
                    </label>
                  </div>

                  <div className={styles.input_group}>
                    <input
                        type="text"
                        className={styles.input}
                        value={property.value}
                        onChange={(e) => handlePropertyChange(index, property.key, e.target.value)}
                        required

                       
                    />
                    <label htmlFor="Value" className={styles.user_label}>
Information
                    </label>

                  </div>

                  <button className={styles.button5} type="button" onClick={() => removeProperty(index)}>
                    Remove
                  </button>

                </div>


            ))}
            <div className="mr-16">
              <button type="button" onClick={addProperty} className={styles.button2}>
                Add Property
              </button>
            </div>

            <div className="mr-16">
              <button className={styles.button1}>Generate QR</button>
            </div>
          </form>
          {qrImageUrl && <img src={qrImageUrl} alt="Generated QR Code"/>}
        </div>
      </>
  );
};

export {PersonalQRForm};