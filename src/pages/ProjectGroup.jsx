import { ProjectCard } from "./ProjectCard";

export function ProjectGroup({ label, projects }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <div
      className="project-title"
      >
        <span>
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
