import { useEffect, useState } from 'react';
import { HERO_CONTENT } from '../utils/constants';
import { FaArrowDown } from 'react-icons/fa';
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
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="300" fill="#f0f4ff" />
              <circle cx="200" cy="150" r="80" fill="#3B82F6" opacity="0.1" />
              <circle cx="150" cy="100" r="50" fill="#10B981" opacity="0.1" />
              <circle cx="280" cy="200" r="60" fill="#F59E0B" opacity="0.1" />
            </svg>
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
