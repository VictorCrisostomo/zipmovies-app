import React, { useEffect, useState} from 'react'
import FilmesDB from '../../FilmesDB';
import CardsFilmes from "../../components/CardsFilmes";
import BannerScreen from '../../components/BannerScreen';
import BtnsActions from '../../components/BtnsActions';


const CapitaoAmerica2 = () => {

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
        <BannerScreen key={key} filme = {filme.items.filmes[9]} />
      ))}
      {movieList.map((filme, key)=>(
        <BtnsActions key={key} filme = {filme.items.filmes[9]} />
      ))}
      <br />
      <br />
      <CardsFilmes/>

    </main>
  )
}

export default CapitaoAmerica2