import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />} />
                    <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App