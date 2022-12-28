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
      <h3>ZIP Movies</h3>
        <nav ref={navRef}>
          <Link to="/">Início</Link>
          <Link to="/filmes">Filmes</Link>
          <Link to="/series">Séries</Link>
          <Link to="/lancamentos">Lançamentos</Link>
          <Link to="/colecoes">Coleções</Link>
          <Link to="/Pedidos">Pedidos</Link>
          <Link to="/torrents">Torrents</Link>
          <Link to="/cursos">Cursos</Link>
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