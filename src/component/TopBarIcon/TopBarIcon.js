import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './TopBarIcon.module.css';

const TopBarIcon = (props) => {
    return (
        <div className={classes.icon}>
            <a href={props.linkto} target='_blank' className={classes.link}>
                <FontAwesomeIcon icon={[props.type, props.icon]} size="1x"></FontAwesomeIcon>
            </a>
        </div>

    )
}

export default TopBarIcon;