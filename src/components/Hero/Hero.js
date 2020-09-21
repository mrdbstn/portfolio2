import React from 'react'
import '../Hero/hero.css'

function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__text first">Mourad</div>
        <div className="hero__text second">Boustani</div>
        <div style={{fontStyle: "italic"}} className="hero__text third">Developer & </div>
        <div style={{fontStyle: "italic"}} className="hero__text fourth">Web Designer </div>
        <div style={{marginTop: "20vh", fontSize: "5vw"}} className="hero__text fifth">Geselecteerde Projecten</div>
      </div>
    </div>
  )
}

export default Hero
