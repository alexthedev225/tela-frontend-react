import React, { useState, useEffect } from 'react';
import RootLayout from '../Layout';

function Home() {
  const images = [
    '/SLIDE1.png',
    '/SLIDE2.png',
    '/SLIDE3.png',
    '/SLIDE4.png',
    '/SLIDE5.png',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000); // Change d'image toutes les 3 secondes (ajustez selon vos besoins)

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <RootLayout>
      <div className="slider" style={{width: '100%'}}>
        <img src={images[currentImage]} alt="slider" width="100%" style={{objectFit: 'contain'}}/>
      </div>
    </RootLayout>
  );
}

export default Home;
