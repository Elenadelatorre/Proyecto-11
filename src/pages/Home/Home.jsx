import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <section className='hero'>
        <div className='hero-content'>
          <h1>¡Explora el mundo a través de intercambios culturales!</h1>
          <h2>Conoce nuevas culturas y haz amigos en todo el mundo</h2>
          <p>
            Encuentra en nuestra comunidad a personas de diferentes países
            para realizar intercambios culturales. Aprende sobre nuevas
            costumbres, idiomas y tradiciones mientras compartes las tuyas.
          </p>
          <div className='cta-buttons'>
            <a href='/countries' className='btn'>
              Explora Países
            </a>
            <a href='/users' className='btn'>
              Compañeros de Intercambio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
