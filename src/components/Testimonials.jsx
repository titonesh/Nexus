import { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../utils/constants';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

/**
 * Testimonials Component
 * Displays customer testimonials in cards with ratings
 * Features:
 * - Customer photo (circular)
 * - Quote text in italic
 * - Name and title
 * - 5-star rating
 * - Responsive grid layout
 */
function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <FaStar
        key={i}
        className={i < rating ? 'testimonials__star testimonials__star--filled' : 'testimonials__star'}
      />
    ));
  };

  const visibleTestimonials = isMobile
    ? [TESTIMONIALS[currentIndex]]
    : TESTIMONIALS;

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        {/* Section Header */}
        <div className="testimonials__header">
          <h2 className="testimonials__title">What Our Clients Say</h2>
          <p className="testimonials__intro">
            Hear from the teams that have transformed their business with Nexus.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials__grid">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonials__card ${isMobile && index === currentIndex ? 'testimonials__card--active' : ''}`}
            >
              {/* Quote Icon */}
              <div className="testimonials__quote-icon">"</div>

              {/* Quote Text */}
              <p className="testimonials__quote">{testimonial.quote}</p>

              {/* Rating */}
              <div className="testimonials__rating">
                {renderStars(testimonial.rating)}
              </div>

              {/* Client Info */}
              <div className="testimonials__client">
                <div className="testimonials__avatar">
                  <div className="testimonials__avatar-placeholder">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="testimonials__client-name">{testimonial.name}</div>
                  <div className="testimonials__client-title">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Dots */}
        {isMobile && (
          <div className="testimonials__dots">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`testimonials__dot ${index === currentIndex ? 'testimonials__dot--active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
