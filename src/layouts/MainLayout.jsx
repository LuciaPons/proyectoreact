import Navbar from '../components/navigation/Navbar';
import Hero from '../components/sections/Hero';
import { Outlet } from 'react-router-dom';
import Footer from '../components/navigation/Footer';

export default function MainLayout() {
  return (
    <>
        <Navbar />
        <Hero />
        <Outlet />
        <Footer />
    </>
  );
}