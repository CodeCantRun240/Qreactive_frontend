import React from 'react';
import home from '../app/home.module.css';


const Hero = () => {
  return (
    <section className='flex-col flexCenter overflow-hidden py-24 '>
        
          <div style={{display: 'flex'}} className='max-container padding-container gap-20 py-0 md:gap-28 lg:py-0 xl:flex-row pb-32 heroContainer'>
            <div className='text-center xl:text-left xl:w-[370px] xl:ml-auto xl:justify-start'
            style={{ marginTop: '45px',
                      textAlign: 'left'}} >
              <h1 style={{color: 'black'}} className='bold-40 lg:bold-70'>Create & Customize Your Dynamic QR code for <span style={{ color: '#007BFF' }}>FREE</span> </h1>
                <p className='regular-16 mt-6 text-gray-30'>
                Easily generate, manage and statistically track your QR codes
                </p>
            </div>

        <img className={home.heroImage}
          src="download.svg" alt="QR" />
        </div>
      
    </section>
  );
};

export default Hero;

/* Vector */
