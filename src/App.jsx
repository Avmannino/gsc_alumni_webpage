import "./App.css";
import Footer from "./Footer.jsx";

const coaches = [
  {
    name: "Mark Messier",
    title: "NHL Hall of Famer",
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
    title: "Former NHL Captain",
    description:
      "A Stanley Cup champion and former NHL captain who coached within GSC's youth program.",
    highlights: [
      "2001 Stanley Cup champion",
      "Former New York Rangers captain",
      "NHL Calder Trophy winner",
      "New York Rangers General Manager",
    ],
  },
  {
    name: "Mike Richter",
    title: "Stanley Cup Champion Goaltender",
    description:
      "A decorated NHL goaltender whose Stanley Cup-winning tenure with the New York Rangers made him one of the position's most recognized names.",
    highlights: [
      "1994 Stanley Cup champion",
      "1996 World Cup of Hockey champion",
      "U.S. Hockey Hall of Fame inductee",
    ],
  },
  {
    name: "Jack Duffy",
    title: "AHCA All-American Defenseman",
    description:
      "A Yale team captain and All-American defenseman who went on to play professional hockey before joining the GSC coaching staff.",
    highlights: [
      "AHCA First-Team All-American, 1992–93",
      "Yale Hockey team captain, 1992–93",
      "Drafted by the New York Islanders, 1991",
    ],
  },
  {
    name: "Marc Staal",
    title: "NHL Defenseman",
    description:
      "A longtime NHL defenseman who anchored the New York Rangers blue line for over a decade before joining the GSC coaching staff.",
    highlights: [
      "First-round pick, 2005 NHL Draft (12th overall)",
      "Over 1,000 NHL games played",
      "2014 Eastern Conference champion, New York Rangers",
    ],
  },
  {
    name: "Riley Nash",
    title: "NHL Forward",
    description:
      "A former Cornell University captain who built a long NHL career and reached the Stanley Cup Final before coaching within GSC's program.",
    highlights: [
      "First-round pick, 2007 NHL Draft (21st overall)",
      "2019 Stanley Cup Finalist, Boston Bruins",
      "Former Cornell University captain",
    ],
  },
];

const alumni = [
  {
    name: "Cam Atkinson",
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

      {people.map((person) => (
        <article className="person-row" key={person.name}>
          <div className="person-row__identity">
            <h3>{person.name}</h3>

            <p className="person-row__title">
              {person.title}
            </p>
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
    <>
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

        <section className="people-section people-section--alumni">
          <div className="page-container">
            <SectionHeading title="Players and alumni" />

            <PeopleList
              people={alumni}
              ariaLabel="GSC players and alumni"
            />
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
      </main>

      <Footer />
    </>
  );
}

export default App;