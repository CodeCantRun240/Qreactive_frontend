"use client";

import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { getEmailUser } from '@/components/emailuser';

const QRLinkGenerator = () => {
    const [qrLink, setQrLink] = useState("");
    const [qrImageUrl, setQrImageUrl] = useState("");

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

    const generateQr = async () => {
        try {
            const email= getEmailUser();
            // Send the link to the backend for QR code generation
            const response = await axios.post("http://localhost:5000/link/generate", {
                qrLink,
                email
            });

            // Assuming the backend responds with the generated QR code URL
            setQrImageUrl(response.data.qrImageUrl);
        } catch (error) {
            console.error("Error generating QR code:", error);
        }
    };
    return (
        <>
            <Head>
                <title>QR Link Generator</title>
                <meta name="description" content="Generate QR code for a link"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.header}>
                {/* Back button */}
                <button className={styles.backButton} onClick={() => router.push("/qr_scanner")}>
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
                <div className="w-3/4 border-0 border-r-4 flex flex-col items-center bg-white mt-4	">
                    <div className={styles.input_group}>
                        <input
                            type="text"
                            className={styles.input}
                            id="Link"
                            value={qrLink}
                            onChange={(e) => setQrLink(e.target.value)}
                            required
                        />
                        <label htmlFor="Link" className={styles.user_label}>
                            Link
                        </label>
                    </div>
                    <button className={styles.button1} onClick={generateQr}>
                        Generate QR
                    </button>
                    <br/>
                    <div className="mb-60">Link: {qrLink}</div>
                    {qrImageUrl && <img src={qrImageUrl} alt="Generated QR Code"/>}
                </div>

            </div>
        </>
    );
};

export default QRLinkGenerator;