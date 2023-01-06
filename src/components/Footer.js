import React from 'react' 

import { Link } from "react-router-dom"
import { FaInstagram , FaFacebookSquare, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
        <div className="container-footer">
          <div className="cards-footer">
          <Link to="/">Início</Link>
          <Link to="/filmes">Filmes</Link>
          <Link to="/series">Séries</Link>
          <Link to="/lancamentos">Lançamentos</Link>
          <Link to="/colecoes">Coleções</Link>
          <Link to="/Pedidos">Pedidos</Link>
          <Link to="/torrents">Torrents</Link>
          <Link to="/cursos">Cursos</Link>
          </div>
          <div className="line-footer"></div>
          <div className="cards-footer">
            <p>Gostaria de ser avisado em primeira mão quando adicionarmos novos títulos ou lançamentos do cinema?</p>
            <button className='btn-footer'>
              Entrar no grupo
            </button>
          </div>
          <div className="line-footer"></div>
          <div className="cards-footer">
            <div className="icons-footer">
              <FaInstagram className='a-icons' />
              <FaFacebookSquare className='a-icons' />
              <FaTwitter className='a-icons' />            
            </div>
            <h3>ZIP Movies</h3>
          </div>
        </div>
        <div className="extra-footer"></div>
    </footer>
  )
}

export default Footer