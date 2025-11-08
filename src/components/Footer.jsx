import "../styles/Footer.css";
export default function Footer() {
  return (
    <section
      className="footersection
    "
    >
      <div className="footer-container">
        <div className="footer-left">
          <h3>BlockZillasNFTs</h3>
        </div>
        <div className="footer-right">Built with ❤️ for NFT fans</div>
      </div>
      <div className="containerfooter">
        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-x-twitter"></i>
        </a>

        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram"></i>
        </a>

        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>

        <a href="">
          <i className="fab fa-discord"></i>
        </a>
      </div>
      <p className="footerp">© {new Date().getFullYear()} BlockZillas. All rights reserved.</p>
    </section>
  );
}
