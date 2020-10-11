import React from 'react';
import classes from './NavItem.module.css';

const NavItem = (props) => {
    return (
        <li>
            <a 
            href={props.linkTo} 
            data-scroll
            className={classes.navItem}
            target={props.target}>{props.navName}
            </a>
        </li>
    )
}

export default NavItem;