import SliderCarousel from "../../components/SliderCarousel";
import CardsFilmes from "../../components/CardsFilmes";
// import CardsSeries from "../../components/CardsSeries";
import CardColections from "../../components/CardColections";

const Home = () => {
  return (
    <main>
        <h2 className="main-title">Seu site de filmes e séries online</h2>
        <SliderCarousel/>
        <CardsFilmes/>
        {/* <CardsSeries/> */}
        <CardColections/>
    </main>
  )
}

export default Home