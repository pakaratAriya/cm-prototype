import React, {Component} from 'react'
import Aux from '../../../../hoc/Auxilary'
import {NavLink} from 'react-router-dom'
import classes from './Menu.module.css'

class Menu extends Component{

    state = {
        dropdownOpen: false
    }

    onMouseEnter = () =>{
        this.setState({dropdownOpen: true})
        console.log(this.props.index)
    }

    onMouseLeave = (e) =>{
        let elementMouseIsOver = document.elementFromPoint(e.clientX, e.clientY)
        if(elementMouseIsOver == null || (elementMouseIsOver.className != classes.subMenu 
            && elementMouseIsOver.className != [classes.subMenu, classes.active].join(' '))){
            this.setState({dropdownOpen: false})
        }
        
    }

    

    render(){
        let subMenu = null

        if(this.props.submenu.length > 0){
            const style = {
                transform: "translateY(40px) translateX("+  60 * ( this.props.index) + "%)" 
            }
            subMenu = (<div className={classes.dropdown} style={style}>
                {this.props.submenu.map(menu=>(
                    <NavLink 
                        activeClassName={classes.active} 
                        className={classes.subMenu} 
                        to={this.props.to + menu.to}
                        onMouseOver={this.onMouseEnter}
                        key={menu.name}
                        onMouseOut={(e)=>this.onMouseLeave(e)}
                        >
                            {menu.name}
                    </NavLink>
                ))}
            </div>)
                
        }
        return (
            <Aux>
                <NavLink 
                    activeClassName={classes.active} 
                    className={classes.Menu} 
                    to={this.props.to}
                    onMouseOver={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    >
                        {this.props.name} {subMenu == null ? "" : 
                            <span className={classes.arrow}>&#9660;</span>}
                </NavLink>
                {this.state.dropdownOpen ? subMenu : null}
            </Aux>
            
        )
    }
}

export default Menu