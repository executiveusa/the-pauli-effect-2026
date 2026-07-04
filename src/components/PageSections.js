import { faqs, painPoints } from "../lib/copy"

export function PainPoints() {
  return (
    <section className="section pain" aria-labelledby="pain-title">
      <div className="section-head">
        <p className="kicker">Problem</p>
        <h2 id="pain-title">The old stack keeps taking pieces of you.</h2>
        <p>
          Small teams do not need another rented login. They need owned systems
          that can speak, remember, draft, and hand the work back.
        </p>
      </div>
      <div className="pain-grid">
        {painPoints.map((item, index) => (
          <article className="pain-card" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function OldWayPauliWay() {
  const rows = [
    ["Chase five tools", "Ask one owned agent"],
    ["Guess what changed", "Keep a visible trail"],
    ["Patch rented forms", "Ship source and docs"],
    ["Hide the AI", "Say Proudly Artificial"],
  ]

  return (
    <section className="section split" aria-labelledby="way-title">
      <div className="section-head">
        <p className="kicker">Amplification</p>
        <h2 id="way-title">The old way rents access. Pauli leaves the keys.</h2>
      </div>
      <div className="compare-table">
        <div className="compare-head old">Old way</div>
        <div className="compare-head new">Pauli way</div>
        {rows.map(([oldWay, pauliWay]) => (
          <div className="compare-row" key={oldWay}>
            <p>{oldWay}</p>
            <p>{pauliWay}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function MascotFlywheel() {
  const steps = ["AI avatar", "Artist character", "Copyright package", "Merch and media", "Brand gravity"]
  return (
    <section className="section flywheel" aria-labelledby="flywheel-title">
      <div className="section-head">
        <p className="kicker">Solution</p>
        <h2 id="flywheel-title">The mascot becomes the operating system.</h2>
        <p>
          Pauli is not just a face. The character gives your agent a voice, a
          memory trail, and a reason people remember the work.
        </p>
      </div>
      <ol className="flywheel-list">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  )
}

export function CharacterGallery() {
  const characters = [
    ["Pauli", "First public mascot. Scout, steward, and proof engine."],
    ["Yappy", "Gallery stub. Community signal and future host."],
    ["Corleone", "Gallery stub. Wordmark energy and launch mythology."],
    ["The Archivist", "Gallery stub. Memory, receipts, and handoff notes."],
  ]

  return (
    <section id="characters" className="section gallery" aria-labelledby="gallery-title">
      <div className="section-head">
        <p className="kicker">Yappyverse</p>
        <h2 id="gallery-title">A character system, not a mascot dump.</h2>
      </div>
      <div className="gallery-grid">
        {characters.map(([name, text], index) => (
          <article className={index === 0 ? "character-card featured" : "character-card"} key={name}>
            <p>Issue {String(index + 1).padStart(2, "0")}</p>
            <h3>{name}</h3>
            <span>{text}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export function OwnershipExplainer() {
  const items = ["The code", "The mascot direction", "The data path", "The operating docs"]
  return (
    <section className="section ownership" aria-labelledby="ownership-title">
      <div className="section-head">
        <p className="kicker">System</p>
        <h2 id="ownership-title">You buy it once. You own what ships.</h2>
        <p>
          Hosting and care can be added, but the delivery is built around a
          handoff you can inspect.
        </p>
      </div>
      <div className="ownership-list">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}

export function ProofSection() {
  return (
    <section id="proof" className="section proof" aria-labelledby="proof-title">
      <div className="proof-panel">
        <p className="kicker">Portfolio proof</p>
        <h2 id="proof-title">NWKids is framed as proof, not a fake case study.</h2>
        <p>
          The first proof slot is reserved for the NWKids build. The page
          states what is live, what is staged, and where human approval enters.
        </p>
        <a className="button ghost" href="#survey">Route your own build</a>
      </div>
    </section>
  )
}

export function FAQ() {
  return (
    <section className="section faq" aria-labelledby="faq-title">
      <div className="section-head">
        <p className="kicker">Skeptic desk</p>
        <h2 id="faq-title">Questions Pauli should answer plainly.</h2>
      </div>
      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function InsiderGate() {
  return (
    <section className="section insider" aria-labelledby="insider-title">
      <p className="kicker">Insider Club</p>
      <h2 id="insider-title">Get the build notes before the mascot gets loud.</h2>
      <p>
        Early members get ownership updates, grant-scout notes, character drops,
        and behind-the-scenes system maps.
      </p>
      <form className="insider-form" action="mailto:hello@thepaulieffect.com" method="post">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required />
        <button className="button primary" type="submit">Request access</button>
      </form>
    </section>
  )
}

export function BlogTeaser() {
  return (
    <section className="section blog" aria-labelledby="blog-title">
      <div>
        <p className="kicker">Free blog teaser</p>
        <h2 id="blog-title">The first notes will teach ownership in public.</h2>
      </div>
      <article>
        <h3>Why Proudly Artificial beats fake-human AI</h3>
        <p>
          A short launch essay on honest agents, authored mascots, and why the
          small team should keep the map.
        </p>
      </article>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <a href="#top">The Pauli Effect</a>
      <p>Proudly Artificial. Built in Seattle. Serving Washington and Oregon.</p>
      <p>Social-purpose studio language only. Legal status can be updated when confirmed.</p>
    </footer>
  )
}
