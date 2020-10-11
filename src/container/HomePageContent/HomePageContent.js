import React from 'react';
import {Helmet} from 'react-helmet';

import classes from './HomePageContent.module.css';

const HomePageContent = () => {
    return (
        <div className={classes.homePageContent}>
            <Helmet>
                <meta name="BetterBody" content="Recreated webpage" />
                <title>BetterBody</title>
                <link rel="canonical" href="https://betterbody.co/" />
            </Helmet>
            <div>
                <div>
                    <h1>Why Women All Around The World Are Raving 
                        About This New Probiotic-Marine Collagen</h1>
                    <div className={classes.whyWomen}>
                        <div className={classes.whyWomenItem}>
                            <img src="https://cdn.shopify.com/s/files/1/2060/5733/t/23/assets/mel-b.jpg" alt=""></img>
                            <h2>My skin tone and youthfulness improved with just a few tablets a day!</h2>
                            <h3>- Mel B</h3>
                        </div>
                        <div className={classes.whyWomenItem}>
                            <img src="https://cdn.shopify.com/s/files/1/2060/5733/t/23/assets/pamela-h.jpg" alt=""></img>
                            <h2>The unique combination of ingredients - marine collagen, probiotics and cherry blossom - makes this different</h2>
                            <h3>- Pamela H</h3>
                        </div>
                        <div className={classes.whyWomenItem}> 
                            <img src="https://cdn.shopify.com/s/files/1/2060/5733/t/23/assets/bobbi-h.jpg" alt=""></img>
                            <h2>My new beauty regime now - exercise, eat well and definitely take Radiancy</h2>
                            <h3>- Bobbi H</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1>Ageing Gracefully Shouldn’t Be This Hard!</h1>
                    <div>
                        <div>
                            <div>
                                <p>The subtle signs of aging skin can catch many ladies by surprise. Oftentimes, ladies only start to take their skincare routine more seriously after spotting their first wrinkle.</p>
                                <br></br>
                                <p>By then the skin damage has already begun… and menopause amplifies the effects.</p>
                                <br></br>
                                <p>The decline in estrogen levels can lead to a whole range of skin-related issues such as:</p>
                            </div>
                            <img src="https://cdn.shopify.com/s/files/1/2060/5733/t/23/assets/infographic_1.jpg" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            <div id="how-it-works">
                <div>
                    <h1>The Science Behind Menopausal Skin Issues - Why Some Ladies Look Older Than They Actually Are</h1>
                    <div>
                        <div>
                            <div>
                                <p>The skin is made up of 3 main layers & the health of each layer impacts the overall look and feel of our skin.</p>
                                <br></br>
                                <p>During menopause, the fluctuating estrogen levels causes each layer to deteriorate over time:</p>
                            </div>
                            <img src="https://cdn.shopify.com/s/files/1/2060/5733/t/23/assets/infographic_cake_desktop.jpg?v=1587461286" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1>Dry Skin, Dark Spots & Fine Lines? Blame The Epidermis</h1>
                <div>
                    <div>
                        <div>
                            <p>Common Skin Issues Caused: <b> “Age spots” & Dry, flakey skin</b></p>
                            <br></br>
                            <div className={classes.spots}>
                                <div className={classes.whyAgeSpots}>
                                    <p style={{margin: '0'}}>Why Does It Happen?</p>
                                    <br></br>
                                    <p style={{margin: '0'}}>Age spots” are caused by prolonged exposure to UV light from the sun - which may cause Vitamin E (a natural UV skin protector) levels to decrease.</p>
                                    <br></br>
                                    <p style={{margin: '0'}}> UV light may also increase the free radicals (cell-destroyers) in the skin’s epidermis level. This may lead to dryness and flaking as we age.</p>
                                </div>
                                <img className={classes.ageSpots} src="https://cdn.shopify.com/s/files/1/2060/5733/t/23/assets/infographic_3.jpg?v=1587463458" alt=""></img>
                            </div>
                        </div>
                        <div id="img1" style={{width: "82%", margin: "auto"}}>
                            <img src="https://cdn.shopify.com/s/files/1/2060/5733/t/23/assets/infographic_4_desktop.jpg" alt=""></img>
                        </div>
                        <div id="img2" style={{width: "82%", margin: "auto"}}>
                            <img src="https://cdn.shopify.com/s/files/1/2060/5733/t/23/assets/infographic_4_mobile.jpg" alt=""></img>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Low hyaluronic acid levels is another big issue that causes dryness.</p>
                    <br></br>
                    <p>Hyaluronic acid is a naturally-occurring substance in the skin that’s known for it’s amazing capacity to hold onto 1000x its weight in moisture.</p>
                    <br></br>
                    <p>Simply put, it is what keeps the skin bouncy and supple.</p>
                    <br></br>
                    <p>The bad news is that research suggests that hyaluronic acid levels decline over time… causing the skin to look pale and dry as years pass.</p>
                </div>
            </div>
            <div>
                <div>
                    <h1>Deep Sagging & Wrinkles? It’s Likely Your Dermis...</h1>    	
                    <div> 
                        <div>
                            <div>
                                <p>Common Skin Issues Caused: “Age spots” & Dry, flakey skin</p>
                                <br></br>
                                <p>Why Does It Happen?</p>
                                <br></br>
                                <p>Wrinkles and sagging skin are a result of 2 factors in the dermis layer:</p>
                            </div>
                        </div>
                        <div className={classes.spots}>
                            <div className={classes.ageSpots}>
                                <img src="https://cdn.shopify.com/s/files/1/2060/5733/t/23/assets/infographic_5.jpg?v=1587482310" alt=""></img>
                            </div>
                            <div className={classes.whyAgeSpots}>
                                <p style={{marginTop: "10%"}}>1. Low collagen levels</p>
                                <br></br>
                                <p>If the skin was a mattress, collagen are the springs that are holding it up. The higher the number of springs, the more even the surface of the mattress.</p>
                                <br></br>
                                <p>However, as we age, collagen levels drop… which leads to lesser support to hold up the skin.</p>
                            </div>
                        </div>
                        <br></br>
                        <div className={classes.spots}>           
                            <div className={classes.whyAgeSpots}>
                                <p>2. High glycation levels</p>
                                <br></br>
                                <p>Glycation is one of the main causes of skin aging.</p>
                                <br></br>
                                <p>It occurs when excess sugar we ingest reacts with collagen - and binds to it.</p>
                                <br></br>
                                <p>It’s like rust coating the springs (collagen) in the mattress (skin), and over time, the springs get destroyed — leading to uneven support for the skin.</p>
                                <br></br>
                                <p>Low collagen and high glycation collectively lead to deep wrinkles and sagging skin as we age.</p>
                            </div>
                            <div className={classes.ageSpots}>
                                <img src="https://cdn.shopify.com/s/files/1/2060/5733/t/23/assets/infographic_6.jpg?v=1587482327" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageContent;