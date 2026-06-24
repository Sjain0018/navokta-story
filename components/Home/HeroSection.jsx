import Link from "next/link";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <h1>
        Are you Excited to Listen{" "}
        <span className="highlight">Our Hero's Story</span>
      </h1>

      <p>Navokta: Your Story Matters, No Matter Your Field.</p>

      <div className="hero-buttons">
        <Link href="/story" className="get-started">
          Read Stories <span className="sparkle">✨</span>
        </Link>

        <Link href="/learn-more" className="learn-more">
          Learn More <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
}
