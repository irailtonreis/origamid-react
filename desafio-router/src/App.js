import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produto from  './Components/Produtos'
import Header from  './Components/Header'
import Footer from  './Components/Footer'
import Contato from  './Components/Contato'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header />
        <Routes>
          <Route path="/" element={<Produto />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
