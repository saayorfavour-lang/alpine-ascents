
import { Link, useParams } from 'react-router-dom';
import './LearnTopic.css';

const topics = {
  history: {
    title: 'History of Mountaineering',
    intro: 'Discover how mountaineering developed into an international pursuit.',
    sections: [
      {
        heading: 'The beginnings',
        text: 'People have travelled through mountain regions for centuries for trade, exploration, work and cultural reasons. Over time, organised climbing expeditions developed into a recognised activity.'
      },
      {
        heading: 'The modern era',
        text: 'Improved equipment, maps, training and weather knowledge helped climbers explore increasingly challenging mountain routes.'
      }
    ]
  },

  hazards: {
    title: 'Mountain Hazards',
    intro: 'Understand the natural conditions that can make mountain environments challenging.',
    sections: [
      {
        heading: 'Weather and altitude',
        text: 'Mountain weather can change quickly. Cold temperatures, strong winds, storms and reduced oxygen at higher elevations require careful preparation.'
      },
      {
        heading: 'Terrain hazards',
        text: 'Loose rocks, steep slopes, falling ice and unstable snow are examples of terrain hazards. Learning about local conditions helps people make safer decisions.'
      }
    ]
  },

  safety: {
    title: 'Mountain Safety',
    intro: 'Learn the principles of preparation, awareness and responsible mountain travel.',
    sections: [
      {
        heading: 'Preparation',
        text: 'Before a mountain trip, understand the route, check current weather information, consider your experience and make sure your group is properly prepared.'
      },
      {
        heading: 'Making safe decisions',
        text: 'Good mountain judgement includes recognising changing conditions, communicating with your group and being willing to change plans when necessary.'
      }
    ]
  },

  sheltering: {
    title: 'Sheltering',
    intro: 'Explore the role of shelter in protecting people from mountain conditions.',
    sections: [
      {
        heading: 'Why shelter matters',
        text: 'Shelter helps protect people from wind, rain, snow and cold. The right shelter depends on the environment, the season and the needs of the group.'
      },
      {
        heading: 'Planning ahead',
        text: 'Understand the shelter options available along a route and include suitable emergency arrangements in your trip planning.'
      }
    ]
  },

  types: {
    title: 'Types of Mountains',
    intro: 'Explore how mountains are classified and how different mountain landscapes form.',
    sections: [
      {
        heading: 'Fold mountains',
        text: 'Fold mountains form when sections of the Earth’s crust are compressed and pushed upwards. The Himalayas are a well-known example.'
      },
      {
        heading: 'Volcanic mountains',
        text: 'Volcanic mountains form through volcanic activity, as erupted material builds up around a volcanic opening.'
      },
      {
        heading: 'Block and dome mountains',
        text: 'Block mountains form through movements along faults in the Earth’s crust. Dome mountains form when large areas of rock are uplifted.'
      }
    ]
  },

  guidelines: {
    title: 'Safety Guidelines',
    intro: 'Review essential principles for responsible and informed mountain activities.',
    sections: [
      {
        heading: 'Before your trip',
        text: 'Research the route, check weather forecasts, understand local regulations and make sure your plans match your group’s experience.'
      },
      {
        heading: 'During your trip',
        text: 'Stay aware of your surroundings, communicate clearly, respect the environment and follow the guidance of qualified mountain professionals.'
      },
      {
        heading: 'Respect the mountain',
        text: 'Leave no litter, respect wildlife and local communities, and follow responsible outdoor practices.'
      }
    ]
  }
};

function LearnTopic() {
  const { topicId } = useParams();
  const topic = topics[topicId];

  if (!topic) {
    return (
      <section className="topic-page">
        <h1>Topic not found</h1>
        <Link to="/learn">Return to Learn</Link>
      </section>
    );
  }

  return (
    <section className="topic-page">
      <div className="topic-content">
        <p className="topic-label">ALPINE ASCENTS · LEARNING CENTRE</p>

        <h1>{topic.title}</h1>

        <p className="topic-intro">{topic.intro}</p>

        {topic.sections.map((section, index) => (
          <article className="topic-section" key={index}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </article>
        ))}

        <Link to="/learn" className="topic-back">
          ← Back to Learning Centre
        </Link>
      </div>
    </section>
  );
}

export default LearnTopic;
