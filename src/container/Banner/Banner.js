import React from 'react';
import Button from '../../component/Button/Button';
import classes from './Banner.module.css';


const Banner = () => {
    return (
        <div className={classes.Banner}>
            <img id="img1" src="https://cdn.shopify.com/s/files/1/2060/5733/files/PP-RM_BANNERS_no_CTA_1.jpg?v=1589526319"></img>
            <div className={classes.innerButton}>
                <Button buttonName="TRY RADIANCY"></Button>
            </div>
            <img id="img2" src="https://cdn.shopify.com/s/files/1/2060/5733/files/PP-RM_BANNERS_mobile_no_CTA_1.jpg?v=1589526319"></img>
        </div>
    )
}

export default Banner;