
import { Link } from 'react-router-dom';
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
            <Link to="/explore" className="btn-primary">
              Explore the mountains
            </Link>

            <Link to="/learn" className="btn-secondary">
              Read the history
            </Link>
          </div>
        </div>

        <div className="hero-credit">
          Photo of Mount Everest: Rdevany, CC BY-SA 3.0 —
          <a
            href="https://commons.wikimedia.org/wiki/File:Mt._Everest_from_Gokyo_Ri_November_5,_2012.jpg"
            target="_blank"
            rel="noreferrer"
          >
            Wikimedia Commons
          </a>
        </div>

        <div className="hero-scroll">
          <span></span>
          SCROLL TO DISCOVER
        </div>

      </section>
    </div>
  );
}

export default Home;
