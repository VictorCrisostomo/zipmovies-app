import React from 'react'

import { FaRegPlayCircle } from "react-icons/fa"
import { MdDownload } from "react-icons/md";

const BtnsActions = (props) => {
  return (
    <div className="btns-play-down">
    <a 
    href={"https://zip-films.vercel.app"+props.filme.url.filmeLink}
    target="_blank" rel="noopener noreferrer"
        >
            
      <button className='btn-play'><FaRegPlayCircle /> Assistir</button>
    </a>
    <a href="torrent.com">
      <button className='btn-down'><MdDownload /> Baixar torrent</button>
    </a>
  </div>
  )
}

export default BtnsActions