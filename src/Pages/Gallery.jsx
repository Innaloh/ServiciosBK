import { useState } from 'react';

const galleryImages = [
  { id: 1, src: "/imagenes/desinfeccion3.jpg", title: "Control de Plagas en Cocina", category: "Residencial" },
  { id: 2, src: "/imagenes/espacios1.jpg", title: "Desinfección Profesional", category: "Comercial" },
  { id: 3, src: "/imagenes/img1.jpeg", title: "Control de Roedores", category: "Industrial" },
  { id: 4, src: "/imagenes/img7.jpeg", title: "Fumigación de Jardines", category: "Residencial" },
  { id: 5, src: "/imagenes/desinfeccion1.jpg", title: "Servicio Empresarial", category: "Comercial" },
  { id: 6, src: "/imagenes/desinfeccion2.jpg", title: "Protección Completa", category: "Industrial" },
  { id: 7, src: "/imagenes/img4.jpeg", title: "Control de Insectos", category: "Residencial" },
  { id: 8, src: "/imagenes/img5.jpeg", title: "Equipo Profesional", category: "Equipos" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("Todos");

  const categories = ["Todos", ...new Set(galleryImages.map(img => img.category))];
  const filteredImages = filter === "Todos" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>Galería de Trabajos 📸</h1>
        <p>Un vistazo a algunos de nuestros trabajos realizados con éxito</p>
      </div>

      <div className="gallery-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map(image => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.title} />
            <div className="image-overlay">
              <h4>{image.title}</h4>
              <span className="category-badge">{image.category}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>Categoría: {selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <div className="gallery-note">
        <p>📸 <strong>Nota:</strong> Todas las imágenes son de trabajos reales realizados por nuestro equipo profesional.</p>
      </div>
    </div>
  );
};

export default Gallery;