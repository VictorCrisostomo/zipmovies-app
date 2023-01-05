import CardsFilmes from "../../components/CardsFilmes";
import CardsSeries from "../../components/CardsSeries";

const Home = () => {
  return (
    <main>
        <h2 className="main-title">Seu site de filmes e séries online</h2>

        <CardsFilmes/>
        <CardsSeries/>
    </main>
  )
}

export default Home