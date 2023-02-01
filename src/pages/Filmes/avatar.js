import React from 'react'
import FilmesDB from '../../filmesDB/filmesDB.json'
import CardsFilmes from "../../components/CardsFilmes";

import BannerScreen from '../../components/BannerScreen';

import BtnsActions from '../../components/BtnsActions';





const avatar = () => {
  return (
    <main>

      <BannerScreen filme = {FilmesDB.filmes[0]} />

      <BtnsActions filme = {FilmesDB.filmes[0]} />

      <br />
      <br />

      <CardsFilmes/>

    </main>
  )
}

export default avatar