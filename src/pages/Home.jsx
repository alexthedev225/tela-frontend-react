import { useState, useEffect } from "react";
import RootLayout from "../Layout";
import "../styles/Home.css"; // Assurez-vous d'importer votre fichier de styles CSS

function Home() {
  const images = [
    "/SLIDE1.png",
    "/SLIDE2.png",
    "/SLIDE3.png",
    "/SLIDE4.png",
    "/SLIDE5.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <RootLayout>
      <div className="slider-container">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="slider"
              width="100%"
              style={{ objectFit: "contain" }}
            />
          ))}
        </div>
      </div>
    </RootLayout>
  );
}

export default Home;
