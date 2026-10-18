import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const close = () => desktop.matches && setOpen(false);
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      // Return focus to the toggle so keyboard users aren't left on a hidden link
      if (menuRef.current?.contains(document.activeElement)) {
        toggleRef.current?.focus();
      }
      setOpen(false);
    };
    desktop.addEventListener("change", close);
    window.addEventListener("keydown", onKey);
    return () => {
      desktop.removeEventListener("change", close);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="nav_wrapper">
      <nav
        className="container nav_bar"
        aria-label="Main navigation"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <a href="#home" className="left nav_items brand">
          Portfolio
        </a>
        <button
          ref={toggleRef}
          type="button"
          className="nav_toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <div
          id="nav-menu"
          ref={menuRef}
          className={`right ${open ? "open" : ""}`}
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="nav_items"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
