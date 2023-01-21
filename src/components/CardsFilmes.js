import React from 'react'
import { Link } from "react-router-dom"

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
                        backgroundImage: 'url(https://imgur.com/jAwTcTj.jpg)'
                    }}>
                    </div>
                </article>
            </Link>

            <article className='card'>
                <div className="film-bg">
                    <h1>FILMES</h1>
                </div>
            </article>

            <article className='card'>
                <div className="film-bg">
                    <h1>FILMES</h1>
                </div>
            </article>

            <article className='card'>
                <div className="film-bg">
                    <h1>FILMES</h1>
                </div>
            </article>

            <article className='card'>
                <div className="film-bg">
                    <h1>FILMES</h1>
                </div>
            </article>

            <article className='card'>
                <div className="film-bg">
                    <h1>FILMES</h1>
                </div>
            </article>

            <article className='card'>
                <div className="film-bg">
                    <h1>FILMES</h1>
                </div>
            </article>

            <article className='card'>
                <div className="film-bg">
                    <h1>FILMES</h1>
                </div>
            </article>

            <article className='card'>
                <div className="film-bg">
                    <h1>FILMES</h1>
                </div>
            </article>

            <article className='card'>
                <div className="film-bg">
                    <h1>FILMES</h1>
                </div>
            </article>
            
        </div>
    </section>

  )
}

export default CardsFilmes