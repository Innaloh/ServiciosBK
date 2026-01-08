import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  
  return (
    <nav className="site-nav">
      <ul>
        <li><Link to="/">🏠 Inicio</Link></li>
        <li><Link to="/servicios">🔧 Servicios</Link></li>
        <li><Link to="/galeria">📸 Galería</Link></li>
        <li><Link to="/contacto">📞 Contacto</Link></li>
        <li className="cart-nav-item">
          <Link to="/carrito" className="cart-link">
            🛒 Carrito ({cart.length})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;