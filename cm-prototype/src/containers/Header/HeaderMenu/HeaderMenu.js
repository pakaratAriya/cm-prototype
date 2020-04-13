import React from 'react'
import Menu from './Menu/Menu'
import headerMenuMembers from '../HeaderMenuMembers'
import classes from './HeaderMenu.module.css'

const headerMenu = (props) => {
    
    return (
        <div className={classes.HeaderMenu}>
            <div className={classes.menuWrapper}>
                {headerMenuMembers.map((menu,index)=>(
                    <Menu key={index} length={headerMenuMembers.length} index={index} to={menu.to} name={menu.name} submenu={menu.submenu}/>
                ))}
            </div>
        </div>
    )
}

export default headerMenu