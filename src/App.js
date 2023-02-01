import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./styles/main.css"

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home'
import Filmes from './pages/Filmes'
import Series from './pages/Series'
import Lancamentos from './pages/Lancamentos';
import Colecoes from './pages/Colecoes'
import Pedidos from './pages/Pedidos'
import Cursos from './pages/Cursos'
import Torrents from './pages/Torrents'

// Filmes
import Avatar from "./pages/Filmes/avatar"
import AGuerraDoAmanha from "./pages/Filmes/a-guerra-do-amanha"
import BemVindaaQuixeramobim from "./pages/Filmes/Bem-vinda-a-quixeramobim"

function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Navbar/>
        </React.Fragment>
        <Routes>
          {/* Pages */}
          <Route path="/" element={<Home />}/>
          <Route path="/filmes" element={<Filmes />}/>
          <Route path="/series" element={<Series />}/>
          <Route path="/lancamentos" element={<Lancamentos />}/>
          <Route path="/colecoes" element={<Colecoes />}/>
          <Route path="/pedidos" element={<Pedidos />}/>
          <Route path="/cursos" element={<Cursos />}/>
          <Route path="/torrents" element={<Torrents />}/>

          {/* Filmes */}
          <Route path='/filmes/avatar' element={<Avatar />}/>
          <Route path='/filmes/a-guerra-do-amanha' element={<AGuerraDoAmanha />}/>
          <Route path='/filmes/bem-vinda-a-quixeramobim' element={<BemVindaaQuixeramobim />}/>
        </Routes>
        <React.Fragment>
          <Footer />
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
