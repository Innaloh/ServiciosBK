import { Link } from 'react-router-dom';

const FloatingButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="btn-flotante" onClick={scrollToTop}>
      ↑<br/>Arriba
    </button>
  );
};

export default FloatingButton;