import { useState, useEffect } from "react";
import html2pdf from "html2pdf.js";

import plantillaClasica from "../assets/classica.PNG";
import plantillaModerna from "../assets/moderna.PNG";
import plantillaMinimalista from "../assets/Minimalista.PNG";
import plantillaColorida from "../assets/Colorida.PNG";

export default function CVForm({ cvData, setCvData }) {
  const [activeTab, setActiveTab] = useState("personal");
  const [photoPreview, setPhotoPreview] = useState(cvData.foto || null);

  // Validación simple email
  const isEmailValid = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Manejar subida de foto
const handlePhotoChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    const base64 = reader.result;
    setPhotoPreview(base64);
    // Aquí guardas el base64 como la imagen en el cvData
    setCvData({ ...cvData, foto: base64 });
  };
  reader.readAsDataURL(file);
};

  // Descargar PDF del CV (asumiendo que el componente CVPreview tiene id="cv-preview")
  const handleDownloadPDF = () => {
    const element = document.getElementById("cv-preview");
    if (!element) {
      alert("Vista previa del CV no encontrada");
      return;
    }
    const opt = {
      margin:       0.3,
      filename:     `${cvData.nombre || "CV"}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

   const plantillas = [
    { id: "clasica", label: "Clásica", img: plantillaClasica },
    { id: "moderna", label: "Moderna", img: plantillaModerna },
    { id: "minimalista", label: "Minimalista", img: plantillaMinimalista },
    { id: "colorida", label: "Colorida", img: plantillaColorida },
  ];

  const tabOrder = ["personal", "experiencia", "otros"];

  const goToNextTab = () => {
    const currentIndex = tabOrder.indexOf(activeTab);
    if (currentIndex < tabOrder.length - 1) {
      setActiveTab(tabOrder[currentIndex + 1]);
    }
  };

  const goToPreviousTab = () => {
    const currentIndex = tabOrder.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabOrder[currentIndex - 1]);
    }
  };


  return (
    <>

    
     {/* Selector plantilla */}
      <div className="mb-4">
        <label className="form-label fw-semibold">Elige plantilla</label>
        <div className="d-flex gap-3 flex-wrap">
          {plantillas.map((p) => (
            <div
              key={p.id}
              className={`border rounded p-2 cursor-pointer ${cvData.plantilla === p.id ? "border-primary" : "border-secondary"}`}
              onClick={() => setCvData({ ...cvData, plantilla: p.id })}
              style={{ width: 100, textAlign: "center" }}
              title={p.label}
            >
              <img src={p.img} alt={p.label} className="img-fluid rounded" />
              <small>{p.label}</small>
            </div>
          ))}
        </div>
      </div>


      <ul className="nav nav-tabs mb-3" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "personal" ? "active" : ""}`}
            onClick={() => setActiveTab("personal")}
            type="button"
            role="tab"
          >
            Datos Personales
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "experiencia" ? "active" : ""}`}
            onClick={() => setActiveTab("experiencia")}
            type="button"
            role="tab"
          >
            Experiencia y Educación
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "otros" ? "active" : ""}`}
            onClick={() => setActiveTab("otros")}
            type="button"
            role="tab"
          >
            Proyectos, Habilidades 
          </button>
        </li>
      </ul>

      {/* Formulario con cards */}
      <form className="bg-white p-4 rounded shadow-sm w-100">

        {activeTab === "personal" && (
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label fw-semibold">Foto de perfil</label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={handlePhotoChange}
                />
                {photoPreview && (
                  <img
                    src={photoPreview}
                    alt="Foto preview"
                    className="img-thumbnail mt-2"
                    style={{ maxWidth: "150px", maxHeight: "150px" }}
                  />
                )}
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Nombre completo *</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={cvData.nombre}
                    onChange={(e) => setCvData({ ...cvData, nombre: e.target.value })}
                    placeholder="Juan Pérez"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Título profesional *</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-briefcase-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="titulo"
                    value={cvData.titulo}
                    onChange={(e) => setCvData({ ...cvData, titulo: e.target.value })}
                    placeholder="Ej: Desarrollador Frontend"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email *</label>
                <div className="input-group has-validation">
                  <span className="input-group-text">
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <input
                    type="email"
                    className={`form-control ${cvData.email && !isEmailValid(cvData.email) ? "is-invalid" : ""}`}
                    name="email"
                    value={cvData.email}
                    onChange={(e) => setCvData({ ...cvData, email: e.target.value })}
                    placeholder="ejemplo@email.com"
                    required
                  />
                  <div className="invalid-feedback">Introduce un email válido.</div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Teléfono</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-telephone-fill"></i>
                  </span>
                  <input
                    type="tel"
                    className="form-control"
                    name="telefono"
                    value={cvData.telefono}
                    onChange={(e) => setCvData({ ...cvData, telefono: e.target.value })}
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">LinkedIn</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-linkedin"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="linkedin"
                    value={cvData.linkedin}
                    onChange={(e) => setCvData({ ...cvData, linkedin: e.target.value })}
                    placeholder="linkedin.com/tu-perfil"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "experiencia" && (
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label fw-semibold">Experiencia laboral</label>
                <textarea
                  className="form-control"
                  name="experiencia"
                  rows="4"
                  value={cvData.experiencia}
                  onChange={(e) => setCvData({ ...cvData, experiencia: e.target.value })}
                  placeholder="Describe tu experiencia laboral..."
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Educación</label>
                <textarea
                  className="form-control"
                  name="educacion"
                  rows="3"
                  value={cvData.educacion}
                  onChange={(e) => setCvData({ ...cvData, educacion: e.target.value })}
                  placeholder="Tu formación académica..."
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "otros" && (
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label fw-semibold">Proyectos</label>
                <textarea
                  className="form-control"
                  name="proyectos"
                  rows="3"
                  value={cvData.proyectos}
                  onChange={(e) => setCvData({ ...cvData, proyectos: e.target.value })}
                  placeholder="Proyectos relevantes..."
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Habilidades (separadas por coma)</label>
                <input
                  type="text"
                  className="form-control"
                  name="habilidades"
                  value={cvData.habilidades}
                  onChange={(e) => setCvData({ ...cvData, habilidades: e.target.value })}
                  placeholder="JavaScript, React, SQL..."
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Idiomas (separados por coma)</label>
                <input
                  type="text"
                  className="form-control"
                  name="idiomas"
                  value={cvData.idiomas}
                  onChange={(e) => setCvData({ ...cvData, idiomas: e.target.value })}
                  placeholder="Español, Inglés, Francés..."
                />
              </div>
            </div>
          </div>
        )}
        {/* Botones de navegación entre secciones y descargar PDF */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 gap-3">
          <div className="d-flex gap-3">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={goToPreviousTab}
              disabled={activeTab === tabOrder[0]}
            >
              <i className="bi bi-arrow-left-circle me-2"></i> Anterior
            </button>

            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={goToNextTab}
              disabled={activeTab === tabOrder[tabOrder.length - 1]}
            >
              Siguiente <i className="bi bi-arrow-right-circle ms-2"></i>
            </button>
          </div>

          <div className="mt-2 mt-md-0">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleDownloadPDF}
            >
              <i className="bi bi-file-earmark-pdf-fill me-2"></i> Descargar PDF
            </button>
          </div>
        </div>

      </form>
    </>
  );
}
