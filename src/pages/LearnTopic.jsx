
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './LearnTopic.css';

const topics = {
  history: {
    title: 'History of Mountaineering',
    intro:
      'Mountaineering has developed over centuries, from early exploration to the organised climbing activities we know today.',
    sections: [
      {
        heading: 'Early mountain exploration',
        text: 'Mountains were explored for travel, trade, religious purposes and scientific discovery. Over time, people began climbing them for adventure and exploration.'
      },
      {
        heading: 'The development of modern mountaineering',
        text: 'As equipment, knowledge and climbing techniques improved, mountaineering developed into a recognised outdoor activity.'
      },
      {
        heading: 'Mountaineering today',
        text: 'Modern mountaineering includes different forms of climbing and exploration. Training, preparation, responsible behaviour and safety knowledge remain important.'
      }
    ]
  },

  hazards: {
    title: 'Mountain Hazards',
    intro:
      'Mountain environments can change quickly. Understanding possible hazards helps visitors make informed decisions and prepare responsibly.',
    sections: [
      {
        heading: 'Weather conditions',
        text: 'Mountain weather can change rapidly. Rain, snow, strong winds, fog and low temperatures can affect visibility and travel conditions.'
      },
      {
        heading: 'Terrain hazards',
        text: 'Uneven ground, loose rocks, steep slopes and slippery surfaces can make mountain routes difficult to navigate.'
      },
      {
        heading: 'Environmental awareness',
        text: 'Visitors should pay attention to their surroundings, follow local guidance and avoid continuing when conditions become unsuitable.'
      }
    ]
  },

  safety: {
    title: 'Mountain Safety',
    intro:
      'Mountain safety involves planning carefully, understanding the environment and making responsible decisions throughout an outdoor activity.',
    sections: [
      {
        heading: 'Preparation and planning',
        text: 'Research the route, check weather information and understand the level of difficulty before beginning a mountain activity.'
      },
      {
        heading: 'Equipment and clothing',
        text: 'Appropriate clothing, suitable footwear, enough food and drinking water, and essential emergency supplies support safer outdoor activities.'
      },
      {
        heading: 'Responsible decisions',
        text: 'Stay aware of changing conditions, communicate with your group and follow the advice of qualified mountain professionals.'
      }
    ]
  },

  sheltering: {
    title: 'Sheltering',
    intro:
      'Sheltering is an important part of outdoor preparation. Understanding shelter options helps visitors plan for changing environmental conditions.',
    sections: [
      {
        heading: 'Why shelter matters',
        text: 'Suitable shelter can provide protection from wind, rain, cold and other environmental conditions during outdoor activities.'
      },
      {
        heading: 'Types of shelter',
        text: 'Outdoor shelters may include tents, designated mountain huts and established shelters provided along certain routes.'
      },
      {
        heading: 'Responsible shelter use',
        text: 'Choose designated shelter areas where available, follow local instructions and leave the surrounding environment clean.'
      }
    ]
  },

  types: {
    title: 'Types of Mountains',
    intro:
      'Mountains are formed through different geological processes. Their shapes, structures and landscapes vary across the world.',
    sections: [
      {
        heading: 'Fold mountains',
        text: 'Fold mountains form when sections of the Earth’s crust are compressed and pushed together, causing layers of rock to fold.'
      },
      {
        heading: 'Volcanic mountains',
        text: 'Volcanic mountains form through volcanic activity as lava and other materials accumulate around a volcanic opening.'
      },
      {
        heading: 'Block mountains',
        text: 'Block mountains form when large sections of the Earth’s crust move along faults, creating raised or lowered blocks of land.'
      },
      {
        heading: 'Dome mountains',
        text: 'Dome mountains develop when underground forces push rock layers upward, creating a rounded shape.'
      }
    ]
  },

  guidelines: {
    title: 'Safety Guidelines',
    intro:
      'Following responsible safety guidelines helps visitors prepare for mountain activities, understand possible risks and make informed decisions.',
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
    ],
    checklist: [
      'Check the weather forecast before climbing.',
      'Choose a route suitable for your experience.',
      'Inform someone about your route and expected return.',
      'Pack enough food and drinking water.',
      'Wear appropriate clothing and footwear.',
      'Carry a first-aid kit.',
      'Bring a charged phone and navigation equipment.',
      'Understand when to turn back or seek help.'
    ]
  }
};

