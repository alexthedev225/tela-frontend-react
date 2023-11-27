import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RootLayout from "../Layout";
import '../styles/Home.css'
import AchatPassButton from "../components/AchatPassButton";
import AjouterMaisonButton from "../components/AjouterMaison";
import Cookies from "js-cookie";

function Home() {
  const token = Cookies.get('token')
  console.log(token)
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
      <AchatPassButton />
      {token && <AjouterMaisonButton />}
      <div className="slider-container">
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
            <div key={index} className="home-img-container">
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </RootLayout>
  );
}

export default Home;
