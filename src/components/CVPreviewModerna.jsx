import React from "react";

export default function CVPreviewModerna({ cvData }) {
  return (
    <div
      className="p-6 rounded shadow mx-auto"
      style={{
        maxWidth: 800,
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f9fafb",
        color: "#111",
        lineHeight: 1.5,
      }}
    >
      <header className="mb-6" style={{ borderBottom: "4px solid #3b82f6", paddingBottom: 12 }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "900", color: "#2563eb", marginBottom: 6 }}>
          {cvData.nombre || "Nombre Completo"}
        </h1>
        <p style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: 6 }}>
          {cvData.titulo || "Título Profesional"}
        </p>
        <p style={{ fontSize: "0.95rem", color: "#555" }}>
          {cvData.email} | {cvData.telefono} | {cvData.linkedin}
        </p>
      </header>

      <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
        <section style={{ flex: 2, minWidth: 300 }}>
          <h2 style={{ color: "#2563eb", borderBottom: "2px solid #2563eb", paddingBottom: 6, marginBottom: 12 }}>
            Experiencia
          </h2>
          <p style={{ whiteSpace: "pre-wrap", marginBottom: 24 }}>{cvData.experiencia}</p>

          <h2 style={{ color: "#2563eb", borderBottom: "2px solid #2563eb", paddingBottom: 6, marginBottom: 12 }}>
            Educación
          </h2>
          <p style={{ whiteSpace: "pre-wrap", marginBottom: 24 }}>{cvData.educacion}</p>

          <h2 style={{ color: "#2563eb", borderBottom: "2px solid #2563eb", paddingBottom: 6, marginBottom: 12 }}>
            Proyectos
          </h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{cvData.proyectos}</p>
        </section>

        <aside
          style={{
            flex: 1,
            backgroundColor: "#e0e7ff",
            padding: 20,
            borderRadius: 12,
            minWidth: 220,
            boxShadow: "inset 0 0 8px #c7d2fe",
            height: "fit-content",
          }}
        >
          <h3 style={{ color: "#1e40af", marginBottom: 10 }}>Habilidades</h3>
          <ul style={{ paddingLeft: 18, marginBottom: 30 }}>
            {(cvData.habilidades || "")
              .split(",")
              .map((h, i) => (
                <li key={i} style={{ marginBottom: 4, fontSize: "0.95rem" }}>
                  {h.trim()}
                </li>
              ))}
          </ul>

          <h3 style={{ color: "#1e40af", marginBottom: 10 }}>Idiomas</h3>
          <ul style={{ paddingLeft: 18 }}>
            {(cvData.idiomas || "")
              .split(",")
              .map((i, idx) => (
                <li key={idx} style={{ marginBottom: 4, fontSize: "0.95rem" }}>
                  {i.trim()}
                </li>
              ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
