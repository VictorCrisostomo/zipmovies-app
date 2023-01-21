import React from 'react'

import { FaRegPlayCircle, FaInstagram , FaFacebookSquare, FaTwitter, FaWhatsapp} from "react-icons/fa"
import { MdDownload } from "react-icons/md";

const avatar = () => {
  return (
    <main>
      <section className="film-header" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(https://imgur.com/bEXZpay.jpg)'
      }}>
        <div className="film--horizontal">
          <div className="film--vertical">
            <div className="infos">
              <div className="img-poster">
                <img src="https://imgur.com/jAwTcTj.jpg" alt="1" />
              </div>
              <div className="text-infos">
                <h2>Avatar</h2>
                  <br />
                <p>Um homem se aventura em um mundo exótico que ele aprende a chamar de lar e luta para protegê-lo.</p>
                  <br />
                <p>Compartilhar:</p>
                <div className="icons-group">
                  <FaWhatsapp className='a-icons' />
                  <FaInstagram className='a-icons' />
                  <FaFacebookSquare className='a-icons' />
                  <FaTwitter className='a-icons' />  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="btns-play-down">
        <a href="https://zip-films.vercel.app/movies/Avatar.html" target="_blank" rel="noopener noreferrer">
          <button className='btn-play'><FaRegPlayCircle /> Assistir</button>
        </a>
        <a href="torrent.com">
          <button className='btn-down'><MdDownload /> Baixar torrent</button>
        </a>
      </div>

    </main>
  )
}

export default avatar