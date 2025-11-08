import "../styles/Header.css";
import Nav from "../components/Nav.jsx";
import { useState } from "react";
import blockzillaslogo from "../assets/blockzillaslogo.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <section className="myheader">
      <header>
        <h3 className="header">BlockZillasNFTs</h3>

        <img className="blockzillaslogo" src={blockzillaslogo} alt="logo" />
      </header>
      <button className="menu" onClick={toggleMenu}>
        {open ? (
          <i className="fa-solid fa-xmark menu-icon"></i>
        ) : (
          <i className="fa-solid fa-bars menu-icon"></i>
        )}
      </button>
      <Nav open={open} />
    </section>
  );
}
