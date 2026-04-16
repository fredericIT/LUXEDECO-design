import { useEffect, useRef } from 'react';
import './DesignCards.css';

const cards = [
  {
    id: 'abstract',
    image: '/abstract_room.png',
    title: 'Abstract Designs',
    desc: 'Reprehenderit optio placeat quasi excepturi architecto, explicabo facilis perspiciatis error maxime magnam.',
  },
  {
    id: 'modern',
    image: '/modern_room.png',
    title: 'Modern Designs',
    desc: 'Reprehenderit optio placeat quasi excepturi architecto, explicabo facilis perspiciatis error maxime magnam.',
  },
  {
    id: 'traditional',
    image: '/traditional_room.png',
    title: 'Traditional Designs',
    desc: 'Reprehenderit optio placeat quasi excepturi architecto, explicabo facilis perspiciatis error maxime magnam.',
  },
];

export default function DesignCards() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const obs = new IntersectionObserver(
      ([entry]) => entry.target.classList.toggle('designs--visible', entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (el) obs.observe(el);
    return () => { if (el) obs.unobserve(el); };
  }, []);

  return (
    <section className="designs" id="designs" ref={sectionRef}>
      <div className="container">
        <p className="designs__tag">Our Collections</p>
        <h2 className="designs__heading" id="designs-heading">
          Browse by <span className="gold-text">Style</span>
        </h2>

        <div className="designs__grid">
          {cards.map((card, idx) => (
            <article
              className="design-card"
              key={card.id}
              id={`design-card-${card.id}`}
              style={{ '--delay': `${idx * 0.15}s` }}
            >
              <div className="design-card__img-wrap">
                <img src={card.image} alt={card.title} loading="lazy" />
                <div className="design-card__img-overlay" />
              </div>
              <div className="design-card__body">
                <h3 className="design-card__title">{card.title}</h3>
                <p className="design-card__desc">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
