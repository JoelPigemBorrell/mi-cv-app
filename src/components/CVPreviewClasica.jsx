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
      <header
        className="mb-5 d-flex align-items-center gap-4 border-bottom pb-3"
        style={{ borderColor: "#444" }}
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
              border: "2px solid #444",
            }}
          />
        )}
        <div>
          <h1 style={{ fontSize: "2.6rem", fontWeight: "700", marginBottom: 6 }}>
            {cvData.nombre || "Nombre Completo"}
          </h1>
          <p style={{ fontSize: "1.2rem", fontStyle: "italic", marginBottom: 6 }}>
            {cvData.titulo || "Título Profesional"}
          </p>
          <p style={{ fontSize: "0.95rem", color: "#555" }}>
            {cvData.email} | {cvData.telefono} | {cvData.linkedin}
          </p>
        </div>
      </header>

      {/* Secciones */}
      {[
        ["Experiencia", cvData.experiencia],
        ["Educación", cvData.educacion],
        ["Proyectos", cvData.proyectos],
      ].map(([title, content]) => (
        <section key={title} className="mt-4">
          <h2 style={{ borderBottom: "1px solid #444", paddingBottom: 6 }}>{title}</h2>
          <p style={{ whiteSpace: "pre-wrap", marginBottom: 24 }}>{content}</p>
        </section>
      ))}

      {/* Habilidades e Idiomas */}
      {[
        ["Habilidades", cvData.habilidades],
        ["Idiomas", cvData.idiomas],
      ].map(([title, value]) => (
        <section key={title} className="mt-4">
          <h2 style={{ borderBottom: "1px solid #444", paddingBottom: 6 }}>{title}</h2>
          <ul style={{ paddingLeft: 18, marginBottom: 24 }}>
            {(value || "").split(",").map((item, i) => (
              <li key={i} style={{ marginBottom: 6, fontSize: "1rem" }}>
                {item.trim()}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
