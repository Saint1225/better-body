import React, {Component} from 'react';

import classes from './NavMenu.module.css';
import NavItem from '../../component/NavItem/NavItem';
import Button from '../../component/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavMenu extends Component {
    state = { burgerMenu: false }

    hamburgerMenuHandler = () => {
        this.setState({
            burgerMenu: !this.state.burgerMenu
        })
    }

    render () {
        let hamburgerClass = [classes.navMenu];
        if (this.state.burgerMenu) {
            hamburgerClass = [classes.navMenu, classes.navMenuActive]
        }

        return (
            <div className={classes.nav}>
                <a href="#pricetable">
                    <img 
                    src="https://cdn.shopify.com/s/files/1/2060/5733/files/Logo_4c_150x_61ec6233-ccec-407c-bddd-fc12e9982cab.png" 
                    alt=""
                    className={classes.leftPic}></img>
                </a>
                <div className={classes.hamburgerMenu} onClick={this.hamburgerMenuHandler}>
                    <FontAwesomeIcon icon="bars" size="2x"></FontAwesomeIcon>
                </div>
                <nav className={classes.navBar}>
                    <ul className={hamburgerClass.join(' ')}>
                        <NavItem linkTo="#how-it-works" navName="How It Works"></NavItem>
                        <NavItem linkTo="#ingredients" navName="Ingredients"></NavItem>
                        <NavItem linkTo="#reviews" navName="Reviews"></NavItem>
                        <NavItem linkTo="#faq" navName="FAQ"></NavItem>
                        <NavItem linkTo="#https://www.betterbodyco.cc/#smile-home" navName="Claim Points" target="_blank"></NavItem>
                        {/* <NavItem linkTo="#pricetable" navName="BUY NOW"></NavItem> */}
                        <Button linkTo="#pricetable" buttonName="BUY NOW"></Button>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavMenu;