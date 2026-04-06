import Navbar from '../components/navigation/Navbar';
import Hero from '../components/sections/Hero';
import { Outlet } from 'react-router-dom';
import Footer from '../components/navigation/Footer';
import AuthDrawer from '../features/auth/components/AuthDrawer';
import CartDrawer from '../features/cart/components/CartDrawer';

export default function MainLayout() {
  return (
    <>
        <Navbar />
        <AuthDrawer />
        <CartDrawer />
        <Hero />
        <Outlet />
        <Footer />
    </>
  );
}