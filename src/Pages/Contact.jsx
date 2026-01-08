import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Te responderemos en menos de 24 horas. 📞');
    setFormData({ name: '', email: '', phone: '', message: '', service: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contáctanos 📞</h1>
        <p>¿Tienes preguntas o necesitas una cotización? ¡Escríbenos!</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Teléfono</h3>
            <p>+55 7199 8991</p>
            <p><em>Emergencias 24/7</em></p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">✉️</div>
            <h3>Email</h3>
            <p>serviciosbk84@outlook.com</p>
            <p><em>Respuesta en 2 horas</em></p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">🕒</div>
            <h3>Horario</h3>
            <p>Lun-Vie: 8:00 AM - 6:00 PM</p>
            <p>Sábados: 9:00 AM - 2:00 PM</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Zona de Cobertura</h3>
            <p>Ciudad y área metropolitana</p>
            <p><em>Servicios a domicilio</em></p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Envíanos un mensaje ✍️</h2>
          
          <div className="form-group">
            <label htmlFor="name">Nombre completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+55 1234 5678"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="service">Servicio de interés</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Selecciona un servicio</option>
              <option value="roedores">Control de Roedores</option>
              <option value="insectos">Control de Insectos</option>
              <option value="desinfeccion">Desinfección</option>
              <option value="fumigacion">Fumigación</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mensaje *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Describe tu problema o solicita una cotización..."
            />
          </div>
          
          <button type="submit" className="btn-submit">
            📤 Enviar mensaje
          </button>
        </form>
      </div>

      <div className="emergency-banner">
        <div className="emergency-content">
          <span className="emergency-icon">🚨</span>
          <div>
            <h3>¡Emergencia de Plagas!</h3>
            <p>Llámanos ahora mismo al <strong>+55 7199 8991</strong> - Atención inmediata 24/7</p>
          </div>
          <a href="tel:+5571998991" className="emergency-btn">Llamar ahora</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;