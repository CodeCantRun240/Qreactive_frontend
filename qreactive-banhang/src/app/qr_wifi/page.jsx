// Importing necessary modules
"use client";

import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

// Importing styles
import styles from './styles.module.css';


const QRPersonalGenerator = () => {
    const [selectedType, setSelectedType] = useState(null);

    const handleTypeSelection = (type) => {
        setSelectedType(type);
    };
    const navigateToQRType = (type) => {
        router.push(`${type}`);
        handleTypeSelection(type);
    };
    const [SSID, setSSID] = useState('');
    const [securityType, setSecurityType] = useState('WPA/WPA2'); // Default security type
    const [password, setPassword] = useState('');
    const [qrImageUrl, setQrImageUrl] = useState('');

    // Router instance
    const router = useRouter();

    const generateQr = async () => {
        try {
            // Send the data to the backend for WiFi QR code generation
            const response = await axios.post('http://localhost:5000/wifi/generate', {
                name: SSID,
                encryption: securityType,
                password: password,
            });

            // Assuming the backend responds with the generated QR code URL
            setQrImageUrl(response.data.qrImageUrl);
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    };

    return (
        <>
            <Head>
                <title>QR Personal Generator</title>
                <meta name="description" content="Generate QR code for a personal"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.header}>
                {/* Back button */}
                <button className={styles.backButton} onClick={() => router.push("/scanner")}>
                    <img src="/returnBack.png" alt="return Icon" className={styles.icon}/>

                    Back                
                    </button>
                <div className={styles.headerContent}>
                    <h1>Select type of QR code</h1>
                </div>
            </div>
            <div className={styles.container}>
                <div className="flex-row ">
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
                <div className="w-3/4 border-0 border-r-4 flex flex-col items-center bg-white mt-4 	">

                    <div className={styles.input_group}>
                        <input
                            type="text"
                            className={styles.input}
                            id="Wifi SSID(Name)"
                            value={SSID}
                            onChange={(e) => setSSID(e.target.value)}
                            required
                        />
                        <label htmlFor="Wifi SSID(Name)" className={styles.user_label}>
                            Wifi SSID(Name)
                        </label>
                    </div>

                    {/* Replace the input for phone with a dropdown */}
                    <div className={styles.input_group}>
                        <select
                            className={styles.input}
                            id="securityType"
                            value={securityType}
                            onChange={(e) => setSecurityType(e.target.value)}
                        >
                            <option>WPA/WPA2</option>
                            <option>WEP</option>
                            <option> NONE</option>
                            <option>RAW</option>

                            {/* Add more country codes as needed */}
                        </select>

                    </div>

                    <div className={styles.input_group}>
                        <input
                            type="password"
                            className={styles.input}
                            id="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="Password" className={styles.user_label}>
                            Password
                        </label>
                    </div>

                    <div className={styles.button}>
                        <button className={styles.button1} onClick={generateQr}>Generate QR</button>
                    </div>
                    {qrImageUrl && <img src={qrImageUrl} alt="Generated QR Code"/>}
                </div>

            </div>
        </>
    );
};

export default QRPersonalGenerator;
