import React from 'react'
import { Link } from "react-router-dom"

import FilmesDB from '../filmesDB/filmesDB.json'

const CardsFilmes = () => {
  return (
    <section className='carousel-container'>
            <div className="carousel-header">
            <h3>Filmes</h3>
            <Link className='carousel-links' to="/filmes">+ Ver mais</Link>
            </div>

        <div className='carousel'>
            <Link to="/filmes/avatar">
                <article className='card'>
                    <div className="film-bg" style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${"https://zip-images.vercel.app"+FilmesDB.filmes[0].images.poster})`
                    }}>
                    </div>
                </article>
            </Link>

            <Link to="/filmes/a-guerra-do-amanha">
                <article className='card'>
                    <div className="film-bg" style={{
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage: `url(${"https://zip-images.vercel.app"+FilmesDB.filmes[2].images.poster})`
                            }}>
                    </div>
                </article>
            </Link>

            <Link to="/filmes/bem-vinda-a-quixeramobim">
                <article className='card'>
                    <div className="film-bg" style={{
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundImage: `url(${"https://zip-images.vercel.app"+FilmesDB.filmes[3].images.poster})`
                        }}>
                    </div>
                </article>
            </Link>
            
            <article className='card'>
            <div className="film-bg" style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${"https://zip-images.vercel.app"+FilmesDB.filmes[4].images.poster})`
                    }}>
                    </div>
            </article>

            <article className='card'>
            <div className="film-bg" style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${"https://zip-images.vercel.app"+FilmesDB.filmes[5].images.poster})`
                    }}>
                    </div>
            </article>

            <article className='card'>
            <div className="film-bg" style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${"https://zip-images.vercel.app"+FilmesDB.filmes[6].images.poster})`
                    }}>
                    </div>
            </article>

            <article className='card'>
            <div className="film-bg" style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${"https://zip-images.vercel.app"+FilmesDB.filmes[7].images.poster})`
                    }}>
                    </div>
            </article>

            <article className='card'>
            <div className="film-bg" style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${"https://zip-images.vercel.app"+FilmesDB.filmes[8].images.poster})`
                    }}>
                    </div>
            </article>

            <article className='card'>
            <div className="film-bg" style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${"https://zip-images.vercel.app"+FilmesDB.filmes[9].images.poster})`
                    }}>
                    </div>
            </article>

            <article className='card'>
            <div className="film-bg" style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${"https://zip-images.vercel.app"+FilmesDB.filmes[10].images.poster})`
                    }}>
                    </div>
            </article>
            
        </div>
    </section>

  )
}

export default CardsFilmes