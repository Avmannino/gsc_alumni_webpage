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
    college: "Boston College",
    years: "96-'98",
    highlights: [
      "809 NHL games",
      "Two-time NHL All-Star",
      "NHL: Columbus Blue Jackets, Philadelphia Flyers, Tampa Bay Lightning",
    ],
  },
  { name: "Tommy Atkinson", college: "Boston College", years: "96-'98" },
  { name: "Peter Boldt", college: "Dartmouth \"C\"", years: "92-'04" },
  { name: "Jen Buckley", college: "Yale", years: "90-'93" },
  { name: "John Burdett", college: "Middlebury", years: "2010's" },
  { name: "Amy Catlin", college: "Dartmouth", years: "93-'96" },
  { name: "Tracy Catlin", college: "Harvard", years: "93-'96" },
  { name: "Dan Cleaves", college: "Middlebury \"C\"", years: "70's" },
  { name: "Gene Cleaves", college: "Middlebury \"C\"", years: "68-'75" },
  { name: "Hank Cleaves", college: "Dartmouth College", years: "GSC Mites", highlights: ["Vernon Vipers (BCHL)"] },
  {
    name: "Cooper Cleaves",
    college: "Dartmouth College",
    years: "GSC Mites",
    highlights: [
      "Green Bay Gamblers (USHL)",
      "Drafted by Montreal Canadiens, 2026 NHL Draft",
    ],
  },
  { name: "Nina Daughtery", college: "Middlebury", years: "93-'01" },
  { name: "Lacey Farrell", college: "Middlebury", years: "93-'01" },
  { name: "Brett Farson", college: "Amherst", years: "86-'94" },
  { name: "Richie Fuld", college: "Middlebury", years: "91-'99" },
  { name: "Chrissie Fuld", college: "Middlebury", years: "93-'96" },
  { name: "Bobby Gillon", college: "Trinity", years: "86-'93" },
  {
    name: "John Hayden",
    college: "Yale \"C\"",
    years: "98-'99",
    highlights: [
      "Former Yale team captain",
      "NHL: Chicago Blackhawks, Buffalo Sabres, New Jersey Devils, Arizona Coyotes, Seattle Kraken",
      "Represented the United States internationally",
    ],
  },
  { name: "Kathy Jones", college: "Yale", years: "80's" },
  { name: "Leila Jones", college: "Yale", years: "80's" },
  {
    name: "Phil Kemp",
    college: "Yale \"C\"",
    years: "2000's",
    highlights: [
      "NHL debut in 2024",
      "2019 World Junior silver medalist",
      "Yale men's hockey captain",
    ],
  },
  { name: "Ben Ketchum", college: "Sacred Heart", years: "95-'02" },
  {
    name: "Bray Ketchum",
    college: "Yale",
    years: "96-'04",
    highlights: [
      "Clarkson Cup champion",
      "Isobel Cup champion",
      "Former Yale standout",
    ],
  },
  { name: "Phil Lauderdale", college: "Ohio State", years: "90's" },
  { name: "Christian LeSueur", college: "Dartmouth", years: "2000's" },
  { name: "Luke Drury", college: "Colby College", years: "GSC Mites-Bantam" },
  { name: "Sally Maloney", college: "Harvard", years: "93-'96" },
  { name: "Katie O'Sullivan", college: "Yale \"C\"", years: "80's" },
  { name: "Maggie O'Sullivan", college: "Bowdoin", years: "80's" },
  {
    name: "Helen Resor",
    college: "Yale",
    years: "01-'02",
    highlights: [
      "2006 Olympic bronze medalist",
      "Two-time IIHF World Champion",
      "Former Yale defenseman",
    ],
  },
  { name: "Jane Resor", college: "Yale", years: "90's" },
  { name: "Beanie Richter", college: "Yale", years: "2010's" },
  { name: "Wiley Sherman", college: "Harvard", years: "2000's" },
  { name: "Spencer Sodokoff", college: "Skidmore College", years: "GSC Mites-Bantam" },
  { name: "Nick Trepp", college: "Colby College", years: "GSC Mites-Bantam" },
  { name: "Pamela Van Reesema", college: "Harvard", years: "93-'96" },
  { name: "Gray Weicker", college: "St. Lawrence", years: "70's" },
  { name: "Max Wernert", college: "Plymouth State", years: "88-'96" },
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
        <span>Coach</span>
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

function AlumniRoster({ alumni, ariaLabel }) {
  return (
    <div className="alumni-roster-frame">
      <div className="alumni-roster" aria-label={ariaLabel}>
        <div className="alumni-roster__header" aria-hidden="true">
          <span>Name</span>
          <span>College</span>
          <span>GSC Tenure/Team</span>
        </div>

        {alumni.map((person) => (
          <div className="alumni-roster__row" key={person.name}>
            <span className="alumni-roster__name">{person.name}</span>
            <span className="alumni-roster__college">{person.college}</span>
            <span className="alumni-roster__years">{person.years}</span>

            {person.highlights && (
              <ul className="alumni-roster__highlights">
                {person.highlights.map((highlight) => (
                  <li key={highlight}>
                    <span aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
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
            <SectionHeading title="Alumni Players" />

            <AlumniRoster
              alumni={alumni}
              ariaLabel="GSC alumni roster"
            />
          </div>
        </section>

        <section className="people-section people-section--coaches">
          <div className="page-container">
            <SectionHeading
              title="Notable Current and Former GSC Coaches"
              nowrap
            />

            <PeopleList
              people={coaches}
              ariaLabel="Notable current and former GSC coaches"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;