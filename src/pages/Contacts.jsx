import RootLayout from "../Layout";
import "../styles/Contact.css";

export default function Contacts() {
  return (
    <RootLayout>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-title">
            <p style={{ fontSize: "50px" }}>Contact</p>
          </div>
          <div className="contact-section">
            <div className="call-center">
              <p className="contact-text">Call center & PUB</p>
              <div className="contact-details">
                <p>+225 27 22 22 22 22 22</p>
                <p>+225 07 00 00 00 00</p>
              </div>
            </div>
            <div className="whatsapp">
              <p className="contact-text">Whatsapp pour transfert de photos</p>
              <div className="contact-details">
                <p>+225 05 00 00 00 00</p>
                <p>+225 01 00 00 00 00 00</p>
              </div>
            </div>
          </div>
          <div className="email-section">
            <p className="contact-text">Email</p>
            <p className="email-details">infos@tela.com</p>
          </div>
          <div className="social-section">
            <p className="contact-text">Social</p>
            <div className="social-network-logo">
              <div className="facebook-logo">
                <img src="/facebook.png" alt="facebook logo" />
              </div>
              <div className="twitter-logo">
                <img src="/twitter.png" alt="twitter logo" />
              </div>
              <div className="instagram-logo">
                <img src="/instagram.png" alt="instagram logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-logo-container">
          <img src="/LOGO.png" alt="logo-tela" height={"200px"} />
        </div>
      </div>
    </RootLayout>
  );
}
