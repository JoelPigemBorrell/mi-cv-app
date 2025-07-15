import React from "react";

export default function CVPreviewMinimalista({ cvData }) {
  return (
    <div
      className="p-5 mx-auto"
      style={{
        maxWidth: 700,
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        color: "#222",
        lineHeight: 1.5,
        backgroundColor: "#fff",
        borderRadius: 8,
        boxShadow: "0 1px 8px rgb(0 0 0 / 0.1)",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: 25 }}>
        <h1 style={{ fontWeight: "700", fontSize: "2.5rem", marginBottom: 6 }}>
          {cvData.nombre || "Nombre Completo"}
        </h1>
        <p
          style={{
            fontWeight: "500",
            fontSize: "1.1rem",
            color: "#555",
            marginBottom: 6,
          }}
        >
          {cvData.titulo || "Título Profesional"}
        </p>
        <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: 4 }}>
          {cvData.email} | {cvData.telefono}
        </p>
        <p style={{ fontSize: "0.9rem", color: "#666" }}>{cvData.linkedin}</p>
      </header>

      {/** Secciones con bordes sutiles y buena separación */}
      {["Experiencia", "Educación", "Proyectos"].map((section) => (
        <section
          key={section}
          style={{
            borderTop: "1px solid #ccc",
            paddingTop: 12,
            marginTop: 15,
          }}
        >
          <h2
            style={{
              borderBottom: "1px solid #ccc",
              paddingBottom: 6,
              marginBottom: 12,
              fontWeight: "600",
              fontSize: "1.2rem",
              color: "#333",
            }}
          >
            {section}
          </h2>
          <p style={{ whiteSpace: "pre-wrap", fontSize: "0.95rem", color: "#444" }}>
            {cvData[section.toLowerCase()] || ""}
          </p>
        </section>
      ))}

      <section
        style={{
          borderTop: "1px solid #ccc",
          paddingTop: 12,
          marginTop: 15,
        }}
      >
        <h2 style={{ fontWeight: "600", fontSize: "1.2rem", marginBottom: 8 }}>
          Habilidades
        </h2>
        <p style={{ color: "#444", fontSize: "0.95rem" }}>{cvData.habilidades}</p>
      </section>

      <section
        style={{
          borderTop: "1px solid #ccc",
          paddingTop: 12,
          marginTop: 15,
          marginBottom: 10,
        }}
      >
        <h2 style={{ fontWeight: "600", fontSize: "1.2rem", marginBottom: 8 }}>
          Idiomas
        </h2>
        <p style={{ color: "#444", fontSize: "0.95rem" }}>{cvData.idiomas}</p>
      </section>
    </div>
  );
}
