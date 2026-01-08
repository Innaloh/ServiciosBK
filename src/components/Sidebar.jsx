const Sidebar = () => {
  return (
    <aside className="site-aside">
      <div className="sidebar-card">
        <h3>✨ Ofertas Especiales</h3>
        <p>¡Descuento del 15% en tu primer servicio!</p>
        <div className="discount-badge">-15%</div>
      </div>
      
      <div className="sidebar-card">
        <h3>📅 Horario de Atención</h3>
        <p><strong>Lun-Vie:</strong> 8:00 AM - 6:00 PM</p>
        <p><strong>Sábados:</strong> 9:00 AM - 2:00 PM</p>
        <p><strong>Emergencias:</strong> 24/7</p>
      </div>
      
      <div className="sidebar-card">
        <h3>💡 Consejos Rápidos</h3>
        <ul>
          <li>✅ Sella grietas y agujeros</li>
          <li>✅ Mantén la cocina limpia</li>
          <li>✅ Evita acumular agua</li>
          <li>✅ Revisa periódicamente</li>
        </ul>
      </div>
      
      <div className="sidebar-card">
        <h3>⭐ Testimonios</h3>
        <div className="testimonial">
          <p>"Excelente servicio, muy profesionales. ¡Recomendados!"</p>
          <span>- María G.</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;