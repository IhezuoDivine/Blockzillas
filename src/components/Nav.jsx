import "../styles/Nav.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

export default function Nav({ open }) {
  if (!open) return null;
  return (
    <section className="Navcontainer">
      <ul className="navitems">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/mint">Mint</Link>
        </li>
        <li>
          <Link to="/collection">Collection</Link>
        </li>
        <li>
          <Link to="/roadmap">Roadmap</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact" className="connect-btn">
            Connect With US
          </Link>
        </li>
      </ul>
      <Footer />
    </section>
  );
}
