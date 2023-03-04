import { Link } from "react-router-dom"
import CardsFilmes from "../../components/CardsFilmes";

const Filmes = () => {
  return (
    <main>
      <Link to="/filmes/avatar">Avatar</Link>
      <Link to="/filmes/a-guerra-do-amanha">A guerra do Amanhã</Link>
      <Link to="/filmes/bem-vinda-a-quixeramobim">Bem-vinda a Quixeramobim</Link>
      <Link to="/filmes/os-4-malfeitores">Os 4 Malfeitores</Link>
      <Link to="/filmes/homem-de-ferro">Homem de ferro</Link>
      <Link to="/filmes/homem-de-ferro-2">Homem de ferro 2</Link>
      <Link to="/filmes/homem-de-ferro-3">Homem de ferro 3</Link>
      <Link to="/filmes/capitao-america">Capitao America</Link>
      <Link to="/filmes/capitao-america-2">Capitao America 2</Link>
      <Link to="/filmes/capitao-america-3">Capitao America 3</Link>

      <CardsFilmes/>
    </main>
  )
}

export default Filmes