
import './MountainSections.css';

const destinations = [
  {
    name: 'Mount Everest',
    location: 'Nepal / Tibet',
    height: '8,849 m',
    difficulty: 'Extreme',
    season: 'April – May',
    description:
      'The highest mountain on Earth. Everest attracts climbers from across the world who want to take on one of mountaineering’s greatest challenges.',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Matterhorn',
    location: 'Switzerland / Italy',
    height: '4,478 m',
    difficulty: 'Challenging',
    season: 'July – September',
    description:
      'Famous for its sharp pyramid-shaped peak, the Matterhorn is one of the most recognisable mountains in the Alps.',
    image:
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Denali',
    location: 'Alaska, USA',
    height: '6,190 m',
    difficulty: 'Extreme',
    season: 'May – June',
    description:
      'North America’s highest peak is known for its freezing temperatures, unpredictable weather and demanding climbing conditions.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Mount Kilimanjaro',
    location: 'Tanzania',
    height: '5,895 m',
    difficulty: 'Moderate',
    season: 'January – March',
    description:
      'Africa’s highest mountain is a spectacular volcanic peak with several trekking routes through changing climate zones.',
    image:
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Aconcagua',
    location: 'Argentina',
    height: '6,961 m',
    difficulty: 'Challenging',
    season: 'December – February',
    description:
      'The highest mountain outside Asia, Aconcagua offers a serious high-altitude challenge in the Andes.',
    image:
      'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Mont Blanc',
    location: 'France / Italy',
    height: '4,809 m',
    difficulty: 'Challenging',
    season: 'June – September',
    description:
      'The highest mountain in the Alps is known for its glaciers, dramatic ridgelines and classic alpine climbing routes.',
    image:
      'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Mount Fuji',
    location: 'Japan',
    height: '3,776 m',
    difficulty: 'Moderate',
    season: 'July – September',
    description:
      'Japan’s iconic volcanic mountain is a major cultural landmark and a popular destination for seasonal hikers.',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Vinson Massif',
    location: 'Antarctica',
    height: '4,892 m',
    difficulty: 'Extreme',
    season: 'December – January',
    description:
      'The highest mountain in Antarctica combines remote wilderness, extreme cold and a demanding expedition environment.',
    image:
      'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Mount Elbrus',
    location: 'Russia',
    height: '5,642 m',
    difficulty: 'Challenging',
    season: 'June – August',
    description:
      'The highest peak in Europe is a snow-covered volcanic mountain popular with climbers seeking a high-altitude adventure.',
    image:
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1000&q=85',
  },
];

function ExploreSection() {
  return (
    <section className="aa-page">
      <div className="aa-container">

        <div className="aa-heading">
          <span className="aa-eyebrow">DISCOVER THE WORLD</span>
          <h1>Explore Mountains</h1>
          <p>
            Discover incredible destinations, explore famous peaks and
            find your next mountain adventure.
          </p>
        </div>

        <div className="aa-card-grid">
          {destinations.map((mountain, index) => (
            <article className="aa-card" key={mountain.name}>
              <div className="aa-card-image">
                <img
                  src={mountain.image}
                  alt={mountain.name}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
                <span className="aa-card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="aa-difficulty">
                  {mountain.difficulty}
                </span>
              </div>

              <div className="aa-card-content">
                <span className="aa-location">{mountain.location}</span>
                <h2>{mountain.name}</h2>
                <p className="aa-description">
                  {mountain.description}
                </p>

                <div className="aa-card-details">
                  <div>
                    <span>HEIGHT</span>
                    <strong>{mountain.height}</strong>
                  </div>
                  <div>
                    <span>BEST SEASON</span>
                    <strong>{mountain.season}</strong>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="aa-bottom-note">
          <span>YOUR NEXT ADVENTURE STARTS HERE</span>
          <p>Choose your mountain. Prepare for the climb. Make it count.</p>
        </div>

      </div>
    </section>
  );
}

export default ExploreSection;
