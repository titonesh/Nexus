import { useEffect, useState } from 'react';
import { HERO_CONTENT } from '../utils/constants';
import { FaArrowDown } from 'react-icons/fa';
import titoPhoto from '../assets/tito.png';
import './Hero.css';

/**
 * Hero Component
 * Full viewport height hero section with CTA buttons
 * Features:
 * - Gradient background
 * - Animated headline and subheadline
 * - Primary and secondary CTA buttons
 * - Down arrow scroll indicator
 * - Responsive layout
 */
function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollDown = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__gradient" />
      <div className="container hero__container">
        <div className={`hero__content ${isVisible ? 'hero__content--visible' : ''}`}>
          <h1 className="hero__headline">{HERO_CONTENT.headline}</h1>
          <p className="hero__subheadline">{HERO_CONTENT.subheadline}</p>
          
          <div className="hero__buttons">
            <button className="btn btn-primary btn-lg">
              {HERO_CONTENT.ctaPrimary}
            </button>
            <button className="btn btn-outline btn-lg">
              {HERO_CONTENT.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className={`hero__image ${isVisible ? 'hero__image--visible' : ''}`}>
          <div className="hero__image-placeholder">
            <img src={titoPhoto} alt="Profile" className="hero__profile-image" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        className="hero__scroll-indicator"
        onClick={handleScrollDown}
        aria-label="Scroll to features"
      >
        <FaArrowDown />
      </button>
    </section>
  );
}

export default Hero;
