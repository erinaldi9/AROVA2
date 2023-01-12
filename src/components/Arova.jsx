import React from 'react';

import './styles/Arova.css';

const Arova = ({ AROVA }) => {
  
  return (
    <section className="Arova Arova-slide-1">
      <div className="Arovao-container">
        <article className="Arova-container__text-box">
          <h1>{AROVA}</h1>
          <p>
            AROVA. Somos una empresa de moda femenina de Mendoza que empezo en epoca de pandemia en el 2019. Nos dedicamos exclusivamenta en la confeccion de vestidos echos a medida.
          </p>
          <button className="button-primary">Comprar</button>
        </article>
      </div>
    </section>
  );
};

export default Arova;
