import React from 'react'
// import filmesDB from '../filmesDB/filmesDB.json'

// import { FaInstagram , FaFacebookSquare, FaTwitter, FaWhatsapp} from "react-icons/fa"




const BannerScreen = (props) => {
  return (

    <section className="film-header" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${"https://zip-images.vercel.app"+props.filme.images.backdrop})`
      }}>
        <div className="film--horizontal">
          <div className="film--vertical">
            <div className="infos">
              <div className="img-poster">
                <img src={"https://zip-images.vercel.app"+props.filme.images.poster} alt="1" />
              </div>
              <div className="text-infos">
                <h4>{props.filme.title}</h4>
                  <br />
                <p>{props.filme.description}</p>
                  <br />
                {/* <p>Compartilhar:</p>
                <div className="icons-group">
                  <FaWhatsapp className='a-icons' />
                  <FaInstagram className='a-icons' />
                  <FaFacebookSquare className='a-icons' />
                  <FaTwitter className='a-icons' />  
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}

export default BannerScreen