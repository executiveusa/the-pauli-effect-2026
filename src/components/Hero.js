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
            <a id={code.toLowerCase()} key={code} href={`#${code.toLowerCase()}`}>
              {code}
            </a>
          ))}
        </nav>
      </header>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="kicker" data-hero-reveal>Proudly Artificial</p>
          <h1 id="hero-title" data-hero-reveal>The Pauli Effect</h1>
          <p className="hero-line" data-hero-reveal>
            Buy the mascot, the code, the data path, and the agent system once.
          </p>
          <p className="hero-support" data-hero-reveal>
            Pauli helps social-purpose teams turn mascot IP into useful AI
            infrastructure without hiding the keys.
          </p>
          <div className="hero-actions" aria-label="Primary actions" data-hero-reveal>
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

        <div className="pauli-stage" aria-label="Pauli mascot artwork" data-parallax="0.08">
          <div className="art-card" data-hero-image>
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
