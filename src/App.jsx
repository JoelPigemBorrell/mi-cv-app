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
           <div className="container my-5 p-4 bg-white rounded shadow-sm">
              <h1 className="mb-4 fw-bold text-primary">Creador de CV Profesional</h1>

              {/* Contenedor flex para form y preview */}
              <div className="d-flex gap-4 flex-wrap align-items-start">
                <div className="flex-fill min-w-300px">
                  <CVForm cvData={cvData} setCvData={setCvData} />
                </div>

                <div className="flex-fill min-w-300px border-start ps-4">
                  <h2 className="mb-3 text-secondary">Vista previa</h2>
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
