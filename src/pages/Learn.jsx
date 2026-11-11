import { useState } from "react";
import "./Learn.css";

const topics = [
  {
    id: "history",
    title: "History of Mountaineering",
    icon: "🏔️",
    description: "Discover how mountaineering developed through history.",
    intro:
      "Mountains were crossed for trade and worship for millennia, but climbing for its own sake began in the Alps.",
    sections: [
      {
        heading: "1786 — Mont Blanc",
        text: "Jacques Balmat and Michel-Gabriel Paccard made the first ascent, often seen as the birth of alpinism."
      },
      {
        heading: "1857 — The Alpine Club",
        text: "The world's first mountaineering club was founded in London, followed by national clubs across Europe."
      },
      {
        heading: "1865 — Matterhorn",
        text: "Edward Whymper's party reached the summit, but four climbers died on the descent."
      },
      {
        heading: "1953 — Mount Everest",
        text: "Edmund Hillary and Tenzing Norgay made the first confirmed ascent on 29 May."
      },
      {
        heading: "1975 — Junko Tabei",
        text: "Junko Tabei of Japan became the first woman to climb Everest."
      },
      {
        heading: "1978 — Without bottled oxygen",
        text: "Reinhold Messner and Peter Habeler climbed Everest without supplemental oxygen."
      }
    ]
  },
  {
    id: "hazards",
    title: "Mountain Hazards",
    icon: "⚠️",
    description: "Understand the natural dangers found in mountain environments.",
    intro:
      "Mountain environments can change quickly. Understanding possible hazards helps climbers make informed decisions.",
    sections: [
      {
        heading: "Avalanches",
        text: "Rapid movements of snow down a mountain slope can pose serious risks to climbers."
      },
      {
        heading: "Rockfalls",
        text: "Loose rocks may fall naturally or be disturbed by weather and movement."
      },
      {
        heading: "Extreme Weather",
        text: "Sudden storms, strong winds, heavy rain and snow can make mountain conditions dangerous."
      },
      {
        heading: "Altitude Sickness",
        text: "At high elevations, reduced oxygen availability can cause headaches, nausea, dizziness and other symptoms."
      },
      {
        heading: "Crevasses",
        text: "Glaciers can contain deep cracks hidden beneath snow."
      }
    ]
  },
  {
    id: "mountain-safety",
    title: "Mountain Safety",
    icon: "🧭",
    description: "Learn the basic principles of responsible mountain climbing.",
    intro:
      "A safe mountain experience begins with preparation, awareness and responsible decision-making.",
    sections: [
      {
        heading: "Plan Ahead",
        text: "Research the route, check weather forecasts and understand the difficulty of the climb."
      },
      {
        heading: "Climb with Others",
        text: "Avoid climbing alone. Travel with experienced companions or a qualified guide."
      },
      {
        heading: "Know Your Limits",
        text: "Choose routes that match your experience and fitness. Turn back when conditions become unsafe."
      },
      {
        heading: "Stay Hydrated",
        text: "Carry enough drinking water and take regular breaks."
      },
      {
        heading: "Emergency Preparation",
        text: "Know how to contact local emergency services and share your route and expected return time."
      }
    ]
  },
  {
    id: "sheltering",
    title: "Sheltering",
    icon: "⛺",
    description: "Understand shelter options and protection in mountain environments.",
    intro:
      "Shelter protects mountaineers from wind, rain, cold and other environmental conditions during outdoor trips.",
    sections: [
      {
        heading: "Mountaineering Tents",
        text: "Purpose-built tents provide protection from wind, rain and cold. Choose one suitable for the expected conditions."
      },
      {
        heading: "Mountain Huts",
        text: "Established mountain huts provide designated resting and overnight accommodation in some mountain regions."
      },
      {
        heading: "Choosing a Safe Location",
        text: "Use designated campsites and avoid exposed ridges, unstable slopes, avalanche paths and areas beneath loose rocks."
      },
      {
        heading: "Keeping Warm",
        text: "Wear suitable layers, keep clothing dry and use appropriate sleeping equipment."
      },
      {
        heading: "Leave No Trace",
        text: "Respect the environment, dispose of waste properly and leave natural surroundings undisturbed."
      }
    ]
  },
  {
    id: "mountain-types",
    title: "Types of Mountains",
    icon: "🌄",
    description: "Explore the different ways mountains are formed.",
    intro:
      "Mountains are classified according to their geological formation. Each type has distinctive features.",
    sections: [
      {
        heading: "Fold Mountains",
        text: "Form when sections of the Earth's crust are compressed and pushed upwards. The Himalayas are an example."
      },
      {
        heading: "Fault-Block Mountains",
        text: "Form when large blocks of the Earth's crust move along faults."
      },
      {
        heading: "Volcanic Mountains",
        text: "Develop through the accumulation of volcanic materials during eruptions. Mount Fuji is an example."
      },
      {
        heading: "Dome Mountains",
        text: "Form when underground magma pushes the Earth's crust upwards without breaking through the surface."
      },
      {
        heading: "Residual Mountains",
        text: "Form when erosion wears away surrounding rock, leaving more resistant elevated areas."
      }
    ]
  },
  {
    id: "guidelines",
    title: "Safety Guidelines",
    icon: "🛡️",
    description: "Important rules to follow before and during a mountain trip.",
    intro:
      "Following mountain safety guidelines helps reduce risks and encourages responsible outdoor activities.",
    sections: [
      {
        heading: "Before the Climb",
        text: "Research your destination, check weather conditions, prepare your equipment and inform someone about your plans."
      },
      {
        heading: "Use Appropriate Equipment",
        text: "Wear suitable footwear and clothing. Carry navigation tools, a first-aid kit, food and enough water."
      },
      {
        heading: "Follow Marked Routes",
        text: "Stay on established trails and obey signs, warnings and instructions from qualified guides."
      },
      {
        heading: "Respect Weather Warnings",
        text: "Postpone or cancel a climb when dangerous weather is expected. Do not ignore official warnings."
      },
      {
        heading: "Protect the Environment",
        text: "Avoid littering, disturbing wildlife or damaging vegetation."
      },
      {
        heading: "Know When to Turn Back",
        text: "Reaching the summit is never more important than your safety. Turn back when conditions become unsafe."
      }
    ]
  }
];

