import Image from "next/image"
import { languageCodes } from "../lib/copy"

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="rain" aria-hidden="true" />
      <header className="site-nav" aria-label="Primary">
        <a className="brand-mark" href="#top" aria-label="The Pauli Effect home">
          Corleone
        </a>
        <nav className="language-toggle" aria-label="Language options">
          {languageCodes.map((code) => (
            <a key={code} href={`#${code.toLowerCase()}`}>
              {code}
            </a>
          ))}
        </nav>
      </header>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">Proudly Artificial</p>
          <h1 id="hero-title">The Pauli Effect</h1>
          <p className="hero-line">
            Buy the mascot, the code, the data path, and the agent system once.
          </p>
          <p className="hero-support">
            Pauli helps social-purpose teams turn mascot IP into useful AI
            infrastructure without hiding the keys.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#survey">
              See your route
            </a>
            <a className="button ghost" href="#proof">
              See NWKids proof
            </a>
            <a className="button quiet" href="mailto:hello@thepaulieffect.com">
              Book a 15-min call
            </a>
          </div>
        </div>

        <div className="pauli-stage" aria-label="Pauli mascot artwork">
          <div className="art-card">
            <Image
              src="/assets/pauli/pauli-reference-primary.webp"
              alt="Pauli, the black and white mascot holding a phone"
              width={900}
              height={1300}
              priority
              sizes="(max-width: 768px) 86vw, 42vw"
            />
          </div>
          <div className="spec-strip" aria-hidden="true">
            <span>Owned mascot</span>
            <span>Agent scout</span>
            <span>Human approval</span>
          </div>
        </div>
      </div>
    </section>
  )
}
