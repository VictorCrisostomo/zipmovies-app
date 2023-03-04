import React from 'react'
// import FilmesDB from '../../FilmesDB';
import { Link } from "react-router-dom"

const CardsFilmes = () => {

    // const [movieList, setMovieList] = useState([])
    // const [backgroundImageUrl, setBackgroundImageUrl] = useState('')

    // useEffect(() => {
    //   const loadAll = async () => {
    //     //  pull all list
    //     let list = await fetch('https://filmes-db-rust.vercel.app/filmesDB.json');
    //     const result = await list.json();
    //     setMovieList(result);
    //   }
  
    //   loadAll();
    // },[]);

    // const backgroundStyle = {
    //     backgroundImage: `url(${"https://zip-images.vercel.app"+backgroundImageUrl.filmes[0].images.poster})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    // }
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
                        backgroundImage: `url(https://zip-images.vercel.app/posts/fe2iqdht_o.jpg)`
                    }}>
                    </div>
                </article>
            </Link>

            <Link to="/filmes/a-guerra-do-amanha">
                <article className='card'>
                    <div className="film-bg" style={{
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage: `url(https://zip-images.vercel.app/posts/zISnryDj_o.jpg)`
                            }}>
                    </div>
                </article>
            </Link>

            <Link to="/filmes/bem-vinda-a-quixeramobim">
                <article className='card'>
                    <div className="film-bg" style={{
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundImage: `url(https://zip-images.vercel.app/posts/Q7oE0e3U_o.jpg)`
                        }}>
                    </div>
                </article>
            </Link>
            
            <Link to="/filmes/os-4-malfeitores">
                <article className='card'>
                    <div className="film-bg" style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(https://zip-images.vercel.app/posts/uqydfajL_o.jpg)`
                        }}>
                    </div>
                </article>
            </Link>

            <Link to="/filmes/homem-de-ferro">
                <article className='card'>
                    <div className="film-bg" style={{
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundImage: `url(https://zip-images.vercel.app/posts/g2CYt4v2_o.jpg)`
                        }}>
                    </div>
                </article>
            </Link>

            <Link to="/filmes/homem-de-ferro-2">
                <article className='card'>
                    <div className="film-bg" style={{
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundImage: `url(https://zip-images.vercel.app/posts/D4Vda737_o.jpg)`
                        }}>
                    </div>
                </article>
            </Link>
            
            <Link to="/filmes/homem-de-ferro-3">
                <article className='card'>
                    <div className="film-bg" style={{
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundImage: `url(https://zip-images.vercel.app/posts/HmUCNkMl_o.jpg)`
                        }}>
                    </div>
                </article>
            </Link>

            <Link to="/filmes/capitao-america">
                <article className='card'>
                    <div className="film-bg" style={{
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundImage: `url(https://zip-images.vercel.app/posts/CWeOsrJo_o.jpg)`
                        }}>
                    </div>
                </article>
            </Link>

            <Link to="/filmes/capitao-america-2">
                <article className='card'>
                    <div className="film-bg" style={{
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundImage: `url(https://zip-images.vercel.app/posts/72qTEL1V_o.jpg)`
                        }}>
                    </div>
                </article>
            </Link>

            <Link to="/filmes/capitao-america-3">
                <article className='card'>
                    <div className="film-bg" style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(https://zip-images.vercel.app/posts/pPdhq1Yk_o.jpg)`
                    }}>
                    </div>
                </article>
            </Link>
            
        </div>
    </section>

  )
}

export default CardsFilmes