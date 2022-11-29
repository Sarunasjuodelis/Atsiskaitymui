import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation/Navigation';
import AnekdotaiPage from './pages/AnekdotaiPage';
import CitiesPage from './pages/Cities/CitiesPage';
import Orai from './pages/orai/Weather';

function App() {
  return (
    <div className='page-wrapper'>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/anekdotai' element={<AnekdotaiPage />} />
        <Route path='/cities' element={<CitiesPage />} />
        <Route path='/orai' element={<Orai />} />
        <Route path='*' element={<h1>404 error. Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
