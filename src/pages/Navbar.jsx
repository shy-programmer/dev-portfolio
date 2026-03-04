export function Navbar({ active, setActive }) {
  return (
    <nav>
      <div className="nav-logo">~/shy-programmer</div>
      <div className="nav-links">
        {["home", "projects", "socials", "contact"].map((link) => (
          <button
            key={link}
            className={`nav-link ${active === link ? "active" : ""}`}
            onClick={() => {
              setActive(link);
              document
                .getElementById(link)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}