function Learn() {
  const [activeTopic, setActiveTopic] = useState(null);

  const selectedTopic = topics.find(
    (topic) => topic.id === activeTopic
  );

  return (
    <div className="learn-page">
      <section className="learn-hero">
        <div className="learn-overlay"></div>

        <div className="learn-content">
          <span className="learn-eyebrow">THE KNOWLEDGE HUB</span>

          <h1>Learn Before You Climb.</h1>

          <p>
            Explore the knowledge, skills and safety principles
            that make every mountain journey more informed.
          </p>
        </div>
      </section>

      <section className="learn-topics">
        <div className="learn-section-heading">
          <span>EXPLORE AND DISCOVER</span>
          <h2>What Would You Like to Learn?</h2>
          <p>
            Choose a topic below to explore important
            mountaineering knowledge.
          </p>
        </div>

        <div className="learn-grid">
          {topics.map((topic) => (
            <button
              key={topic.id}
              className={`learn-card ${
                activeTopic === topic.id ? "active" : ""
              }`}
              onClick={() =>
                setActiveTopic(
                  activeTopic === topic.id ? null : topic.id
                )
              }
              aria-expanded={activeTopic === topic.id}
            >
              <span className="learn-card-icon">{topic.icon}</span>

              <h3>{topic.title}</h3>

              <p>{topic.description}</p>

              <span className="learn-card-link">
                {activeTopic === topic.id
                  ? "Close topic −"
                  : "Explore topic →"}
              </span>
            </button>
          ))}
        </div>

        {selectedTopic && (
          <article className="learn-detail" key={selectedTopic.id}>
            <div className="learn-detail-heading">
              <span>YOUR LEARNING JOURNEY</span>
              <h2>{selectedTopic.title}</h2>
              <p>{selectedTopic.intro}</p>
            </div>

            <div className="learn-detail-grid">
              {selectedTopic.sections.map((section, index) => (
                <div className="learn-detail-item" key={section.heading}>
                  <span className="learn-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{section.heading}</h3>
                    <p>{section.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        )}
      </section>
    </div>
  );
}

export default Learn;
