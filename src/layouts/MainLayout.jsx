import Navbar from '../components/navigation/Navbar';
import Hero from '../components/sections/Hero';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
        <Navbar />
        <Hero />
        <Outlet />
    </>
  );
}