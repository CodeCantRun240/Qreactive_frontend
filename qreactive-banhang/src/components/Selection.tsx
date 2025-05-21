import React from 'react';
import home from'../app/home.module.css';
import Link from 'next/link';

const Selection = () => {
  return (
    <div className={home.selection}>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" />
    <div className={home.buttonContainer}>
      <Link href='/qr_link'><button className={home.button}><img src='Link.svg'></img><span>Link/URL</span></button></Link>
      <Link href='/personalData'><button className={home.button}><img src='PDF.svg'></img><span>Custom</span></button></Link>
      <Link href='/qr_text'><button className={home.button}><img src='Text.svg'></img><span>Text</span></button></Link>
      
      
    </div>
    <div className={home.buttonContainer}>
      
      <Link href='/qr_wifi'><button className={home.button}><img src='Wifi.svg'></img><span>Wifi</span></button></Link>
      <Link href='/qr_email'><button className={home.button}><img src='Image.svg'></img><span>Email</span></button></Link>
      <Link href='/qr_personal'><button className={home.button}><img src='Music.svg'></img><span>Vcard</span></button></Link>
    </div>
    
    <div className={home.spacing}>

      </div>
    
    </div>

    
    

    
  );
}

export default Selection;