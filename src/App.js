import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "./styles/main.css"
// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home'
import Filmes from './pages/Filmes'
import Series from './pages/Series'
import Lancamentos from './pages/Lancamentos';
import Colecoes from './pages/Colecoes'
import Pedidos from './pages/Pedidos'
import Cursos from './pages/Cursos'
import Torrents from './pages/Torrents'
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Navbar/>
        </React.Fragment>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/filmes" element={<Filmes />}/>
          <Route path="/series" element={<Series />}/>
          <Route path="/lancamentos" element={<Lancamentos />}/>
          <Route path="/colecoes" element={<Colecoes />}/>
          <Route path="/pedidos" element={<Pedidos />}/>
          <Route path="/cursos" element={<Cursos />}/>
          <Route path="/torrents" element={<Torrents />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
