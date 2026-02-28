import { ProjectCard } from "./ProjectCard";

export function ProjectGroup({ label, projects }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
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
          // {label}
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}
