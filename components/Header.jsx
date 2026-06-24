"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./Header.css";
import twitter from "@/public/twitter.png";
import linkedin from "@/public/linkedin.png";
import insta from "@/public/insta.png";
import github from "@/public/github.png";
import logo from "@/public/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="brand">Navokta</span>
      </div>

      <nav className={`header-center ${menuOpen ? "mobile-active" : ""}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link href="/About" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link href="/Story" onClick={() => setMenuOpen(false)}>
          Stories
        </Link>
        <Link href="/Contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
        <div className="mobile-socials">
          <a href="https://www.linkedin.com/company/navokta/" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://x.com/navokta" target="_blank">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://github.com/navokta/" target="_blank">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/navokta/" target="_blank">
            <img src={insta} alt="Instagram" />
          </a>
        </div>
      </nav>

      <div className="header-right">
        <div className="desktop-socials">
          <a href="https://www.linkedin.com/company/navokta/" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://x.com/navokta" target="_blank">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://github.com/navokta/" target="_blank">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/navokta/" target="_blank">
            <img src={insta} alt="Instagram" />
          </a>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
