import React, { useEffect, useState} from 'react'
import FilmesDB from '../../FilmesDB';
import { Link } from "react-router-dom"

const Filmes = () => {

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
    <main>

      <section className='section-titles'>
        <div className='container-films'>

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

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[11].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[11].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[12].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[12].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[13].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[13].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[14].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[14].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[15].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[15].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[16].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[16].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[17].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[17].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[18].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[18].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[19].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[19].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[20].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[20].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}
        </div>
      </section>
    </main>
  )
}

export default Filmes