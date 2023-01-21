import { useRef } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <header>
      <Link to="/"><h3>ZIP Movies</h3></Link>
        <nav ref={navRef}>

          <button className="btn-link" onClick={showNavbar}>
            <Link to="/">Início</Link>
          </button>

          <button className="btn-link" onClick={showNavbar}>
            <Link to="/filmes">Filmes</Link>
          </button>

          <button className="btn-link" onClick={showNavbar}>
            <Link to="/series">Séries</Link>
          </button>

          <button className="btn-link" onClick={showNavbar}>
            <Link to="/lancamentos">Lançamentos</Link>
          </button>

          <button className="btn-link" onClick={showNavbar}>
            <Link to="/colecoes">Coleções</Link>
          </button>

          <button className="btn-link" onClick={showNavbar}>
          <Link to="/Pedidos">Pedidos</Link>
          </button>

          <button className="btn-link" onClick={showNavbar}>
            <Link to="/torrents">Torrents</Link>
          </button>

          <button className="btn-link" onClick={showNavbar}>
            <Link to="/cursos">Cursos</Link>
          </button>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
    </header>
  )
}

export default Navbar