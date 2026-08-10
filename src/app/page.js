import { caseStudies, faqs } from "../lib/content"
import CinematicScroll from "../components/CinematicScroll"

export default function HomePage() {
  return (
    <CinematicScroll>
      <div className="cursor" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />

      {/* NAV */}
      <nav className="nav">
        <a href="#" className="nav-brand">The Pauli Effect</a>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#inner-circle">Inner Circle</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="label" data-hero-reveal style={{ marginBottom: "1.5rem" }}>Proudly Artificial</p>
          <h1 className="hero-title" data-hero-reveal>
            We design systems that outlast the hype.
          </h1>
          <p className="hero-sub" data-hero-reveal>
            A faceless social-purpose studio building AI operating systems for people changing the world.
          </p>
          <a href="#work" className="hero-cta" data-hero-reveal>
            See the work →
          </a>
        </div>
      </section>

      {/* WORK — asymmetric case study grid */}
      <section id="work" className="section">
        <div className="container">
          <p className="label" data-reveal style={{ marginBottom: "3rem" }}>Selected Work</p>
          <div className="work-grid">
            {caseStudies.map((cs) => (
              <a
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="work-card"
                data-reveal
                style={{ gridColumn: `span ${cs.span}` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cs.image} alt={cs.title} className="work-card-image" />
                <div className="work-card-overlay">
                  <h3 className="work-card-title">{cs.title}</h3>
                  <p className="work-card-tag">{cs.tag}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / MANIFESTO */}
      <section id="about" className="section" style={{ background: "var(--canvas-alt)" }}>
        <div className="manifesto">
          <h2 className="manifesto-title" data-reveal>
            We are not an agency.<br />We are a movement.
          </h2>
          <p className="manifesto-body" data-reveal>
            The Pauli Effect is a faceless social-purpose company. We build AI operating
            systems that go beyond dashboards and buttons. We choose our partners. There
            are zero fees. If you&apos;re selected, you get the full system — mascot, agent,
            code, knowledge. We monetize through content, not your budget.
          </p>
          <a href="#inner-circle" className="hero-cta" data-reveal style={{ justifyContent: "center", display: "inline-flex", marginTop: "2.5rem" }}>
            Apply for the Inner Circle →
          </a>
        </div>
      </section>

      {/* INNER CIRCLE */}
      <section id="inner-circle" className="section">
        <div className="container" style={{ maxWidth: "42rem" }}>
          <p className="label" data-reveal>We Send Invitations</p>
          <h2 className="h1" data-reveal style={{ fontSize: "var(--h2-size)", marginTop: "1rem", marginBottom: "2rem" }}>
            The Inner Circle
          </h2>
          <p className="body-lg" data-reveal style={{ marginBottom: "3rem" }}>
            We don&apos;t take applications. We send invitations. But if you think you belong
            here, tell us why. We review every submission personally.
          </p>
          <form data-reveal style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} action="/api/inner-circle" method="post">
            <input type="text" name="name" placeholder="Your name" required style={{ borderBottom: "1px solid var(--line)", padding: "0.75rem 0", fontSize: "1rem" }} />
            <input type="text" name="org" placeholder="Your organization" style={{ borderBottom: "1px solid var(--line)", padding: "0.75rem 0", fontSize: "1rem" }} />
            <input type="text" name="project" placeholder="What you're building" style={{ borderBottom: "1px solid var(--line)", padding: "0.75rem 0", fontSize: "1rem" }} />
            <textarea name="why" placeholder="Why Pauli should care" rows={4} style={{ borderBottom: "1px solid var(--line)", padding: "0.75rem 0", fontSize: "1rem", resize: "vertical" }} />
            <input type="text" name="link" placeholder="Portfolio / website / social" style={{ borderBottom: "1px solid var(--line)", padding: "0.75rem 0", fontSize: "1rem" }} />
            <button type="submit" className="hero-cta" style={{ border: "none", justifyContent: "center", display: "inline-flex", marginTop: "1rem" }}>
              Submit for review →
            </button>
          </form>
          <p className="label" data-reveal style={{ marginTop: "2rem", textAlign: "center" }}>
            If there&apos;s a fit, you&apos;ll hear from us. If not, our blog is always free.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section" style={{ background: "var(--canvas-alt)" }}>
        <div className="container">
          <p className="label" data-reveal style={{ marginBottom: "3rem" }}>Questions</p>
          <div className="faq-list">
            {faqs.map((item) => (
              <div className="faq-item" key={item.q} data-reveal>
                <p className="faq-q">{item.q}</p>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <p className="footer-brand">The Pauli Effect</p>
          <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", marginTop: "0.5rem" }}>
            Proudly Artificial. Built in Seattle.
          </p>
        </div>
        <ul className="footer-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#inner-circle">Inner Circle</a></li>
          <li><a href="mailto:hello@thepaulieffect.com">Contact</a></li>
        </ul>
      </footer>
    </CinematicScroll>
  )
}
