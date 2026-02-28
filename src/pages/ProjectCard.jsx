export function ProjectCard({ title, url, tags, repo, delay }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="card-arrow">↗</div>
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
          className="repo"
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
    </a>
  );
}
