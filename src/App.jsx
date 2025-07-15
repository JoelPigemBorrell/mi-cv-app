import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CVForm from "./components/CVForm.jsx";
import CVPreview from "./components/CVPreview.jsx";
import Blog from "./components/Blog.jsx";
import Navbar from "./components/Navbar.jsx";
import AdSense from "./components/AdSense.jsx";

export default function App() {
  const [cvData, setCvData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    linkedin: "",
    titulo: "",
    experiencia: "",
    educacion: "",
    proyectos: "",
    habilidades: "",
    idiomas: "",
    plantilla: "clasica",
  });

  return (
    <Router>
      <Navbar />

      <AdSense />

      <Routes>
        <Route
          path="/"
          element={
            <div className="container my-5">
              <h1 className="mb-4">Creador de CV Profesional</h1>

              {/* Contenedor flex para form y preview */}
              <div
                className="flex-container"
                style={{
                  display: "flex",
                  gap: "2rem",
                  alignItems: "flex-start",
                   width: "100%",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1, minWidth: 300 }}>
                  <CVForm cvData={cvData} setCvData={setCvData} />
                </div>
                <div
                  style={{
                    flex: 1,
                    minWidth: 300,
                    borderLeft: "1px solid #ddd",
                    paddingLeft: "2rem",
                    boxSizing: "border-box",
                  }}
                >
                  <h2>Vista previa</h2>
                  <CVPreview cvData={cvData} />
                </div>
              </div>

              <hr className="my-5" />

              <div className="my-4">
                <AdSense />
              </div>
            </div>
          }
        />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}
