import "./App.css";

const coaches = [
  {
    name: "Mark Messier",
    relationship: "GSC Coach",
    title: "14U Bantam A1",
    description:
      "A legendary NHL leader who brought championship experience behind the GSC bench.",
    highlights: [
      "Six-time Stanley Cup champion",
      "Hockey Hall of Fame inductee",
      "Former New York Rangers captain",
    ],
  },
  {
    name: "Chris Drury",
    relationship: "GSC Coach",
    title: "10U Squirt A",
    description:
      "A Stanley Cup champion and former NHL captain who coached within GSC's youth program.",
    highlights: [
      "2001 Stanley Cup champion",
      "Former New York Rangers captain",
      "NHL Calder Trophy winner",
    ],
  },
];

const alumni = [
  {
    name: "Cam Atkinson",
    relationship: "GSC Alumni",
    title: "NHL Forward",
    description:
      "A former GSC player who went on to a 13-season NHL career with Columbus, Philadelphia, and Tampa Bay.",
    highlights: [
      "809 NHL games",
      "Two-time NHL All-Star",
      "Retired as a Columbus Blue Jacket",
    ],
  },
  {
    name: "John Hayden",
    relationship: "Former GSC Wing",
    title: "Professional Forward",
    description:
      "A GSC youth hockey alumnus who advanced through Yale and into a professional career in the NHL and AHL.",
    highlights: [
      "NHL and AHL experience",
      "Former Yale captain",
      "Represented the United States internationally",
    ],
  },
  {
    name: "Phil Kemp",
    relationship: "GSC Alumni",
    title: "Professional Defenseman",
    description:
      "A Greenwich-developed defenseman who played at Yale, represented Team USA, and reached the NHL.",
    highlights: [
      "NHL debut in 2024",
      "2019 World Junior silver medalist",
      "Yale men's hockey captain",
    ],
  },
  {
    name: "Bray Ketchum",
    relationship: "GSC Alumni",
    title: "Professional Forward",
    description:
      "A former GSC player who competed professionally and became a championship winner in women's hockey.",
    highlights: [
      "Clarkson Cup champion",
      "Isobel Cup champion",
      "Former Yale standout",
    ],
  },
  {
    name: "Helen Resor",
    relationship: "GSC Alumni",
    title: "U.S. Olympian",
    description:
      "A GSC alumna who represented the United States on the world's biggest stage and earned an Olympic medal.",
    highlights: [
      "2006 Olympic bronze medalist",
      "Two-time IIHF World Champion",
      "Former Yale defenseman",
    ],
  },
];

function SectionHeading({ title, copy, nowrap }) {
  return (
    <div
      className={
        nowrap ? "section-heading section-heading--tight" : "section-heading"
      }
    >
      <div>
        <h2 className={nowrap ? "section-heading__title--nowrap" : undefined}>
          {title}
        </h2>
      </div>

      {copy && <p>{copy}</p>}
    </div>
  );
}

function PeopleList({ people, ariaLabel }) {
  return (
    <div className="people-list" aria-label={ariaLabel}>
      <div className="people-list__header" aria-hidden="true">
        <span>GSC Connection</span>
        <span>Background</span>
        <span>Career Highlights</span>
      </div>

      {people.map((person, index) => (
        <article className="person-row" key={person.name}>
          <div className="person-row__identity">
            <span className="person-row__number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <span className="person-row__relationship">
                {person.relationship}
              </span>

              <h3>{person.name}</h3>

              <p className="person-row__title">
                {person.title}
              </p>
            </div>
          </div>

          <p className="person-row__description">
            {person.description}
          </p>

          <ul className="person-row__highlights">
            {person.highlights.map((highlight) => (
              <li key={highlight}>
                <span aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <img
          className="hero__background-mark"
          src={`${import.meta.env.BASE_URL}gsc-logo.png`}
          alt=""
          aria-hidden="true"
        />

        <div className="hero__content page-container">
          <h1>
            GSC <span>Alumni</span>
          </h1>

          <p>
            Players, coaches, Olympians, and professionals
            whose connection to GSC has become part of the
            club's hockey tradition.
          </p>
        </div>
      </section>

      <section className="intro-section page-container">
        <div
          className="intro-section__accent"
          aria-hidden="true"
        >
          <span />
          <span />
        </div>

        <div className="intro-section__copy">
          <h2>
            A tradition shaped on and beyond Cardinal Road.
          </h2>
        </div>
      </section>

      <section className="people-section people-section--coaches">
        <div className="page-container">
          <SectionHeading
            title="Notable former GSC coaches"
            nowrap
          />

          <PeopleList
            people={coaches}
            ariaLabel="Notable former GSC coaches"
          />
        </div>
      </section>

      <section className="people-section people-section--alumni">
        <div className="page-container">
          <SectionHeading title="Players and alumni" />

          <PeopleList
            people={alumni}
            ariaLabel="GSC players and alumni"
          />
        </div>
      </section>
    </main>
  );
}

export default App;