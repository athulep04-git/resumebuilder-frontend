import React from 'react'
import pnf from '../assets/pnf.jpg';

function PageNotFound() {
  return (
    <div>
        <img className="d-block w-100" src={pnf} style={{height: "650px",objectFit: "cover"}}/>
    </div>
  )
}

export default PageNotFound