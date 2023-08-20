import React from 'react'
import './HeroImgNew.css'

const HeroImgNew = ({heading, text}) => {
  return (
    <>
      <div className="hero-img">
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default HeroImgNew
