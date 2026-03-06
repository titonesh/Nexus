import { ABOUT_CONTENT } from '../utils/constants';
import './About.css';

/**
 * About Component
 * Split layout with image on left, content on right
 * Features:
 * - Responsive image and text layout
 * - Key differentiators as bullet points
 * - Statistics counters
 * - Call-to-action button
 */
function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__content">
          {/* Image Section */}
          <div className="about__image">
            <div className="about__image-placeholder">
              <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="500" fill="#f0f4ff" />
                <circle cx="200" cy="250" r="120" fill="#3B82F6" opacity="0.1" />
                <circle cx="150" cy="150" r="80" fill="#10B981" opacity="0.1" />
                <circle cx="280" cy="350" r="100" fill="#F59E0B" opacity="0.1" />
              </svg>
            </div>
          </div>

          {/* Text Section */}
          <div className="about__text">
            <h2 className="about__title">{ABOUT_CONTENT.title}</h2>
            <p className="about__description">{ABOUT_CONTENT.description}</p>

            {/* Highlights */}
            <ul className="about__highlights">
              {ABOUT_CONTENT.highlights.map((highlight, index) => (
                <li key={index} className="about__highlight-item">
                  {highlight}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="about__stats">
              {ABOUT_CONTENT.stats.map((stat, index) => (
                <div key={index} className="about__stat">
                  <div className="about__stat-value">{stat.value}</div>
                  <div className="about__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="btn btn-primary btn-lg">
              {ABOUT_CONTENT.ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
