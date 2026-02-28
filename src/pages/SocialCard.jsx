export function SocialCard({ name, handle, url, icon }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-card">
      <div className="social-icon">{icon}</div>
      <div>
        <div className="social-name">{name}</div>
        <div className="social-handle">{handle}</div>
      </div>
      <span style={{ marginLeft: "auto", color: "var(--text-dim)", fontSize: "0.9rem" }}>↗</span>
    </a>
  );
}