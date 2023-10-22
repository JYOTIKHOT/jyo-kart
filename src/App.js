import './App.css';
import Navbar from './components/navbar';
import LoginPage from './pages/LoginPage';
import Carousel from './pages/carousel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Navbar />} />
    <Route path='/login' element={<LoginPage />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
