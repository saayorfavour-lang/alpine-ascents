import { Link } from 'react-router-dom';
import contact from '../data/contact.json';
import { gmailLink } from '../utils/gmail';
import './Footer.css';

const pageLinks = [
  { label: 'Home', to: '/' },
  { label: 'Learn', to: '/learn' },
  { label: 'Explore', to: '/explore' },
  { label: 'Success Stories', to: '/success-stories' },
  { label: 'Latest', to: '/latest' },
  { label: 'Contact', to: '/contact' }
];

const learnLinks = [
  { label: 'History of Mountaineering', to: '/learn/history' },
  { label: 'Mountain Hazards', to: '/learn/hazards' },
  { label: 'Mountain Safety', to: '/learn/safety' },
  { label: 'Sheltering', to: '/learn/sheltering' },
  { label: 'Types of Mountains', to: '/learn/types' },
  { label: 'Safety Guidelines', to: '/learn/guidelines' }
];

// Route changes keep the old scroll position, so every footer link scrolls back to the top.
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>ALPINE <span>ASCENTS</span></h3>
          <p>An educational guide to mountaineering: its history, skills, hazards, records and people.</p>
        </div>

        <nav className="footer-col" aria-label="Footer pages">
          <h4>Explore the site</h4>
          <ul>
            {pageLinks.map((link) => (
              <li key={link.to}><Link to={link.to} onClick={toTop}>{link.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Footer learning topics">
          <h4>Learn</h4>
          <ul>
            {learnLinks.map((link) => (
              <li key={link.to}><Link to={link.to} onClick={toTop}>{link.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            {contact.email && <li><a href={gmailLink(contact.email)} target="_blank" rel="noopener noreferrer">{contact.email}</a></li>}
            <li><Link to="/contact" onClick={toTop}>Send us a message</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Alpine Ascents. All rights reserved.</p>
        <button type="button" className="back-to-top" onClick={toTop}>Back to top ↑</button>
      </div>
    </footer>
  );
}

export default Footer;
