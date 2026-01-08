const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-image">
          <img src="/imagenes/fumigaciones4.png" alt="Servicio de fumigación" />
          <div className="hero-overlay">
            <h2>Tu hogar libre de plagas 🏡✨</h2>
            <p>Soluciones profesionales y garantizadas</p>
            <a href="#contact" className="btn-hero">📞 Solicitar Cotización</a>
          </div>
        </div>
      </section>

      <section className="why-us-section">
        <h2>¿Por qué elegirnos? 🌟</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>10+ Años de Experiencia</h3>
            <p>Más de una década protegiendo hogares y negocios</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Respuesta Rápida</h3>
            <p>Atendemos emergencias en menos de 24 horas</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Garantía Total</h3>
            <p>Todos nuestros trabajos incluyen garantía por escrito</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Precios Justos</h3>
            <p>La mejor relación calidad-precio del mercado</p>
          </div>
        </div>
      </section>

      <section className="quick-info">
        <div className="info-card">
          <h3>Nuestra Misión 🎯</h3>
          <p>Proteger la salud y bienestar de nuestras familias mediante soluciones efectivas y respetuosas con el medio ambiente.</p>
        </div>
        <div className="info-card">
          <h3>Emergencias 🚨</h3>
          <p>¿Problema urgente? Llámanos ahora mismo al <strong>+55 7199 8991</strong>. Atención 24/7 para situaciones críticas.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;