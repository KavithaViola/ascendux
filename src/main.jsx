import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";

const services = [
  {
    icon: "bi-code-slash",
    title: "Web Development",
    text: "Fast, responsive and conversion-focused web experiences built with modern technologies and scalable architecture."
  },
  {
    icon: "bi-phone",
    title: "Mobile Apps",
    text: "Intuitive iOS and Android products that help your customers stay seamlessly connected to your business."
  },
  {
    icon: "bi-cpu",
    title: "AI & Automation",
    text: "Practical AI workflows and intelligent automation solutions that eliminate repetitive work and boost productivity."
  },
  {
    icon: "bi-bar-chart-line",
    title: "Data & Analytics",
    text: "Turn raw business data into actionable dashboards, predictive insights and clear strategic decisions."
  }
];

// const stats = [
//   ["25+", "Projects delivered"],
//   ["15+", "Technology solutions"],
//   ["98%", "Client satisfaction"],
//   ["24/7", "Technical support"]
// ];

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("ascendux_theme");
    if (savedTheme) return savedTheme;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  });

  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("ascendux_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setToastMessage("Thank you! Your message has been sent. We'll be in touch soon.");
    setTimeout(() => {
      setToastMessage("");
    }, 4500);
  };

  const isDark = theme === "dark";

  return (
    <div>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="custom-toast" role="alert">
          <i className="bi bi-check-circle-fill text-success fs-5"></i>
          <div>{toastMessage}</div>
          <button
            type="button"
            className="btn-close ms-2 btn-close-white"
            onClick={() => setToastMessage("")}
            aria-label="Close"
          ></button>
        </div>
      )}

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top nav-glass" aria-label="Main navigation">
        <div className="container py-2">
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#home">
            <img
              src={isDark ? "images/logo-dark-theme.png" : "images/logo-light-theme.png"}
              alt="Ascendux"
              width="175"
              className="img-fluid brand-logo-img"
            />
          </a>

          <div className="d-flex gap-2 align-items-center">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn d-lg-none"
              title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
              aria-label={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
            >
              <i className={isDark ? "bi bi-sun-fill" : "bi bi-moon-stars-fill"}></i>
            </button>

            <button
              className="navbar-toggler border-0 shadow-none text-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list fs-2"></i>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              {["Home", "Services", "About", "Process", "Contact"].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link px-lg-3" href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-lg-2">
                <a className="btn btn-primary rounded-pill px-4" href="#contact">
                  Let's Talk <i className="bi bi-arrow-up-right ms-1"></i>
                </a>
              </li>
              {/* Desktop Theme Toggle */}
              <li className="nav-item ms-lg-2 d-none d-lg-block">
                <button
                  onClick={toggleTheme}
                  className="theme-toggle-btn"
                  title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
                  aria-label={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
                >
                  <i className={isDark ? "bi bi-sun-fill" : "bi bi-moon-stars-fill"}></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-grid" aria-hidden="true"></div>
          <div className="container position-relative">
            <div className="row align-items-center min-vh-100 pt-5">
              <div className="col-lg-7 py-5">
                <div className="eyebrow mb-4">
                  <span></span> TECHNOLOGY. STRATEGY. GROWTH.
                </div>
                <h1 className="display-1 fw-bold lh-1 mb-4">
                  Build the <span className="gradient-text">future</span> your business deserves.
                </h1>
                <p className="lead hero-copy mb-5">
                  Ascendux helps ambitious companies turn bold ideas into scalable digital products,
                  smarter systems and lasting growth.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a href="#contact" className="btn btn-primary btn-lg rounded-pill px-4">
                    Start a Project <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                  <a href="#services" className="btn btn-outline-custom btn-lg rounded-pill px-4">
                    Explore Services
                  </a>
                </div>
                <div className="d-flex flex-wrap gap-4 mt-5 small text-secondary">
                  <span>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>Modern technology
                  </span>
                  <span>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>Business-first thinking
                  </span>
                  <span>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>Long-term partnership
                  </span>
                </div>
              </div>

              <div className="col-lg-5 d-none d-lg-block">
                <div className="hero-orbit" aria-hidden="true">
                  <div className="orbit orbit-one"></div>
                  <div className="orbit orbit-two"></div>
                  <div className="orbit orbit-three"></div>
                  <div className="core-card">
                    <div className="core-icon">
                      <i className="bi bi-lightning-charge-fill"></i>
                    </div>
                    <div className="small text-uppercase text-secondary fw-semibold">Ascendux</div>
                    <div className="h4 fw-bold mb-2">Digital, accelerated.</div>
                    <p className="text-secondary small mb-0">Ideas → Products → Growth</p>
                  </div>
                  <div className="floating-card card-one">
                    <i className="bi bi-cloud-arrow-up-fill"></i>
                    <span>Cloud</span>
                  </div>
                  <div className="floating-card card-two">
                    <i className="bi bi-robot"></i>
                    <span>AI</span>
                  </div>
                  <div className="floating-card card-three">
                    <i className="bi bi-code-square"></i>
                    <span>Build</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        {/* <section className="stats-strip" aria-label="Key Statistics">
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
        </section> */}

        {/* Services Section */}
        <section id="services" className="section-padding">
          <div className="container">
            <div className="row mb-5 align-items-end">
              <div className="col-lg-7">
                <div className="section-kicker">WHAT WE DO</div>
                <h2 className="display-5 fw-bold mt-2">
                  Technology that solves <span className="gradient-text">real problems.</span>
                </h2>
              </div>
              <div className="col-lg-5">
                <p className="text-secondary mb-0">
                  From your first product idea to enterprise-scale systems, we combine engineering
                  expertise with a clear understanding of your business goals.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {services.map((service) => (
                <div className="col-md-6" key={service.title}>
                  <div className="service-card h-100">
                    <div className="service-icon">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <h3 className="h5 fw-bold mb-2">{service.title}</h3>
                    <p className="text-secondary mb-0">{service.text}</p>
                    <div className="service-arrow" aria-hidden="true">
                      <i className="bi bi-arrow-up-right"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding about-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="about-visual">
                  <div className="about-window">
                    <div className="window-dots" aria-hidden="true">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="code-lines">
                      <div>
                        <b>01</b> <span>const</span> vision = <em>"Think bigger"</em>;
                      </div>
                      <div>
                        <b>02</b> <span>const</span> product = build(vision);
                      </div>
                      <div>
                        <b>03</b> <span>await</span> product.launch();
                      </div>
                      <div>
                        <b>04</b> <span>return</span> growth;
                      </div>
                    </div>
                    <div className="growth-chart" aria-hidden="true">
                      <div className="bar b1"></div>
                      <div className="bar b2"></div>
                      <div className="bar b3"></div>
                      <div className="bar b4"></div>
                      <div className="bar b5"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-kicker">WHY ASCENDUX</div>
                <h2 className="display-6 fw-bold mt-2 mb-4">
                  We don't just deliver software.{" "}
                  <span className="gradient-text">We build momentum.</span>
                </h2>
                <p className="text-secondary fs-5">
                  We're a startup-minded technology partner focused on speed, clarity and outcomes.
                  Our teams work closely with yours, keeping communication simple and execution sharp.
                </p>
                <div className="mt-4">
                  {[
                    ["01", "Outcome-focused", "Every technical decision connects directly back to a business goal."],
                    ["02", "Built to scale", "Architecture designed for your next stage of growth, not just today."],
                    ["03", "Human partnership", "Clear communication, agile delivery and genuine collaboration."]
                  ].map(([n, t, d]) => (
                    <div className="about-point" key={n}>
                      <span>{n}</span>
                      <div>
                        <h3 className="h6 fw-bold mb-1">{t}</h3>
                        <p className="text-secondary mb-0">{d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="section-padding">
          <div className="container">
            <div className="text-center mx-auto process-heading">
              <div className="section-kicker">OUR PROCESS</div>
              <h2 className="display-6 fw-bold mt-2">
                Simple process. <span className="gradient-text">Serious results.</span>
              </h2>
              <p className="text-secondary">A collaborative path from idea to impact.</p>
            </div>
            <div className="row g-4 mt-4">
              {[
                ["01", "Discover", "We understand your users, goals, constraints and high-impact opportunities."],
                ["02", "Design", "We shape the experience, architecture and roadmap before writing code."],
                ["03", "Build", "Our engineers turn the plan into a robust, secure and production-ready product."],
                ["04", "Grow", "We continuously measure, improve and scale alongside your business."]
              ].map(([n, t, d]) => (
                <div className="col-md-6 col-lg-3" key={n}>
                  <div className="process-card h-100">
                    <span className="process-number">{n}</span>
                    <h3 className="h5 fw-bold mb-2">{t}</h3>
                    <p className="text-secondary mb-0">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section section-padding">
          <div className="container">
            <div className="contact-card">
              <div className="row align-items-center g-4">
                <div className="col-lg-7">
                  <div className="section-kicker">LET'S BUILD</div>
                  <h2 className="display-5 fw-bold mt-2">
                    Have an idea worth <span className="gradient-text">ascending?</span>
                  </h2>
                  <p className="text-secondary fs-5 mb-0">
                    Tell us what you're building. We'll help you find the clearest path from idea to impact.
                  </p>
                </div>
                <div className="col-lg-5">
                  <form onSubmit={handleContactSubmit}>
                    <div className="mb-3">
                      <label htmlFor="contactName" className="visually-hidden">Your Name</label>
                      <input
                        id="contactName"
                        required
                        className="form-control form-control-lg"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="contactEmail" className="visually-hidden">Work Email</label>
                      <input
                        id="contactEmail"
                        required
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Work email"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="contactMsg" className="visually-hidden">Project Details</label>
                      <textarea
                        id="contactMsg"
                        required
                        className="form-control form-control-lg"
                        rows="3"
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg rounded-pill w-100">
                      Send Enquiry <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-5">
              <a className="navbar-brand fw-bold d-inline-flex align-items-center mb-3" href="#home">
                <img
                  src={isDark ? "images/logo-dark-theme.png" : "images/logo-light-theme.png"}
                  alt="Ascendux"
                  width="175"
                  className="img-fluid brand-logo-img"
                />
              </a>
              <p className="text-secondary mb-0">
                Modern technology solutions and scalable digital engineering for ambitious businesses.
              </p>
            </div>
            <div className="col-6 col-lg-2">
              <h3 className="h6 fw-bold mb-3">Explore</h3>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#process">Process</a>
            </div>
            <div className="col-6 col-lg-2">
              <h3 className="h6 fw-bold mb-3">Connect</h3>
              <a href="#contact">Contact</a>
              <a href="mailto:hello@ascendux.com">Email</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div className="col-lg-3">
              <h3 className="h6 fw-bold mb-3">Start a conversation</h3>
              <p className="text-secondary mb-3">hello@ascendux.com</p>

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
