import React from "react";

const PresentationCard = () => {
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Jesus Fernando Garzon Garcia</h5>
        <p className="card-text">Estudiante de Ingenieria y computacion</p>
        <p className="card-text">Genera soluciones a las necesidades de la organización basados en tecnologías de información y en su capacidad para integrar conocimientos de matemáticas y física, principios de ingeniería, el análisis estadístico y probabilístico, así como sus habilidades de cómputo.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Email: jesus.garzon@uptc.edu.co</li>
        <li className="list-group-item">Phone: +573114422828</li>
        <li className="list-group-item">Address: Tunja Boyaca</li>
      </ul>
    </div>
  );
};

export default PresentationCard;