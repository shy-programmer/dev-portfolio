export function ProjectCard({ title, url, tags, repo, delay }) {
  return (
    <div className="card fade-in" style={{ animationDelay: `${delay}s` }}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="card-arrow"
      >
        ↗
      </a>
      <div className="card-title">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--green)",
            textDecoration: "none",
            display: "block",
            marginTop: "0.35rem",
          }}
        >
          View Repo →
        </a>
      )}
      <div className="card-tags">
        {tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
