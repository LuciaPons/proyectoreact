import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AdventuresContainer from './features/adventures/components/AdventuresContainer';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/experiences" element={<AdventuresContainer />} />
                    <Route path="/experiences/:levelId" element={<AdventuresContainer />} />
                </Route>
                <Route path="*" element={<div> 404 - Página no encontrada</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App