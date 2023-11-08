import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RootLayout from "../Layout";

function Home() {
  const images = [
    "/SLIDE1.jpeg",
    "/SLIDE2.jpg",
    "/SLIDE3.png",
    "/SLIDE4.png",
    "/SLIDE5.png",
    "/SLIDE6.png",
  ];
  const interval = 10000;
  return (
    <RootLayout>
      <div style={{ maxWidth: "100%", width: "100%" }}>
        <Carousel
          swipeable={false}
          autoPlay
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          interval={interval}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </RootLayout>
  );
}

export default Home;
