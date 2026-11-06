import { Link } from 'react-router-dom'
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">
            EXPEDITIONS · KNOWLEDGE · SAFETY
          </p>

          <h1>
            Climb with
            <br />
            understanding.
          </h1>

          <p className="hero-description">
            An international guide to mountaineering — its history,
            skills, hazards, records and the people who reach the
            high places.
          </p>

          <div className="hero-buttons">
            <Link to="/mountains" className="btn-primary">
              Explore the mountains
            </Link>

            <Link to="/about" className="btn-secondary">
              Read the history
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
