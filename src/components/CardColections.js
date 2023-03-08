import React from 'react'
import { Link } from "react-router-dom"


const CardColections = () => {
  return (
    <section className='carousel-container'>
            <div className="carousel-header">
            <h3>Coleções</h3>
            <Link className='carousel-links' to="/filmes">+ Ver mais</Link>
            </div>

        <div className='carousel'>
            <Link to="/colecoes/ucm">
                <article className='card'>
                    <div className="film-colection">
                        <h3>UCM</h3>
                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[0].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/harry-potter">
                <article className='card'>
                    <div className="film-colection">
                    <h3>Harry Potter</h3>
                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[2].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/o-senhor-dos-aneis">
                <article className='card'>
                    <div className="film-colection">
                    <h3>O Senhor dos Anéis</h3>
                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[3].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>
            
            <Link to="/colecoes/jurassic-park">
                <article className='card'>
                    <div className="film-colection">
                    <h3>Jurassic Park</h3>
                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[4].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/jogos-vorazes">
                <article className='card'>
                    <div className="film-colection">
                    <h3>Jogos Vorazes</h3>
                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[5].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/velozes-e-furiosos">
                <article className='card'>
                    <div className="film-colection">
                    <h3>Velozes e Furiosos</h3>
                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[6].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>
            
            <Link to="/colecoes/transformers">
                <article className='card'>
                    <div className="film-colection">
                        <h3>Transformers</h3>
                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[7].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/jonh-wick">
                <article className='card'>
                    <div className="film-colection">
                    <h3>Jonh Wick</h3>
                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[8].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/star-wars">
                <article className='card'>
                    <div className="film-colection">
                        <h3>Star Wars</h3>
                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[9].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/missao-impossivel">
                <article className='card'>
                    <div className="film-colection">
                    <h3>Missão Impossivel</h3>
                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[10].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/rocky-balboa">
                <article className='card'>
                    <div className="film-colection">
                    <h3>Rocky Balboa</h3>
                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[10].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>
        </div>
    </section>
  )
}

export default CardColections