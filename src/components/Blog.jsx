import React from "react";

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
    imagen: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=200",
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
    imagen: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&h=200",
  },
  {
    id: 3,
    titulo: "¿PDF o Word? ¿Qué formato elegir?",
    contenido: `
      <p>El formato PDF es ideal para enviar tu CV sin problemas de formato.</p>
    `,
    imagen: "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&h=200",
  },
  {
    id: 4,
    titulo: "Cómo destacar sin experiencia laboral",
    contenido: `
      <p>Si no tienes experiencia, destaca tus proyectos, prácticas o formación.</p>
    `,
    imagen: "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&h=200",
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
    imagen: "https://images.pexels.com/photos/7567442/pexels-photo-7567442.jpeg?auto=compress&cs=tinysrgb&h=200",
  },
  {
    id: 6,
    titulo: "¿Deberías incluir foto en tu CV?",
    contenido: `
      <p>Depende del país y del sector. En España es común, pero no en EE. UU.</p>
    `,
    imagen: "https://images.pexels.com/photos/4560080/pexels-photo-4560080.jpeg?auto=compress&cs=tinysrgb&h=200",
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
