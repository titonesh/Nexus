import { useState } from 'react';
import { VALIDATION_MESSAGES } from '../utils/constants';
import './ContactForm.css';

/**
 * ContactForm Component
 * Contact form with validation and submission handling
 * Features:
 * - Real-time validation
 * - Email validation
 * - Loading state on submit
 * - Success/error messages
 * - Privacy policy checkbox
 */
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptPrivacy: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Validation helper
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = VALIDATION_MESSAGES.required;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = VALIDATION_MESSAGES.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = VALIDATION_MESSAGES.email;
    }

    if (!formData.message.trim()) {
      newErrors.message = VALIDATION_MESSAGES.required;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (!formData.acceptPrivacy) {
      newErrors.acceptPrivacy = 'You must accept the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
        acceptPrivacy: false
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-form section">
      <div className="container">
        <div className="contact-form__wrapper">
          {/* Section Header */}
          <div className="contact-form__header">
            <h2 className="contact-form__title">Get In Touch</h2>
            <p className="contact-form__intro">
              Have a question or ready to get started? Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="contact-form__form">
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name" className="contact-form__label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`contact-form__input ${errors.name ? 'error' : ''}`}
                disabled={isSubmitting}
              />
              {errors.name && <div className="form-error">{errors.name}</div>}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="contact-form__label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`contact-form__input ${errors.email ? 'error' : ''}`}
                disabled={isSubmitting}
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message" className="contact-form__label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                className={`contact-form__textarea ${errors.message ? 'error' : ''}`}
                disabled={isSubmitting}
              />
              {errors.message && <div className="form-error">{errors.message}</div>}
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="form-group contact-form__checkbox-group">
              <label className="contact-form__checkbox-label">
                <input
                  type="checkbox"
                  name="acceptPrivacy"
                  checked={formData.acceptPrivacy}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="contact-form__checkbox"
                />
                <span>I agree to the privacy policy</span>
              </label>
              {errors.acceptPrivacy && <div className="form-error">{errors.acceptPrivacy}</div>}
            </div>

            {/* Submit Messages */}
            {submitStatus === 'success' && (
              <div className="contact-form__success-message">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="contact-form__error-message">
                ✗ Something went wrong. Please try again.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary btn-lg contact-form__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
