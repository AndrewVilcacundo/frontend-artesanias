import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow_icon.png'
import artesanias_local from '../Assets/artesanias_local.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
      <h2>HOLA</h2>
        <div>
            <div className="hero-hand-icon">
                <p>BIENVENIDOS</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>BIENVENIDOS</p>
            <p>AQUI VA FRASE INICIAL O ALGO</p>
        </div>
        <div className="hero-latest-btn"></div>
            <div>Ultima coleccion?</div>
            <img src={arrow_icon} alt="" />
      </div>
      <div className="hero-right">
        <img src={artesanias_local} alt="" />

      </div>
    </div>
  )
}

export default Hero
