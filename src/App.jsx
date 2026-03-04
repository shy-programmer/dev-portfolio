import { useState, useEffect } from "react";
import { Navbar } from "./pages/Navbar";
import {
  selectedProjects,
  smallerApps,
  apis,
  freecodecamp,
  socials,
} from "./data";
import { ProjectGroup } from "./pages/ProjectGroup";
import { SocialCard } from "./pages/SocialCard";
import { ContactForm } from "./pages/ContactForm";
import "./App.css";

function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 },
    );
    ["home", "projects", "socials"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar active={active} setActive={setActive} />

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-tag fade-in">Available for work</div>
        <h1 className="fade-in">
          Hey there, I'm
          <br />
          <span className="name">Abdulazeez Arowolo</span>
        </h1>
        <p className="hero-alias fade-in">
          Also known as <span>'Shy Programmer'</span> — which says a lot
          already.
        </p>
        <p className="hero-bio fade-in">
          Full-stack developer with great interest in complex system building. I
          work with the MERN stack, TypeScript, and whatever else gets the job
          done.
        </p>
        <div className="hero-ctas fade-in">
          <a
            href="https://github.com/shy-programmer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub ↗
          </a>
          <a
            href="https://docs.google.com/document/d/1awgTd7B3uojMBh9hDUE10G_XSLMRPMZdu6-n2RKhJxM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Resume
          </a>
          <button
            className="btn-outline"
            onClick={() => {
              setActive("projects");
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </button>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <p className="section-label">Work</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">
          A collection of things I've built — from full-stack platforms to quick
          experiments.
        </p>
        <div className="divider" />

        <ProjectGroup label="Selected Projects" projects={selectedProjects} />
        <ProjectGroup label="Smaller Applications" projects={smallerApps} />
        <ProjectGroup label="APIs & Backend Work" projects={apis} />

        {/* FreeCodeCamp */}
        <div style={{ marginBottom: "1rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "var(--green)",
                letterSpacing: "0.1em",
              }}
            >
              // FreeCodeCamp Projects
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "var(--border)",
              }}
            />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {freecodecamp.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--green)";
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                {p.title} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIALS */}
      <section id="socials">
        <p className="section-label">Networking</p>
        <h2 className="section-title">Socials</h2>
        <div className="socials-grid">
          {socials.map((s, i) => (
            <SocialCard key={s.name} {...s} />
          ))}
        </div>
      </section>

      <section id="contact">
      <p className="section-label">Get In Touch</p>
      <h2 className="section-title">Contact Me</h2>
      <p className="section-sub">
        Have a project, opportunity, or just want to say hi? Drop a message and I'll get back to you.
      </p>
      <div className="divider" />
      <ContactForm />
      </section>

      <footer>
        <span>© 2026 Shy Programmer</span>
        <span>
          Built with <span>React</span> · Deployed on <span>Vercel</span>
        </span>
      </footer>
    </>
  );
}

export default App;
