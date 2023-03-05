import React from 'react'
import spin from "../images/load-icon-spin.png";

const Loading = () => {
  return (
    <div className="container-loading">
        <img className="loading" src={spin} alt="" />
    </div>
  )
}

export default Loading