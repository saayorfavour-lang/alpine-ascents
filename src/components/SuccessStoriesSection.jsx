
import './MountainSections.css';

const stories = [
  {
    name: 'Edmund Hillary & Tenzing Norgay',
    achievement: 'First confirmed ascent of Mount Everest',
    year: '1953',
    description:
      'On 29 May 1953, Edmund Hillary and Tenzing Norgay became the first climbers confirmed to have reached the summit of Mount Everest.',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85',
    tag: 'HISTORIC FIRST',
  },
  {
    name: 'Junko Tabei',
    achievement: 'First woman to summit Mount Everest',
    year: '1975',
    description:
      'Japanese mountaineer Junko Tabei made history by becoming the first woman to reach the summit of Mount Everest.',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=85',
    tag: 'BREAKING BARRIERS',
  },
  {
    name: 'Reinhold Messner & Peter Habeler',
    achievement: 'First Everest ascent without supplemental oxygen',
    year: '1978',
    description:
      'They achieved a remarkable milestone by climbing Everest without supplemental bottled oxygen, changing the limits of high-altitude mountaineering.',
    image:
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1000&q=85',
    tag: 'RECORD BREAKING',
  },
  {
    name: 'Reinhold Messner',
    achievement: 'First solo ascent of Mount Everest',
    year: '1980',
    description:
      'Messner completed the first solo ascent of Everest, climbing without a partner during the monsoon season.',
    image:
      'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=85',
    tag: 'SOLO ACHIEVEMENT',
  },
  {
    name: 'Nawang Gombu',
    achievement: 'First person to summit Everest twice',
    year: '1965',
    description:
      'Sherpa mountaineer Nawang Gombu became the first person to reach the summit of Everest twice, in 1963 and 1965.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85',
    tag: 'MOUNTAINEERING LEGEND',
  },
  {
    name: 'Pasang Lhamu Sherpa',
    achievement: 'First Nepali woman to summit Everest',
    year: '1993',
    description:
      'Pasang Lhamu Sherpa became the first Nepali woman to reach Everest’s summit, inspiring generations of climbers.',
    image:
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85',
    tag: 'INSPIRATION',
  },
  {
    name: 'Babu Chiri Sherpa',
    achievement: 'Remarkable 21-hour summit stay on Everest',
    year: '1999',
    description:
      'Babu Chiri Sherpa spent approximately 21 hours on the summit of Everest, setting a remarkable endurance milestone at extreme altitude.',
    image:
      'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1000&q=85',
    tag: 'ENDURANCE',
  },
  {
    name: 'Alison Hargreaves',
    achievement: 'Solo Everest ascent without supplemental oxygen',
    year: '1995',
    description:
      'British climber Alison Hargreaves reached Everest’s summit alone without supplemental oxygen, achieving an extraordinary mountaineering feat.',
    image:
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1000&q=85',
    tag: 'SOLO ACHIEVEMENT',
  },
  {
    name: 'Edurne Pasaban',
    achievement: 'First woman to climb all fourteen 8,000-metre peaks',
    year: '2010',
    description:
      'Spanish climber Edurne Pasaban completed all fourteen of the world’s 8,000-metre peaks, a major achievement in high-altitude mountaineering.',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85',
    tag: 'WORLD FIRST',
  },
];

function SuccessStoriesSection() {
  return (
    <section className="aa-page">
      <div className="aa-container">

        <div className="aa-heading">
          <span className="aa-eyebrow">COURAGE. PASSION. DETERMINATION.</span>
          <h1>Success Stories</h1>
          <p>
            Meet the climbers who pushed beyond limits and made
            mountaineering history.
          </p>
        </div>

        <div className="aa-card-grid">
          {stories.map((story, index) => (
            <article className="aa-card" key={story.name}>
              <div className="aa-card-image">
                <img
                  src={story.image}
                  alt={story.name}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
                <span className="aa-card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="aa-difficulty">
                  {story.year}
                </span>
              </div>

              <div className="aa-card-content">
                <span className="aa-location">{story.tag}</span>
                <h2>{story.name}</h2>
                <h3 className="aa-achievement">
                  {story.achievement}
                </h3>
                <p className="aa-description">
                  {story.description}
                </p>

                <div className="aa-story-footer">
                  <span>ALPINE ASCENTS</span>
                  <span>EST. {story.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="aa-bottom-note">
          <span>EVERY SUMMIT HAS A STORY</span>
          <p>Be inspired by those who dared to go beyond the ordinary.</p>
        </div>

      </div>
    </section>
  );
}

export default SuccessStoriesSection;
