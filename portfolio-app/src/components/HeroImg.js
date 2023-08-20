import React from 'react'
import IntroImage from '../assets/image1.jpg'
import { Link } from 'react-router-dom'
import './HeroImgStyles.css'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className="mask">
           <img src={IntroImage} alt="" className='intro-img' />
        </div> 
        <div className="content">
            <p>Hi, I am Mudavath Raju</p>
            <h1>React Developer</h1>
            <div className='buttons'>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn'>Contact Me</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
