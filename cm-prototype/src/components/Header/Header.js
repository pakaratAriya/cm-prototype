import React from 'react'
import HeaderIcon from './HeaderIcon/HeaderIcon'
import HeaderBanner from './HeaderBanner/HeaderBanner'
import HeaderMenu from '../../containers/Header/HeaderMenu/HeaderMenu'
import classes from './Header.module.css'

const header = (props) => (
    <div className={classes.Header}>
        <HeaderIcon/>
        <HeaderBanner/>
        <HeaderMenu/>
    </div>
)

export default header;