import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';

import Home from './pages/Home'
import Filmes from './pages/Filmes'
import Series from './pages/Series'
import Lancamentos from './pages/Lancamentos';
import Colecoes from './pages/Colecoes'
import Pedidos from './pages/Pedidos'
import Cursos from './pages/Cursos'
import Torrents from './pages/Torrents'

function App() {
  return (
    <div className="App">
      <Router>
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
