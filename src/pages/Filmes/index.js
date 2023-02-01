import { Link } from "react-router-dom"

const Filmes = () => {
  return (
    <main>
      <Link to="/filmes/avatar">Avatar</Link>
      <Link to="/filmes/a-guerra-do-amanha">A guerra do Amanhã</Link>
      <Link to="/filmes/bem-vinda-a-quixeramobim">Bem-vinda a Quixeramobim</Link>
    </main>
  )
}

export default Filmes