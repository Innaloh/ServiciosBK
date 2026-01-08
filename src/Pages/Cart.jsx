import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart, total } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('El carrito está vacío. Agrega servicios primero. 🛒');
      return;
    }
    alert(`¡Gracias por tu cotización! Total: $${total}\nTe contactaremos en menos de 24 horas. 📞`);
    clearCart();
  };

  return (
    <div className="cart-page">
      <div className="page-header">
        <h1>Tu Carrito de Servicios 🛒</h1>
        <p>Revisa los servicios seleccionados para tu cotización personalizada</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon">🛒</div>
          <h3>Tu carrito está vacío</h3>
          <p>Agrega servicios desde la página de servicios para solicitar una cotización</p>
          <Link to="/servicios" className="btn-browse">
            🔍 Ver servicios disponibles
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item">
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="item-features">
                    {item.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">✅ {feature}</span>
                    ))}
                  </div>
                </div>
                
                <div className="item-actions">
                  <div className="item-price">
                    <span className="price-label">Precio:</span>
                    <span className="price-value">${item.price}</span>
                  </div>
                  <button 
                    className="btn-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    🗑️ Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Resumen de Cotización</h3>
              
              <div className="summary-row">
                <span>Servicios seleccionados:</span>
                <span>{cart.length}</span>
              </div>
              
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${total}</span>
              </div>
              
              <div className="summary-row discount">
                <span>Descuento por primer servicio:</span>
                <span>-15%</span>
              </div>
              
              <div className="summary-row total">
                <span>Total estimado:</span>
                <span className="total-price">${Math.round(total * 0.85)}</span>
              </div>
              
              <div className="summary-note">
                <p>💡 <em>Este es un precio estimado. Te contactaremos para una cotización exacta según tus necesidades específicas.</em></p>
              </div>
              
              <div className="summary-actions">
                <button className="btn-clear" onClick={clearCart}>
                  🗑️ Vaciar carrito
                </button>
                <button className="btn-checkout" onClick={handleCheckout}>
                  📋 Solicitar cotización
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="cart-info">
        <div className="info-card">
          <h3>📝 ¿Cómo funciona?</h3>
          <ol>
            <li>Agrega servicios al carrito</li>
            <li>Solicita cotización</li>
            <li>Te contactamos para detalles</li>
            <li>¡Programamos tu servicio!</li>
          </ol>
        </div>
        
        <div className="info-card">
          <h3>🌟 Beneficios</h3>
          <ul>
            <li>✅ Cotización sin costo</li>
            <li>✅ Garantía incluida</li>
            <li>✅ Profesionales certificados</li>
            <li>✅ 15% descuento primer servicio</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;