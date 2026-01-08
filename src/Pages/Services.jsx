import { useState } from 'react';
import { servicesData } from '../data/services';
import { useCart } from '../context/CartContext';

const Services = () => {
  const { addToCart } = useCart();
  const [category, setCategory] = useState("Todos");
  
  const categories = ["Todos", ...new Set(servicesData.map(s => s.category))];
  const filteredServices = category === "Todos" 
    ? servicesData 
    : servicesData.filter(s => s.category === category);

  return (
    <div className="services-page">
      <div className="page-header">
        <h1>Nuestros Servicios 🔧</h1>
        <p>Selecciona los servicios que necesitas y agrégalos al carrito para solicitar una cotización personalizada</p>
      </div>

      <div className="filters-section">
        <div className="filter-card">
          <label htmlFor="category-filter">Filtrar por categoría:</label>
          <select 
            id="category-filter"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="filter-select"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="services-grid">
        {filteredServices.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-image">
              <img src={service.image} alt={service.name} />
              <span className="service-category">{service.category}</span>
            </div>
            
            <div className="service-content">
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, index) => (
                  <div key={index} className="feature">
                    <span className="check-icon">✅</span> {feature}
                  </div>
                ))}
              </div>
              
              <div className="service-footer">
                <div className="price">
                  <span className="price-label">Desde:</span>
                  <span className="price-value">${service.price}</span>
                </div>
                <button 
                  className="btn-add"
                  onClick={() => addToCart(service)}
                >
                  + Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="info-note">
        <p>💡 <strong>Nota:</strong> Todos los precios incluyen impuestos. Contacta con nosotros para cotizaciones personalizadas según el tamaño de tu propiedad.</p>
      </div>
    </div>
  );
};

export default Services;