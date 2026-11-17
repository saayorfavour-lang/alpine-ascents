
import './MountainSections.css';

const stories = [
  {
    name: 'Edmund Hillary & Tenzing Norgay',
    achievement: 'First confirmed ascent of Mount Everest',
    year: '1953',
    description:
      'On 29 May 1953, Edmund Hillary and Tenzing Norgay became the first climbers confirmed to have reached the summit of Mount Everest.',
    image:
      'https://i.natgeofe.com/n/323365d5-32db-4f39-88ca-8c194bd237e9/everest-anniversary-summit-hillary-tenzing_3x2.jpg',
    tag: 'HISTORIC FIRST',
  },
  {
    name: 'Junko Tabei',
    achievement: 'First woman to summit Mount Everest',
    year: '1975',
    description:
      'Japanese mountaineer Junko Tabei made history by becoming the first woman to reach the summit of Mount Everest.',
    image:
      'https://images.pexels.com/photos/2174596/pexels-photo-2174596.jpeg?cs=srgb&dl=pexels-julieaagaard-2174596.jpg&fm=jpg',
    tag: 'BREAKING BARRIERS',
  },
  {
    name: 'Reinhold Messner & Peter Habeler',
    achievement: 'First Everest ascent without supplemental oxygen',
    year: '1978',
    description:
      'They achieved a remarkable milestone by climbing Everest without supplemental bottled oxygen, changing the limits of high-altitude mountaineering.',
    image:
      'https://bbe-1d47e.kxcdn.com/everest-22.jpg?width=1440',
    tag: 'RECORD BREAKING',
  },
  {
    name: 'Reinhold Messner',
    achievement: 'First solo ascent of Mount Everest',
    year: '1980',
    description:
      'Messner completed the first solo ascent of Everest, climbing without a partner during the monsoon season.',
    image:
      'https://images.squarespace-cdn.com/content/v1/64f0890949139c4947c60372/1695753689351-OS0C29PM3U08LPB0VEMP/dani-arnold-matterhorn-speed-record-6.jpg',
    tag: 'SOLO ACHIEVEMENT',
  },
  {
    name: 'Nawang Gombu',
    achievement: 'First person to summit Everest twice',
    year: '1965',
    description:
      'Sherpa mountaineer Nawang Gombu became the first person to reach the summit of Everest twice, in 1963 and 1965.',
    image:
      'https://ucarecdn.com/7b8c177d-7504-47e9-b1e2-44d1c2bf6d91/-/format/auto/-/preview/3000x3000/-/quality/lighter/HIMALI%208000%20Meter%20Down%20Suite%20Galactic%20Teal%20Tendi%20Sherpa%20on%20Mountain.webp',
    tag: 'MOUNTAINEERING LEGEND',
  },
  {
    name: 'Pasang Lhamu Sherpa',
    achievement: 'First Nepali woman to summit Everest',
    year: '1993',
    description:
      'Pasang Lhamu Sherpa became the first Nepali woman to reach Everest’s summit, inspiring generations of climbers.',
    image:
     'https://images.pexels.com/photos/13169503/pexels-photo-13169503.jpeg?cs=srgb&dl=pexels-leyla-helvaci-50263565-13169503.jpg&fm=jpg',
    tag: 'INSPIRATION',
  },
  {
    name: 'Babu Chiri Sherpa',
    achievement: 'Remarkable 21-hour summit stay on Everest',
    year: '1999',
    description:
      'Babu Chiri Sherpa spent approximately 21 hours on the summit of Everest, setting a remarkable endurance milestone at extreme altitude.',
    image:
      'https://cdn.shopify.com/s/files/1/0651/8358/0220/files/everyday-hiking-heroes-remy-kloos-4.jpg',
    tag: 'ENDURANCE',
  },
  {
    name: 'Alison Hargreaves',
    achievement: 'Solo Everest ascent without supplemental oxygen',
    year: '1995',
    description:
      'British climber Alison Hargreaves reached Everest’s summit alone without supplemental oxygen, achieving an extraordinary mountaineering feat.',
    image:
      'https://medien.srf.ch/documents/20142/2180129/5854760.jpg/2cd55984-85b8-6110-a8f2-a001dcb79602?t=1610007573152',
    tag: 'SOLO ACHIEVEMENT',
  },
  {
    name: 'Edurne Pasaban',
    achievement: 'First woman to climb all fourteen 8,000-metre peaks',
    year: '2010',
    description:
      'Spanish climber Edurne Pasaban completed all fourteen of the world’s 8,000-metre peaks, a major achievement in high-altitude mountaineering.',
    image:
       'https://images.openai.com/static-rsc-4/8v00IH7fANIqzXoaTE4D521xl8RoqwMneheWfRiVp1axpuRcNFHFr1TFw1V_DBwjAFUkS1g09C7XsLrcb08dB4PQGLmWdcYfCrBeEw4l8Lask9H-bpjR9MMMLiir7nz9PJJ-6jezQdoxPndp10SEvV7dV4B_YzHC3_1GXTOm_7g5xstffl93giEBwyDN1gA7?purpose=inline',
    tag: 'WORLD FIRST',
  },
];

function SuccessStoriesSection() {
  return (
    <section className="aa-page">
      <div className="aa-container">
        <div className="aa-heading">
          <span className="aa-eyebrow">
            COURAGE. PASSION. DETERMINATION.
          </span>
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
          <p>
            Be inspired by those who dared to go beyond the ordinary.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SuccessStoriesSection;
