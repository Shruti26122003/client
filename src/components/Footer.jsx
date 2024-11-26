import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; 

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2024 Period Tracker. All rights reserved.</p>
      <div className="footer-links">
        <a href="/about"> About Us</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
