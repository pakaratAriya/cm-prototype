import React from 'react'
import emailIcon from '../../../Assets/images/Header/HeaderIcons/email.png'
import facebookIcon from '../../../Assets/images/Header/HeaderIcons/facebook.png'
import instagramIcon from '../../../Assets/images/Header/HeaderIcons/instagram.png'
import linkedinIcon from '../../../Assets/images/Header/HeaderIcons/linkedin.png'
import youtubeIcon from '../../../Assets/images/Header/HeaderIcons/youtube.png'
import classes from './HeaderIcon.module.css'

const icons = [ facebookIcon, instagramIcon, linkedinIcon, youtubeIcon, emailIcon]

const headerIcon = (props) => (
    <div className={classes.HeaderIcon}>
        {icons.map((icon,index)=>(
            <a href="/"><img className={classes.iconImage} src={icon} id={index}/></a>
        ))}
    </div>
)

export default headerIcon;