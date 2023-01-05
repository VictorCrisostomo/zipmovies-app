import React from 'react'
import { Link } from "react-router-dom"

const CardsSeries = () => {
  return (
    <section className='carousel-container'>
            <div className="carousel-header">
            <h3>Séries</h3>
            <Link className='carousel-links' to="/series">+ Ver mais</Link>
            </div>

        <div className='carousel'>
            <article className='card'>
                <div className="film-bg">
                    <h1>SÉRIES</h1>
                </div>
            </article>
            <article className='card'>
                <div className="film-bg">
                    <h1>SÉRIES</h1>
                </div>
            </article>
            <article className='card'>
                <div className="film-bg">
                    <h1>SÉRIES</h1>
                </div>
            </article>
            <article className='card'>
                <div className="film-bg">
                    <h1>SÉRIES</h1>
                </div>
            </article>
            <article className='card'>
                <div className="film-bg">
                    <h1>SÉRIES</h1>
                </div>
            </article>
        </div>
    </section>

  )
}

export default CardsSeries