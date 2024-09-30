import React from 'react';
import './InfoCard.css';

const InfoCard = ({ nombre, imagen, link, descripcion, funcionalidades }) => {
  return (
    <div className="infoCard">
      <a href={link} target="_blank"><img src={imagen} alt={nombre} className="infoCard-image" /></a>
      <a href={link} target="_blank"><h2>{nombre}</h2></a>
      <p>{descripcion}</p>
      <ul>
        {funcionalidades.map((func, index) => (
          <li key={index}>{func}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;