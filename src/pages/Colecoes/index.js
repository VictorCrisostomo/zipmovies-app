import { Link } from "react-router-dom"

const Colecoes = () => {
  return (
    <main>
        <h2 className="secondary-title">Coleções</h2>
        
        <Link to="/colecoes/harry-potter">
          <p>Harry Potter</p>
        </Link>

        <Link to="/colecoes/jogos-vorazes">
          <p>Jogos Vorazes</p>
        </Link>

        <Link to="/colecoes/jonh-wick">
          <p>Jonh Wick</p>
        </Link>

        <Link to="/colecoes/jurassic-park">
          <p>Jurassic Park</p>
        </Link>

        <Link to="/colecoes/missao-impossivel">
          <p>Missão Impossivel</p>
        </Link>

        <Link to="/colecoes/o-senhor-dos-aneis">
          <p>O Senhor dos Anéis</p>
        </Link>

        <Link to="/colecoes/rocky-balboa">
          <p>Rocky Balboa</p>
        </Link>

        <Link to="/colecoes/star-wars">
          <p>Star Wars</p>
        </Link>

        <Link to="/colecoes/transformers">
          <p>Transformers</p>
        </Link>

        <Link to="/colecoes/ucm">
          <p>Universo Cinematografico Marvel</p>
        </Link>

        <Link to="/colecoes/velozes-e-furiosos">
          <p>Velozes e Furiosos</p>
        </Link>
    </main>
  )
}

export default Colecoes