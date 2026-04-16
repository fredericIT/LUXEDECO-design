import { useState, useEffect, useRef } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const obs = new IntersectionObserver(
      ([entry]) => entry.target.classList.toggle('newsletter--visible', entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (el) obs.observe(el);
    return () => { if (el) obs.unobserve(el); };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="newsletter" id="newsletter" ref={sectionRef}>
      <div className="newsletter__left">
        <div className="newsletter__content">
          <h2 className="newsletter__title" id="newsletter-heading">
            Join Our Community
            <span className="newsletter__title-icon">👥</span>
          </h2>
          <p className="newsletter__desc">Receive emails on discounts and special offers</p>
          <form className="newsletter__form" onSubmit={handleSubmit} id="newsletter-form">
            <input
              type="email"
              className="newsletter__input"
              id="newsletter-email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter__btn" id="newsletter-subscribe">
              {submitted ? '✓ Subscribed!' : 'SUBSCRIBE'}
            </button>
          </form>
        </div>
      </div>
      <div className="newsletter__right">
        <img src="/newsletter_room.png" alt="Premium dark interior" loading="lazy" />
        <div className="newsletter__right-overlay" />
      </div>
    </section>
  );
}
