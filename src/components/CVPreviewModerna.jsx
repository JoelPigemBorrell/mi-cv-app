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
        lineHeight: 1.6,
      }}
    >
      {/* Header con imagen + info */}
      <header
        className="mb-6 d-flex gap-4 align-items-center"
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "4px solid #3b82f6",
          paddingBottom: 16,
        }}
      >
        {cvData.foto && (
          <img
            src={cvData.foto}
            alt="Foto de perfil"
            style={{
              width: 100,
              height: 100,
              objectFit: "cover",
              borderRadius: "50%",
              border: "3px solid #3b82f6",
            }}
          />
        )}

        <div>
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "800",
              color: "#2563eb",
              marginBottom: 6,
            }}
          >
            {cvData.nombre || "Nombre Completo"}
          </h1>
          <p style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: 6 }}>
            {cvData.titulo || "Título Profesional"}
          </p>
          <p style={{ fontSize: "0.95rem", color: "#555" }}>
            {cvData.email} | {cvData.telefono} | {cvData.linkedin}
          </p>
        </div>
      </header>

      {/* Cuerpo dividido */}
      <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
        {/* Sección izquierda */}
        <section style={{ flex: 2, minWidth: 300 }}>
          {[
            ["Experiencia", cvData.experiencia],
            ["Educación", cvData.educacion],
            ["Proyectos", cvData.proyectos],
          ].map(([title, content]) => (
            <div key={title} style={{ marginBottom: 24 }}>
              <h2
                style={{
                  color: "#2563eb",
                  borderBottom: "2px solid #2563eb",
                  paddingBottom: 6,
                  marginBottom: 12,
                  fontSize: "1.25rem",
                }}
              >
                {title}
              </h2>
              <p style={{ whiteSpace: "pre-wrap", fontSize: "0.95rem", color: "#333" }}>
                {content || ""}
              </p>
            </div>
          ))}
        </section>

        {/* Aside derecho */}
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
