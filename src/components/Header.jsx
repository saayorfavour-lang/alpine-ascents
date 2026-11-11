
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import useVisitorCounter from '../hooks/useVisitorCounter';
import './Header.css';

const learnTopics = [
  { title: 'History of Mountaineering', path: '/learn/history' },
  { title: 'Mountain Hazards', path: '/learn/hazards' },
  { title: 'Mountain Safety', path: '/learn/safety' },
  { title: 'Sheltering', path: '/learn/sheltering' },
  { title: 'Types of Mountains', path: '/learn/types' },
  { title: 'Safety Guidelines', path: '/learn/guidelines' }
];

function Header() {
  const visits = useVisitorCounter();
  const [learnOpen, setLearnOpen] = useState(false);

  return (
    <header className="site-header">

      <Link to="/" className="brand">
        <div className="brand-icon">▲</div>
        <h2>
          ALPINE <span>ASCENTS</span>
        </h2>
      </Link>

      <nav className="navigation">
        <NavLink to="/" end>Home</NavLink>

        <div className="learn-menu">
          <button
            type="button"
            className={`learn-trigger ${learnOpen ? 'active' : ''}`}
            onClick={() => setLearnOpen(!learnOpen)}
            aria-expanded={learnOpen}
          >
            Learn <span className="dropdown-arrow">⌄</span>
          </button>

          {learnOpen && (
            <div className="learn-dropdown">
              <p className="dropdown-heading">LEARNING CENTRE</p>

              {learnTopics.map((topic) => (
                <Link
                  key={topic.path}
                  to={topic.path}
                  className="learn-dropdown-link"
                  onClick={() => setLearnOpen(false)}
                >
                  {topic.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/success-stories">Success Stories</NavLink>
        <NavLink to="/latest">Latest</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="header-right">
        <div className="visitor-count">
          <span>VISITS</span>
          <strong>{visits}</strong>
        </div>

        <Link to="/explore" className="header-cta">
          Plan Your Climb <span>→</span>
        </Link>
      </div>

    </header>
  );
}

export default Header;
