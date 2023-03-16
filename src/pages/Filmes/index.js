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

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[21].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[21].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[22].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[22].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[23].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[23].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[24].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[24].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[25].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[25].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[26].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[26].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[27].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[27].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[28].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[28].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[29].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[29].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[30].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[30].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[31].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[31].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[32].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[32].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[33].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[33].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[34].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[34].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[35].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[35].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[36].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[36].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[37].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[37].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[38].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[38].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[39].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[39].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[40].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[40].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[41].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[41].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[42].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[42].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[43].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[43].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[44].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[44].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[45].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[45].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[46].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[46].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[47].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[47].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[48].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[48].images.poster} alt="" />
                    </div>
                </article>
            </Link>
        ))}

        {movieList.map((movie, index, key) =>(
            <Link key={key} to={movie.items.filmes[49].url.filmePage}>
                <article className='card'>
                    <div className="film-bg">
                            <img key={index} src={imageUrl+movie.items.filmes[49].images.poster} alt="" />
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