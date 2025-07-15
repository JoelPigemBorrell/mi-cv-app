import React from "react";

// Importa todas las imágenes
import img1 from "../assets/comohacercurriculkum.jpg";
import img2 from "../assets/darcurriculum.jpg";
import img3 from "../assets/question.jpg";
import img4 from "../assets/entrevista.jpg";
import img5 from "../assets/cv.jpg";
import img6 from "../assets/foto.jpg";

const articulos = [
  {
    id: 1,
    titulo: "Cómo hacer un CV perfecto",
    contenido: `
      <p>Aprende cómo destacar con tu currículum en pocos pasos.</p>
      <ul>
        <li>Personaliza tu CV para cada oferta.</li>
        <li>Usa palabras clave del puesto.</li>
        <li>Destaca logros, no solo tareas.</li>
      </ul>
    `,
    imagen: img1,
  },
  {
    id: 2,
    titulo: "Errores comunes al hacer un CV",
    contenido: `
      <p>Evita estos errores que hacen que los reclutadores te descarten.</p>
      <ul>
        <li>Errores ortográficos o gramaticales.</li>
        <li>Diseño poco profesional.</li>
        <li>Demasiada información irrelevante.</li>
      </ul>
    `,
    imagen: img2,
  },
  {
    id: 3,
    titulo: "¿PDF o Word? ¿Qué formato elegir?",
    contenido: `
      <p>El formato PDF es ideal para enviar tu CV sin problemas de formato.</p>
    `,
    imagen: img3,
  },
  {
    id: 4,
    titulo: "Cómo destacar sin experiencia laboral",
    contenido: `
      <p>Si no tienes experiencia, destaca tus proyectos, prácticas o formación.</p>
    `,
    imagen: img4,
  },
  {
    id: 5,
    titulo: "Top 5 diseños de CV modernos en 2025",
    contenido: `
      <p>Explora los estilos de CV más usados este año.</p>
      <ul>
        <li>Minimalista</li>
        <li>Infográfico</li>
        <li>Tipográfico</li>
        <li>Diseño en bloques</li>
        <li>Plantilla con foto</li>
      </ul>
    `,
    imagen: img5,
  },
  {
    id: 6,
    titulo: "¿Deberías incluir foto en tu CV?",
    contenido: `
      <p>Depende del país y del sector. En España es común, pero no en EE. UU.</p>
    `,
    imagen: img6,
  },
];

export default function Blog() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center fw-bold display-4">📚 Blog y Recursos</h1>
      <div className="row g-4">
        {articulos.map(({ id, titulo, contenido, imagen }) => (
          <div key={id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={imagen}
                className="card-img-top"
                alt={titulo}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-semibold">{titulo}</h5>
                <div
                  className="card-text text-secondary small"
                  dangerouslySetInnerHTML={{ __html: contenido }}
                />
              </div>
              <div className="card-footer bg-white border-0 text-end">
                <a href="#" className="btn btn-outline-primary btn-sm">
                  Leer más
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
