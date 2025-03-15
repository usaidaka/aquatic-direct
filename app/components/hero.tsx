import React from 'react'
import classes from "../styles/components/hero.module.scss"

const Hero = () => {
  return (
    <div className={classes.hero}>
        <video autoPlay muted loop className={classes.backgroundVideo} src="/backgroundVideo.mp4"/>
        <div className={classes.content}>
            <h1>Test</h1>
        </div>
    </div>
  )
}

export default Hero
