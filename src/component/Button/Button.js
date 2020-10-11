import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <li>
            <a 
            href={props.linkTo} 
            data-scroll
            className={classes.buttonLink}
            >{props.buttonName}
            </a>
        </li>

    )
}

export default Button;