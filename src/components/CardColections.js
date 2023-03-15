import React from 'react'
import { Link } from "react-router-dom"

import hp from "../images/HP.jpg"
import jv from "../images/jogos-vorazes.jpg"
import jw from "../images/jonh-wick.jpg"
import jp from "../images/jurassic-park.jpg"
import msi from "../images/msi.jpg"
import rb from "../images/rocky-balboa.jpg"
import sa from "../images/senhor-dos-aneis.jpg"
import sw from "../images/star-wars.jpg"
import tm from "../images/transformers.jpg"
import ucm from "../images/ucm.jpg"
import vf from "../images/velozes-furiosos.jpg"


const CardColections = () => {

    const images = [
        hp,
        jv,
        jw,
        jp,
        msi,
        rb,
        sa,
        sw,
        tm,
        ucm,
        vf
    ]

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

                        <img key={images[9]} src={images[9]} alt="" />

                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[0].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/harry-potter">
                <article className='card'>
                    <div className="film-colection">

                    <img key={images[0]} src={images[0]} alt="" />

                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[2].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/o-senhor-dos-aneis">
                <article className='card'>
                    <div className="film-colection">

                    <img key={images[6]} src={images[6]} alt="" />

                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[3].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>
            
            <Link to="/colecoes/jurassic-park">
                <article className='card'>
                    <div className="film-colection">

                    <img key={images[3]} src={images[3]} alt="" />

                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[4].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/jogos-vorazes">
                <article className='card'>
                    <div className="film-colection">

                    <img key={images[1]} src={images[1]} alt="" />

                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[5].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/velozes-e-furiosos">
                <article className='card'>
                    <div className="film-colection">

                    <img key={images[10]} src={images[10]} alt="" />

                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[6].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>
            
            <Link to="/colecoes/transformers">
                <article className='card'>
                    <div className="film-colection">

                        <img key={images[8]} src={images[8]} alt="" />

                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[7].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/jonh-wick">
                <article className='card'>
                    <div className="film-colection">

                    <img key={images[2]} src={images[2]} alt="" />

                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[8].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/star-wars">
                <article className='card'>
                    <div className="film-colection">

                        <img key={images[7]} src={images[7]} alt="" />

                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[9].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/missao-impossivel">
                <article className='card'>
                    <div className="film-colection">

                    <img key={images[4]} src={images[4]} alt="" />
                        {/* {movieList.map((movie, index) =>(
                            <img key={index} src={"https://zip-images.vercel.app"+movie.items.filmes[10].images.poster} alt="" />
                        ))} */}
                    </div>
                </article>
            </Link>

            <Link to="/colecoes/rocky-balboa">
                <article className='card'>
                    <div className="film-colection">

                    <img key={images[5]} src={images[5]} alt="" />
                    
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