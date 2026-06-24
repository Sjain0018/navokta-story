import React from "react";
import "./HeroSection.css";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>
        Are you Exicted to Listen{" "}
        <span className="highlight">Our Hero's Story</span>
      </h1>
      <p>Navokta: Your Stories Matters, No matter your Field.</p>
      <div className="hero-buttons">
        <Link href={"/Story"}>
          <button className="get-started">
            Read Stories <span className="sparkle">✨</span>
          </button>
        </Link>
        <Link href={"/learn-more"}>
          <button className="learn-more">
            Learn More <span className="arrow">→</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
