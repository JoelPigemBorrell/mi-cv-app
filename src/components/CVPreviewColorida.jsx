// CVPreviewColorida.jsx
import React from "react";

export default function CVPreviewColorida({ cvData }) {
  return (
    <div
      style={{
        maxWidth: 700,
        margin: "auto",
        padding: 30,
        background:
          "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        borderRadius: 20,
        color: "#333",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: 25 }}>
        <h1 style={{ fontSize: 36, fontWeight: "bold", color: "#4b2c20" }}>
          {cvData.nombre || "Nombre Completo"}
        </h1>
        <p style={{ fontSize: 18, fontWeight: "600", color: "#6b4226" }}>
          {cvData.titulo || "Título Profesional"}
        </p>
        <p style={{ fontSize: 14, marginTop: 10 }}>
          📧 {cvData.email} | 📞 {cvData.telefono}
        </p>
        <p style={{ fontSize: 14 }}>{cvData.linkedin}</p>
      </header>

      <section style={{ marginBottom: 20 }}>
        <h2 style={{ borderBottom: "2px solid #6b4226" }}>Experiencia</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>{cvData.experiencia}</p>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h2 style={{ borderBottom: "2px solid #6b4226" }}>Educación</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>{cvData.educacion}</p>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h2 style={{ borderBottom: "2px solid #6b4226" }}>Proyectos</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>{cvData.proyectos}</p>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h2 style={{ borderBottom: "2px solid #6b4226" }}>Habilidades</h2>
        <p>{cvData.habilidades}</p>
      </section>

      <section>
        <h2 style={{ borderBottom: "2px solid #6b4226" }}>Idiomas</h2>
        <p>{cvData.idiomas}</p>
      </section>
    </div>
  );
}
