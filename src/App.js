import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Product from './components/Product'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sannin-store/" element={<Home />} />
        <Route exact path="/product/:id/:productName" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
