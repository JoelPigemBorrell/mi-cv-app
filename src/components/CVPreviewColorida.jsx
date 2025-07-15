import React from "react";

export default function CVPreviewColorida({ cvData }) {
  return (
    <div
      style={{
        maxWidth: 700,
        margin: "auto",
        padding: 30,
        background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        borderRadius: 20,
        color: "#2e2e2e",
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: 30 }}>
        {cvData.foto && (
          <img
            src={cvData.foto}
            alt="Foto de perfil"
            style={{
              width: 110,
              height: 110,
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #ff7f50",
              marginBottom: 15,
            }}
          />
        )}
        <h1 style={{ fontSize: 32, fontWeight: "bold", color: "#4b2c20" }}>
          {cvData.nombre || "Nombre Completo"}
        </h1>
        <p style={{ fontSize: 18, fontWeight: 500, color: "#6b4226" }}>
          {cvData.titulo || "Título Profesional"}
        </p>
        <div style={{ fontSize: 14, color: "#555", marginTop: 10 }}>
          {cvData.email && <>📧 {cvData.email} &nbsp;&nbsp;</>}
          {cvData.telefono && <>📞 {cvData.telefono}</>}
        </div>
        {cvData.linkedin && (
          <p style={{ fontSize: 14, color: "#555" }}>{cvData.linkedin}</p>
        )}
      </header>

      {[
        ["Experiencia", cvData.experiencia],
        ["Educación", cvData.educacion],
        ["Proyectos", cvData.proyectos],
        ["Habilidades", cvData.habilidades],
        ["Idiomas", cvData.idiomas],
      ].map(([title, content]) =>
        content ? (
          <section key={title} style={{ marginBottom: 25 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 600,
                borderBottom: "2px solid #ff7f50",
                paddingBottom: 6,
                marginBottom: 10,
                color: "#4b2c20",
              }}
            >
              {title}
            </h2>
            <p style={{ whiteSpace: "pre-wrap", margin: 0 }}>{content}</p>
          </section>
        ) : null
      )}
    </div>
  );
}
