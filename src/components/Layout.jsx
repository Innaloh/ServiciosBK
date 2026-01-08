import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import FloatingButton from './FloatingButton';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Navbar />
      <div className="main-content">
        <main className="site-main">
          <Outlet />
        </main>
        <Sidebar />
      </div>
      <FloatingButton />
      <Footer />
    </div>
  );
};

export default Layout;