import React, { useEffect, useState} from 'react'
import FilmesDB from '../../FilmesDB';
import { Link } from "react-router-dom"

const Filmes = () => {

  const imgUrl = "https://zip-images.vercel.app";
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
            <Link to="/filmes/avatar">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[0].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/a-guerra-do-amanha">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[2].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/bem-vinda-a-quixeramobim">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[3].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>
            
            <Link to="/filmes/os-4-malfeitores">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[4].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/homem-de-ferro">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[5].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/homem-de-ferro-2">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[6].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>
            
            <Link to="/filmes/homem-de-ferro-3">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[7].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/capitao-america">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[8].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/capitao-america-2">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[9].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/capitao-america-3">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[10].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/homem-formiga">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[11].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/homem-formiga-2">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[12].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/pantera-negra">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[13].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/guardioes-da-galaxia">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[14].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/guardioes-da-galaxia-2">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[15].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/top-gun">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[16].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/jurassic-park">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[17].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/jurassic-park-2">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[18].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/jurassic-park-3">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[19].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>

            <Link to="/filmes/jurassic-world">
                <article className='card'>
                    <div className="film-bg">
                        {movieList.map((movie, index) =>(
                            <img key={index} src={imgUrl+movie.items.filmes[20].images.poster} alt="" />
                        ))}
                    </div>
                </article>
            </Link>
        </div>
      </section>
    </main>
  )
}

export default Filmes