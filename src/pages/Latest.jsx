import { useEffect, useState } from 'react';
import latest from '../data/latest.json';
import './Latest.css';

const FILTERS = ['All', 'Current', 'Recent history', 'Ongoing'];

/** Loads the lead image of a Wikipedia article. If it fails, the card simply has no image. */
function ArticleImage({ wiki, alt }) {
  const [img, setImg] = useState(null);

  useEffect(() => {
    let active = true;
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${wiki}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => active && data.thumbnail && setImg({ src: data.thumbnail.source, page: data.content_urls.desktop.page }))
      .catch(() => {});
    return () => { active = false; };
  }, [wiki]);

  if (!img) return <div className="update-image placeholder" aria-hidden="true">▲</div>;
  return (
    <div className="update-image">
      <img src={img.src} alt={alt} loading="lazy" />
      <a href={img.page} target="_blank" rel="noopener noreferrer">Image: Wikipedia</a>
    </div>
  );
}

function Latest() {
  const [filter, setFilter] = useState('All');
  const items = latest.filter((item) => filter === 'All' || item.category === filter);

  return (
    <section className="latest-page">
      <div className="latest-hero">
        <p className="latest-eyebrow">News &amp; developments</p>
        <h1>Latest Updates</h1>
        <p>Stay informed with the latest mountain news, stories and updates. Each item is labelled so you can tell current news from history.</p>
      </div>

      <div className="latest-body">
        <div className="latest-filters" role="group" aria-label="Filter updates">
          {FILTERS.map((name) => (
            <button
              key={name}
              type="button"
              className={filter === name ? 'active' : ''}
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="latest-grid">
          {items.map((item, index) => (
            <article key={item.id} className={`update-card ${index === 0 && filter === 'All' ? 'featured' : ''}`}>
              <ArticleImage wiki={item.wiki} alt={item.title} />
              <div className="update-content">
                <div className="update-meta">
                  <span className={`update-tag ${item.category === 'Current' ? 'current' : ''}`}>{item.category}</span>
                  <span className="update-date">{item.date}</span>
                </div>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <a className="update-link" href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
                  Source: {item.sourceName} ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="latest-note">Updates were last reviewed in November 2026. Always check a current source before planning a climb.</p>
      </div>
    </section>
  );
}

export default Latest;
