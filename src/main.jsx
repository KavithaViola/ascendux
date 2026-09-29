import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";

const services = [
  {
    icon: "bi-code-slash",
    title: "Web Development",
    text: "Fast, responsive and conversion-focused web experiences built with modern technologies."
  },
  {
    icon: "bi-phone",
    title: "Mobile Apps",
    text: "Intuitive mobile products that help your customers stay connected to your business."
  },
  {
    icon: "bi-cloud-check",
    title: "Cloud & DevOps",
    text: "Scalable cloud infrastructure, automation and reliable deployment pipelines."
  },
  {
    icon: "bi-cpu",
    title: "AI & Automation",
    text: "Practical AI solutions and workflow automation that reduce repetitive work."
  },
  {
    icon: "bi-bar-chart-line",
    title: "Data & Analytics",
    text: "Turn business data into clear dashboards, insights and measurable decisions."
  },
  {
    icon: "bi-shield-check",
    title: "Cybersecurity",
    text: "Security-minded engineering that protects your applications, systems and users."
  }
];

const stats = [
  ["25+", "Projects delivered"],
  ["15+", "Technology solutions"],
  ["98%", "Client satisfaction"],
  ["24/7", "Technical support"]
];

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top nav-glass">
        <div className="container py-2">
          <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#home">
            <span className="brand-mark">A</span>
            <span>ascend<span className="brand-accent">ux</span></span>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              {["Home", "Services", "About", "Process", "Contact"].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link px-lg-3" href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
              <li className="nav-item ms-lg-2">
                <a className="btn btn-primary rounded-pill px-4" href="#contact">Let's Talk <i className="bi bi-arrow-up-right ms-1"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-grid"></div>
          <div className="container position-relative">
            <div className="row align-items-center min-vh-100 pt-5">
              <div className="col-lg-7 py-5">
                <div className="eyebrow mb-4"><span></span> Technology. Strategy. Growth.</div>
                <h1 className="display-1 fw-bold lh-1 mb-4">
                  Build the <span className="gradient-text">future</span> your business deserves.
                </h1>
                <p className="lead hero-copy mb-5">
                  Ascendux helps ambitious companies turn bold ideas into scalable digital products, smarter systems and lasting growth.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a href="#contact" className="btn btn-primary btn-lg rounded-pill px-4">Start a Project <i className="bi bi-arrow-right ms-2"></i></a>
                  <a href="#services" className="btn btn-outline-light btn-lg rounded-pill px-4">Explore Services</a>
                </div>
                <div className="d-flex flex-wrap gap-4 mt-5 small text-secondary">
                  <span><i className="bi bi-check-circle-fill text-primary me-2"></i>Modern technology</span>
                  <span><i className="bi bi-check-circle-fill text-primary me-2"></i>Business-first thinking</span>
                  <span><i className="bi bi-check-circle-fill text-primary me-2"></i>Long-term partnership</span>
                </div>
              </div>

              <div className="col-lg-5 d-none d-lg-block">
                <div className="hero-orbit">
                  <div className="orbit orbit-one"></div>
                  <div className="orbit orbit-two"></div>
                  <div className="orbit orbit-three"></div>
                  <div className="core-card">
                    <div className="core-icon"><i className="bi bi-lightning-charge-fill"></i></div>
                    <div className="small text-uppercase text-secondary fw-semibold">Ascendux</div>
                    <div className="h3 fw-bold mb-2">Digital, accelerated.</div>
                    <p className="text-secondary mb-0">Ideas → Products → Growth</p>
                  </div>
                  <div className="floating-card card-one"><i className="bi bi-cloud-arrow-up-fill"></i><span>Cloud</span></div>
                  <div className="floating-card card-two"><i className="bi bi-robot"></i><span>AI</span></div>
                  <div className="floating-card card-three"><i className="bi bi-code-square"></i><span>Build</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="container">
            <div className="row g-0">
              {stats.map(([number, label]) => (
                <div className="col-6 col-lg-3 stat-item" key={label}>
                  <div className="stat-number">{number}</div>
                  <div className="text-secondary small">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-padding">
          <div className="container">
            <div className="row mb-5 align-items-end">
              <div className="col-lg-7">
                <div className="section-kicker">WHAT WE DO</div>
                <h2 className="display-5 fw-bold mt-2">Technology that solves <span className="gradient-text">real problems.</span></h2>
              </div>
              <div className="col-lg-5">
                <p className="text-secondary mb-0">From your first product idea to enterprise-scale systems, we combine engineering expertise with a clear understanding of your business.</p>
              </div>
            </div>

            <div className="row g-4">
              {services.map((service) => (
                <div className="col-md-6 col-lg-4" key={service.title}>
                  <div className="service-card h-100">
                    <div className="service-icon"><i className={`bi ${service.icon}`}></i></div>
                    <h3 className="h5 fw-bold">{service.title}</h3>
                    <p className="text-secondary mb-0">{service.text}</p>
                    <div className="service-arrow"><i className="bi bi-arrow-up-right"></i></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-padding about-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="about-visual">
                  <div className="about-window">
                    <div className="window-dots"><span></span><span></span><span></span></div>
                    <div className="code-lines">
                      <div><b>01</b> <span>const</span> vision = <em>"Think bigger"</em>;</div>
                      <div><b>02</b> <span>const</span> product = build(vision);</div>
                      <div><b>03</b> <span>await</span> product.launch();</div>
                      <div><b>04</b> <span>return</span> growth;</div>
                    </div>
                    <div className="growth-chart">
                      <div className="bar b1"></div><div className="bar b2"></div><div className="bar b3"></div><div className="bar b4"></div><div className="bar b5"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-kicker">WHY ASCENDUX</div>
                <h2 className="display-6 fw-bold mt-2 mb-4">We don't just deliver software. <span className="gradient-text">We build momentum.</span></h2>
                <p className="text-secondary fs-5">We're a startup-minded technology partner focused on speed, clarity and outcomes. Our teams work closely with yours, keeping communication simple and execution sharp.</p>
                <div className="mt-4">
                  {[
                    ["01", "Outcome-focused", "Every technical decision connects back to a business goal."],
                    ["02", "Built to scale", "Architecture designed for your next stage, not just today."],
                    ["03", "Human partnership", "Clear communication and genuine collaboration at every step."]
                  ].map(([n, t, d]) => (
                    <div className="about-point" key={n}>
                      <span>{n}</span><div><h3 className="h6 fw-bold mb-1">{t}</h3><p className="text-secondary mb-0">{d}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section-padding">
          <div className="container">
            <div className="text-center mx-auto process-heading">
              <div className="section-kicker">OUR PROCESS</div>
              <h2 className="display-6 fw-bold mt-2">Simple process. <span className="gradient-text">Serious results.</span></h2>
              <p className="text-secondary">A collaborative path from idea to impact.</p>
            </div>
            <div className="row g-4 mt-4">
              {[
                ["01", "Discover", "We understand your users, goals, constraints and opportunities."],
                ["02", "Design", "We shape the experience, architecture and roadmap before building."],
                ["03", "Build", "Our engineers turn the plan into a robust, production-ready product."],
                ["04", "Grow", "We measure, improve and scale with you after launch."]
              ].map(([n, t, d]) => (
                <div className="col-md-6 col-lg-3" key={n}>
                  <div className="process-card">
                    <span className="process-number">{n}</span>
                    <h3 className="h5 fw-bold">{t}</h3>
                    <p className="text-secondary mb-0">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-padding">
          <div className="container">
            <div className="contact-card">
              <div className="row align-items-center g-4">
                <div className="col-lg-7">
                  <div className="section-kicker">LET'S BUILD</div>
                  <h2 className="display-5 fw-bold mt-2">Have an idea worth <span className="gradient-text">ascending?</span></h2>
                  <p className="text-secondary fs-5 mb-0">Tell us what you're building. We'll help you find the clearest path from idea to impact.</p>
                </div>
                <div className="col-lg-5">
                  <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch soon."); }}>
                    <div className="mb-3"><input required className="form-control form-control-lg" placeholder="Your name" /></div>
                    <div className="mb-3"><input required type="email" className="form-control form-control-lg" placeholder="Work email" /></div>
                    <div className="mb-3"><textarea required className="form-control form-control-lg" rows="3" placeholder="Tell us about your project"></textarea></div>
                    <button className="btn btn-primary btn-lg rounded-pill w-100">Send Enquiry <i className="bi bi-arrow-right ms-2"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-5">
              <a className="navbar-brand fw-bold d-inline-flex align-items-center gap-2 mb-3" href="#home">
                <span className="brand-mark">A</span><span>ascend<span className="brand-accent">ux</span></span>
              </a>
              <p className="text-secondary mb-0">Modern technology solutions for ambitious businesses.</p>
            </div>
            <div className="col-6 col-lg-2">
              <h3 className="h6 fw-bold">Explore</h3>
              <a href="#services">Services</a><a href="#about">About</a><a href="#process">Process</a>
            </div>
            <div className="col-6 col-lg-2">
              <h3 className="h6 fw-bold">Connect</h3>
              <a href="#contact">Contact</a><a href="mailto:hello@ascendux.com">Email</a><a href="#home">LinkedIn</a>
            </div>
            <div className="col-lg-3">
              <h3 className="h6 fw-bold">Start a conversation</h3>
              <p className="text-secondary">hello@ascendux.com</p>
            </div>
          </div>
          <hr className="border-secondary opacity-25 my-4" />
          <div className="d-flex flex-column flex-md-row justify-content-between gap-2 small text-secondary">
            <span>© 2026 Ascendux. All rights reserved.</span>
            <span>Built for what's next.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
