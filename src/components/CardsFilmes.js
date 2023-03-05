import React, { useEffect, useState} from 'react'
import FilmesDB from '../FilmesDB';
import { Link } from "react-router-dom"

const CardsFilmes = () => {

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
            <Link to="/filmes/avatar">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[0].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/a-guerra-do-amanha">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[2].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/bem-vinda-a-quixeramobim">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[3].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>
            
            <Link to="/filmes/os-4-malfeitores">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[4].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/homem-de-ferro">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[5].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/homem-de-ferro-2">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[6].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>
            
            <Link to="/filmes/homem-de-ferro-3">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[7].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/capitao-america">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[8].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/capitao-america-2">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[9].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/capitao-america-3">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[10].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>
        </div>
    </section>

  )
}

export default CardsFilmes