import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "../style/footer.css";
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        Copyright &copy;.All rights reserved.
        <br />
        Created By Sana Farasat
        <br />
        <div className="social-icons">
          <div>
            <FaFacebook style={{ color: "#4338ca" }} />
          </div>
          <div>
            <FaGithub style={{ color: "black" }} />
          </div>
          <div>
            <FaLinkedin style={{ color: "#4338ca" }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
