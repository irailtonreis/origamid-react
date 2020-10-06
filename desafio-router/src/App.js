import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from  './Components/Produtos'
import Produto from  './Components/Produto'
import Header from  './Components/Header'
import Footer from  './Components/Footer'
import Contato from  './Components/Contato'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header />
        <Routes>
          <Route path="/"  element={<Produtos />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