function LearnTopic() {
  const { topicId } = useParams();
  const topic = topics[topicId];

  const [checkedItems, setCheckedItems] = useState(() => {
    try {
      const savedItems = localStorage.getItem('alpineSafetyChecklist');

      if (!savedItems) {
        return [];
      }

      const parsedItems = JSON.parse(savedItems);

      if (!Array.isArray(parsedItems)) {
        return [];
      }

      return parsedItems.filter(
        (item) =>
          Number.isInteger(item) &&
          item >= 0 &&
          item < topics.guidelines.checklist.length
      );
    } catch (error) {
      console.error('Could not load checklist progress:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        'alpineSafetyChecklist',
        JSON.stringify(checkedItems)
      );
    } catch (error) {
      console.error('Could not save checklist progress:', error);
    }
  }, [checkedItems]);

  const handleCheck = (index) => {
    setCheckedItems((previousItems) =>
      previousItems.includes(index)
        ? previousItems.filter((item) => item !== index)
        : [...previousItems, index]
    );
  };

  const resetChecklist = () => {
    setCheckedItems([]);
  };

  if (!topic) {
    return (
      <section className="topic-page">
        <div className="topic-content">
          <h1>Topic not found</h1>
          <p>The learning topic you requested could not be found.</p>
          <Link to="/learn" className="topic-back">
            Return to Learning Centre
          </Link>
        </div>
      </section>
    );
  }

  const checklist = topic.checklist || [];
  const progress =
    checklist.length > 0
      ? Math.round((checkedItems.length / checklist.length) * 100)
      : 0;

  return (
    <section className="topic-page">
      <div className="topic-content">
        <p className="topic-label">
          ALPINE ASCENTS · LEARNING CENTRE
        </p>

        <h1>{topic.title}</h1>

        <p className="topic-intro">{topic.intro}</p>

        {topic.sections.map((section, index) => (
          <article className="topic-section" key={index}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </article>
        ))}

        {topic.checklist && (
          <div className="guidelines-checklist">
            <div className="checklist-heading">
              <div>
                <p className="checklist-label">BE PREPARED</p>

                <h2>Mountain Safety Checklist</h2>

                <p>
                  Review these important preparations before your climb.
                </p>
              </div>

              <span className="checklist-count">
                {checkedItems.length}/{checklist.length}
              </span>
            </div>

            <div
              className="checklist-progress"
              role="progressbar"
              aria-label="Checklist completion"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="checklist-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="checklist-progress-text">
              {progress}% reviewed
            </p>

            <div className="checklist-items">
              {checklist.map((item, index) => (
                <label
                  key={index}
                  className={`guideline-check-item ${
                    checkedItems.includes(index) ? 'checked' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checkedItems.includes(index)}
                    onChange={() => handleCheck(index)}
                  />

                  <span>{item}</span>
                </label>
              ))}
            </div>

            {checkedItems.length === checklist.length && (
              <p className="checklist-complete">
                You have reviewed every checklist item. Stay prepared
                and continue following current mountain safety advice.
              </p>
            )}

            <button
              className="checklist-reset"
              type="button"
              onClick={resetChecklist}
            >
              Reset checklist
            </button>

            <p className="checklist-note">
              This checklist is a preparation aid, not a guarantee
              that a climb is safe.
            </p>
          </div>
        )}

        <Link to="/learn" className="topic-back">
          ← Back to Learning Centre
        </Link>
      </div>
    </section>
  );
}

export default LearnTopic;
