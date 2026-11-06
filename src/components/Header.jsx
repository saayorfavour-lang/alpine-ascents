import { NavLink } from 'react-router-dom'
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="brand-icon">▲</div>
        <h2>
          ALPINE <span>ASCENTS</span>
        </h2>
        <div className="visitor-count">
          VISITS <strong>3</strong>
        </div>
      </div>

      <nav className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Learn</NavLink>
        <NavLink to="/destinations">Explore</NavLink>
        <NavLink to="/gallery">Success Stories</NavLink>
        <NavLink to="/mountains">Latest</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header;
