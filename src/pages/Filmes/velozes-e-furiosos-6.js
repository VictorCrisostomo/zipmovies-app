import React, { useEffect, useState} from 'react'
import FilmesDB from '../../FilmesDB';
import CardsFilmes from "../../components/CardsFilmes";
import BannerScreen from '../../components/BannerScreen';
import BtnsActions from '../../components/BtnsActions';


const VelozeseFuriosos6 = () => {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      //  pull all list
      let list = await FilmesDB.getHomeList();
      setMovieList(list);
    }

    loadAll();
  },[]);

  return (
    <main>

      {movieList.map((filme, key)=>(
        <BannerScreen key={key} filme = {filme.items.filmes[52]} />
      ))}
      {movieList.map((filme, key)=>(
        <BtnsActions key={key} filme = {filme.items.filmes[52]} />
      ))}
      <br />
      <br />
      <CardsFilmes/>

    </main>
  )
}

export default VelozeseFuriosos6