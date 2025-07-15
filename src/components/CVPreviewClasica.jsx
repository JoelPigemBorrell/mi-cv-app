import React from "react";

export default function CVPreviewClasica({ cvData }) {
  return (
    <div
      className="p-5 bg-white shadow rounded mx-auto"
      style={{
        maxWidth: 800,
        fontFamily: "'Times New Roman', serif",
        color: "#222",
        lineHeight: 1.6,
      }}
    >
      <header className="mb-5 border-bottom" style={{ borderColor: "#444", paddingBottom: 12 }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: "700", marginBottom: 6 }}>
          {cvData.nombre || "Nombre Completo"}
        </h1>
        <p style={{ fontSize: "1.2rem", fontStyle: "italic", marginBottom: 6 }}>
          {cvData.titulo || "Título Profesional"}
        </p>
        <p style={{ fontSize: "0.95rem", color: "#555" }}>
          {cvData.email} | {cvData.telefono} | {cvData.linkedin}
        </p>
      </header>

      <section>
        <h2 style={{ borderBottom: "1px solid #444", paddingBottom: 6 }}>Experiencia</h2>
        <p style={{ whiteSpace: "pre-wrap", marginBottom: 24 }}>{cvData.experiencia}</p>
      </section>

      <section className="mt-4">
        <h2 style={{ borderBottom: "1px solid #444", paddingBottom: 6 }}>Educación</h2>
        <p style={{ whiteSpace: "pre-wrap", marginBottom: 24 }}>{cvData.educacion}</p>
      </section>

      <section className="mt-4">
        <h2 style={{ borderBottom: "1px solid #444", paddingBottom: 6 }}>Proyectos</h2>
        <p style={{ whiteSpace: "pre-wrap", marginBottom: 24 }}>{cvData.proyectos}</p>
      </section>

      <section className="mt-4">
        <h2 style={{ borderBottom: "1px solid #444", paddingBottom: 6 }}>Habilidades</h2>
        <ul style={{ paddingLeft: 18, marginBottom: 24 }}>
          {(cvData.habilidades || "")
            .split(",")
            .map((h, i) => (
              <li key={i} style={{ marginBottom: 6, fontSize: "1rem" }}>
                {h.trim()}
              </li>
            ))}
        </ul>
      </section>

      <section className="mt-4">
        <h2 style={{ borderBottom: "1px solid #444", paddingBottom: 6 }}>Idiomas</h2>
        <ul style={{ paddingLeft: 18 }}>
          {(cvData.idiomas || "")
            .split(",")
            .map((i, idx) => (
              <li key={idx} style={{ marginBottom: 6, fontSize: "1rem" }}>
                {i.trim()}
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
