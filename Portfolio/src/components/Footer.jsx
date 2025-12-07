import { ImArrowUp } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Tanmoy. All rights reserved.</p>

      <div className="footer-links">
        <a href="https://github.com/TanmoyPal1" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href="https://linkedin.com/in/tanmoy-pal-233547264/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        {/* Back to Top with animated arrow */}
        <a href="#hero" className="back-to-top">
          Back to top <ImArrowUp className="arrow-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
