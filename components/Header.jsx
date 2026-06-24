"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Header.css";

import logo from "@/public/Logo.png";
import twitter from "@/public/twitter.png";
import github from "@/public/github.png";
import insta from "@/public/insta.png";
import linkedin from "@/public/linkedin.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-left">
        <Image src={logo} alt="Logo" className="logo" />
        <span className="brand">Navokta</span>
      </div>

      <nav className={`header-center ${menuOpen ? "mobile-active" : ""}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link href="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>

        <Link href="/story" onClick={() => setMenuOpen(false)}>
          Stories
        </Link>

        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        <div className="mobile-socials">
          <a
            href="https://www.linkedin.com/company/navokta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
          </a>

          <a
            href="https://x.com/navokta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={twitter} alt="Twitter" width={24} height={24} />
          </a>

          <a
            href="https://github.com/navokta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={github} alt="GitHub" width={24} height={24} />
          </a>

          <a
            href="https://www.instagram.com/navokta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={insta} alt="Instagram" width={24} height={24} />
          </a>
        </div>
      </nav>

      <div className="header-right">
        <div className="desktop-socials">
          <a
            href="https://www.linkedin.com/company/navokta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
          </a>

          <a
            href="https://x.com/navokta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={twitter} alt="Twitter" width={24} height={24} />
          </a>

          <a
            href="https://github.com/navokta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={github} alt="GitHub" width={24} height={24} />
          </a>

          <a
            href="https://www.instagram.com/navokta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={insta} alt="Instagram" width={24} height={24} />
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
}
