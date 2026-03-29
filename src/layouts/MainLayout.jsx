import Navbar from '../components/navigation/Navbar';
import { Outlet } from 'react-router-dom';
import '../styles/global.css';

export default function MainLayout() {
  return (
    <>
        <Navbar />
        <main className="container">
          <Outlet />
        </main>
    </>
  );
}