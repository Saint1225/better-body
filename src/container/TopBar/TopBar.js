import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import TopBarIcon from '../../component/TopBarIcon/TopBarIcon';
import classes from './TopBar.module.css';

const TopBar = () => {
    return (
        <div className={classes.TopBar}>
            <ul className={classes.icons}>
                <li>
                    <TopBarIcon type='fab' icon='facebook-f' linkto='https://www.facebook.com/'></TopBarIcon>
                </li>
                <li>
                    <TopBarIcon type='fab' icon='youtube' linkto='https://www.youtube.com/'></TopBarIcon>
                </li>
                <li>
                    <TopBarIcon type='fab' icon='instagram' linkto='https://www.instagram.com/'></TopBarIcon>
                </li>
                <li>
                    <TopBarIcon type='fas' icon='envelope' linkto='mailto: contact@betterbody.co'></TopBarIcon>
                </li>
            </ul>

            <ul className={classes.rightMenu}>
                <li>
                    <div className={classes.rightPhone} style={{width: '140px'}}>
                        <FontAwesomeIcon icon='phone-alt' size='1x'></FontAwesomeIcon>
                        <p>(844)707-7730</p>
                    </div>                    
                </li>
                <li>
                    <div className={classes.rightItem} style={{width: '80px'}}>
                        <FontAwesomeIcon icon='user' size='1x'></FontAwesomeIcon>
                        <p>LOGIN</p>
                    </div>
                </li>
                <li>
                    <div className={classes.rightItem} style={{width: '60px'}}>
                        <FontAwesomeIcon icon='shopping-cart' size='1x'></FontAwesomeIcon>
                        <p>0</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default TopBar;