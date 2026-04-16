import './Footer.css';

const footerColumns = [
  {
    title: 'Account',
    links: ['Sign Up', 'Sign In', 'Subscribe'],
  },
  {
    title: 'Contact',
    links: ['Address', 'Mobile Number', 'Help'],
  },
  {
    title: 'Products',
    links: ['Sofa', 'Art', 'Wallpapers', 'Woodworks'],
  },
  {
    title: 'Services',
    links: ['Interior Decorations', 'First hand Design', 'Design & Decor', 'Design Advice', 'Sell your Designs'],
  },
];

const socialIcons = [
  { name: 'Facebook', icon: '📘' },
  { name: 'Twitter', icon: '🐦' },
  { name: 'Google+', icon: '🔴' },
  { name: 'Instagram', icon: '📷' },
  { name: 'Community', icon: '👥' },
  { name: 'YouTube', icon: '▶️' },
  { name: 'Pinterest', icon: '📌' },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          {footerColumns.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4 className="footer__col-title">{col.title}</h4>
              <ul className="footer__col-list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">• {link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials Column */}
          <div className="footer__col footer__col--socials">
            <h4 className="footer__col-title">Socials</h4>
            <div className="footer__socials-grid">
              {socialIcons.map((s) => (
                <a href="#" className="footer__social-icon" key={s.name} aria-label={s.name} title={s.name}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
