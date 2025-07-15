import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 shadow-sm sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          {/* Aquí podrías poner un SVG o img logo pequeño */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#0d6efd"
            className="bi bi-file-earmark-person-fill me-2"
            viewBox="0 0 16 16"
          >
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707L9.293 0zM7 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
          </svg>
          Creador CV
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
