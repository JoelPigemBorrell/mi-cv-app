import React from "react";

export default function CVPreviewModerna({ cvData }) {
  return (
    <div
      className="p-8 rounded-lg shadow-lg mx-auto"
      style={{
        maxWidth: 820,
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#fefefe",
        color: "#222",
        lineHeight: 1.6,
        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)",
      }}
    >
      {/* Header con imagen + info */}
      <header
        className="mb-8 d-flex gap-4 align-items-center"
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "4px solid #2563eb",
          paddingBottom: 20,
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {cvData.foto && (
          <img
            src={cvData.foto}
            alt="Foto de perfil"
            style={{
              width: 110,
              height: 110,
              objectFit: "cover",
              borderRadius: "50%",
              border: "4px solid #2563eb",
              boxShadow: "0 0 10px rgba(37, 99, 235, 0.3)",
            }}
          />
        )}

        <div style={{ flex: 1, minWidth: 250 }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "900",
              color: "#1e40af",
              marginBottom: 8,
            }}
          >
            {cvData.nombre || "Nombre Completo"}
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#3b82f6",
              marginBottom: 10,
            }}
          >
            {cvData.titulo || "Título Profesional"}
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              wordWrap: "break-word",
              lineHeight: 1.4,
            }}
          >
            {cvData.email && <> {cvData.email} &nbsp;&nbsp;</>}
            {cvData.telefono && <> {cvData.telefono} &nbsp;&nbsp;</>}
            {cvData.linkedin && (
              <a
                href={cvData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb", textDecoration: "underline" }}
              >
                LinkedIn
              </a>
            )}
          </p>
        </div>
      </header>

      {/* Cuerpo dividido */}
      <div
        style={{
          display: "flex",
          gap: 36,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {/* Sección izquierda */}
        <section style={{ flex: 2, minWidth: 320 }}>
          {[
            ["Experiencia", cvData.experiencia],
            ["Educación", cvData.educacion],
            ["Proyectos", cvData.proyectos],
          ].map(
            ([title, content]) =>
              content && (
                <div key={title} style={{ marginBottom: 32 }}>
                  <h2
                    style={{
                      color: "#2563eb",
                      borderBottom: "3px solid #2563eb",
                      paddingBottom: 8,
                      marginBottom: 16,
                      fontSize: "1.4rem",
                      fontWeight: "700",
                    }}
                  >
                    {title}
                  </h2>
                  <p
                    style={{
                      whiteSpace: "pre-wrap",
                      fontSize: "1rem",
                      color: "#333",
                      lineHeight: 1.5,
                    }}
                  >
                    {content}
                  </p>
                </div>
              )
          )}
        </section>

        {/* Aside derecho */}
        <aside
          style={{
            flex: 1,
            backgroundColor: "#e0e7ff",
            padding: 24,
            borderRadius: 16,
            minWidth: 260,
            boxShadow: "inset 0 0 12px #c7d2fe",
            height: "fit-content",
          }}
        >
          {cvData.habilidades && (
            <>
              <h3
                style={{
                  color: "#1e40af",
                  marginBottom: 14,
                  fontSize: "1.3rem",
                  fontWeight: "700",
                }}
              >
                Habilidades
              </h3>
              <ul style={{ paddingLeft: 20, marginBottom: 30 }}>
                {cvData.habilidades
                  .split(",")
                  .map((h, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: 6,
                        fontSize: "1rem",
                        color: "#1f2937",
                      }}
                    >
                      {h.trim()}
                    </li>
                  ))}
              </ul>
            </>
          )}

          {cvData.idiomas && (
            <>
              <h3
                style={{
                  color: "#1e40af",
                  marginBottom: 14,
                  fontSize: "1.3rem",
                  fontWeight: "700",
                }}
              >
                Idiomas
              </h3>
              <ul style={{ paddingLeft: 20 }}>
                {cvData.idiomas
                  .split(",")
                  .map((i, idx) => (
                    <li
                      key={idx}
                      style={{
                        marginBottom: 6,
                        fontSize: "1rem",
                        color: "#1f2937",
                      }}
                    >
                      {i.trim()}
                    </li>
                  ))}
              </ul>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
