
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Certification from './pages/Certification';
import Products from './pages/Products';
import Support from './pages/Support';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About Sections */}
            <Route path="/about/*" element={<About />} />
            
            {/* Certification Sections */}
            <Route path="/certification/*" element={<Certification />} />
            
            {/* Products Sections */}
            <Route path="/products/*" element={<Products />} />
            
            {/* Support Sections */}
            <Route path="/support/*" element={<Support />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
