import React from 'react'
import classes from './HeaderBanner.module.css'
import banner from '../../../Assets/images/Header/WebBanner.png'

const headerBanner = (props) => (
    <div className={classes.HeaderBanner}>
        <a href="/"><img src={banner} title="Andrea Castro" /></a>
    </div>
)

export default headerBanner