import React, { useEffect, useState} from 'react'
import FilmesDB from '../FilmesDB';
import { Link } from "react-router-dom"

const CardsFilmes = () => {

    const imageUrl = "https://zip-images.vercel.app"

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
    <section className='carousel-container'>
        <div className="carousel-header">
            <h3>Filmes</h3>
            <Link className='carousel-links' to="/filmes">+ Ver mais</Link>
        </div>

        <div className='carousel'>
        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[0].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[0].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[2].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[2].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[3].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[3].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[4].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[4].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[5].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[5].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[6].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[6].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[7].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[7].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[8].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[8].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[9].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[9].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[10].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[10].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}
        </div>
    </section>

  )
}

export default CardsFilmes