import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    const obs = new IntersectionObserver(
      ([entry]) => entry.target.classList.toggle('hero--visible', entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (el) obs.observe(el);
    return () => { if (el) obs.unobserve(el); };
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero__overlay" />
      <div className="hero__content container">
        <p className="hero__tag">Premium Interior Design</p>
        <h1 className="hero__title" id="hero-heading">
          Elevate Your <span className="gold-text">Living</span> Spaces
        </h1>
        <p className="hero__subtitle">
          We craft bespoke, luxurious interiors that transform ordinary rooms into extraordinary experiences.
        </p>
        <div className="hero__actions">
          <a href="#designs" className="hero__btn hero__btn--primary" id="hero-explore">Explore Designs</a>
          <a href="#contact" className="hero__btn hero__btn--outline" id="hero-contact">Get in Touch</a>
        </div>
      </div>
      <div className="hero__scroll-hint">
        <span />
      </div>
    </section>
  );
}
