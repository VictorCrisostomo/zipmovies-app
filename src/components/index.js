import { Link } from "react-router-dom"

import "./styles.css";

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                
                <li><Link to="/">HomePage</Link></li>
                <li><Link to="/filmes">Filmes</Link></li>
                <li><Link to="/series">Séries</Link></li>
                <li><Link to="/lancamentos">Lançamentos</Link></li>
                <li><Link to="/colecoes">Coleções</Link></li>
                <li><Link to="/Pedidos">Pedidos</Link></li>
                <li><Link to="/torrents">Torrents</Link></li>
                <li><Link to="/cursos">Cursos</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header