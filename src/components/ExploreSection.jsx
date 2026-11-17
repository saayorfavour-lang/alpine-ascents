
import { useState } from 'react';
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
    about:
      'Located in the Himalayas, Mount Everest is the highest point on Earth above sea level. Its extreme altitude creates serious challenges, including low oxygen levels, freezing temperatures and unpredictable weather. Climbers usually spend weeks acclimatising before attempting the summit.',
    image:
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Matterhorn',
    location: 'Switzerland / Italy',
    height: '4,478 m',
    difficulty: 'Challenging',
    season: 'July – September',
    description:
      'Famous for its sharp pyramid-shaped peak, the Matterhorn is one of the most recognisable mountains in the Alps.',
    about:
      'The Matterhorn stands on the border between Switzerland and Italy. Its steep faces and exposed ridges make it a demanding climb that requires strong technical skills, careful planning and suitable weather conditions.',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Denali',
    location: 'Alaska, USA',
    height: '6,190 m',
    difficulty: 'Extreme',
    season: 'May – June',
    description:
      'North America’s highest peak is known for its freezing temperatures, unpredictable weather and demanding climbing conditions.',
    about:
      'Denali is located in the Alaska Range and is the highest mountain in North America. Its extreme cold, heavy snow and remote location make it a serious expedition. Climbers often carry their own supplies across glaciers.',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Mount Kilimanjaro',
    location: 'Tanzania',
    height: '5,895 m',
    difficulty: 'Moderate',
    season: 'January – March',
    description:
      'Africa’s highest mountain is a spectacular volcanic peak with several trekking routes through changing climate zones.',
    about:
      'Kilimanjaro is a dormant volcanic mountain in Tanzania. Its routes pass through rainforest, moorland and alpine desert before reaching the snowy summit. Although technical climbing equipment is generally not required on the standard routes, altitude sickness is a major concern.',
    image:
      'https://climbkili.com/wp-content/uploads/task_01kfgqy3z3exhvb2n4m4nbckr2_1769014792_img_0.webp',
  },
  {
    name: 'Aconcagua',
    location: 'Argentina',
    height: '6,961 m',
    difficulty: 'Challenging',
    season: 'December – February',
    description:
      'The highest mountain outside Asia, Aconcagua offers a serious high-altitude challenge in the Andes.',
    about:
      'Aconcagua is located in the Andes of western Argentina. It is the highest mountain in the Americas. Although its normal route does not require advanced technical climbing, the altitude, strong winds and harsh weather make it physically demanding.',
    image:
      'https://www.atlasandboots.com/wp-content/uploads/2020/02/Climbing-Aconcagua-featimg.jpg',
  },
  {
    name: 'Mont Blanc',
    location: 'France / Italy',
    height: '4,809 m',
    difficulty: 'Challenging',
    season: 'June – September',
    description:
      'The highest mountain in the Alps is known for its glaciers, dramatic ridgelines and classic alpine climbing routes.',
    about:
      'Mont Blanc is part of the Alps and lies on the France–Italy border region. Its glaciers and changing weather make preparation essential. Climbers need appropriate equipment and experience with high-altitude alpine conditions.',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Mount Fuji',
    location: 'Japan',
    height: '3,776 m',
    difficulty: 'Moderate',
    season: 'July – September',
    description:
      'Japan’s iconic volcanic mountain is a major cultural landmark and a popular destination for seasonal hikers.',
    about:
      'Mount Fuji is Japan’s highest mountain and an active volcano. It is famous for its symmetrical shape and cultural importance. During the official climbing season, hikers follow marked routes to reach the summit and enjoy sunrise views.',
    image:
      'https://res.cloudinary.com/aenetworks/image/upload/c_fill%2Car_2%2Cw_3840%2Ch_1920%2Cg_auto/dpr_auto/f_auto/q_auto%3Aeco/v1/1199486911_ch0wo8?_a=BAVAZGDX0',
  },
  {
    name: 'Vinson Massif',
    location: 'Antarctica',
    height: '4,892 m',
    difficulty: 'Extreme',
    season: 'December – January',
    description:
      'The highest mountain in Antarctica combines remote wilderness, extreme cold and a demanding expedition environment.',
    about:
      'Vinson Massif is the highest mountain in Antarctica. Its remote location means expeditions require specialist logistics, experienced guides and preparation for severe cold. It is one of the Seven Summits.',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Mount Elbrus',
    location: 'Russia',
    height: '5,642 m',
    difficulty: 'Challenging',
    season: 'June – August',
    description:
      'The highest peak in Europe is a snow-covered volcanic mountain popular with climbers seeking a high-altitude adventure.',
    about:
      'Mount Elbrus is a dormant volcano in the Caucasus Mountains of Russia. Its two summits are covered in snow and ice throughout the year. Climbers face high altitude, cold temperatures and changing weather conditions.',
    image:
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1000&q=85',
  },
];

function ExploreSection() {
  const [selectedMountain, setSelectedMountain] = useState(null);

  if (selectedMountain) {
    return (
      <section className="aa-page">
        <div className="aa-container">
          <button
            className="aa-back-button"
            onClick={() => setSelectedMountain(null)}
          >
            ← Back to Explore
          </button>

          {/* ONE CONNECTED BOX */}
          <div className="aa-mountain-detail">

            {/* LEFT SIDE: IMAGE */}
            <div className="aa-detail-image">
              <img
                src={selectedMountain.image}
                alt={selectedMountain.name}
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
            </div>

            {/* RIGHT SIDE: DESCRIPTION */}
            <div className="aa-detail-content">
              <span className="aa-eyebrow">
                EXPLORE DESTINATION
              </span>

              <span className="aa-location">
                {selectedMountain.location}
              </span>

              <h1>{selectedMountain.name}</h1>

              <p className="aa-detail-description">
                {selectedMountain.about}
              </p>

              <div className="aa-detail-info">
                <div>
                  <span>HEIGHT</span>
                  <strong>{selectedMountain.height}</strong>
                </div>

                <div>
                  <span>DIFFICULTY</span>
                  <strong>{selectedMountain.difficulty}</strong>
                </div>

                <div>
                  <span>BEST SEASON</span>
                  <strong>{selectedMountain.season}</strong>
                </div>

                <div>
                  <span>LOCATION</span>
                  <strong>{selectedMountain.location}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
            <article
              className="aa-card"
              key={mountain.name}
              onClick={() => setSelectedMountain(mountain)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedMountain(mountain);
                }
              }}
            >
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
                <span className="aa-location">
                  {mountain.location}
                </span>

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

                <span className="aa-view-more">
                  View mountain details →
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="aa-bottom-note">
          <span>YOUR NEXT ADVENTURE STARTS HERE</span>
          <p>
            Choose your mountain. Prepare for the climb. Make it count.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ExploreSection;
