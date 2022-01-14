import React, { useState } from "react";
import { Slide } from "react-slideshow-image";

const Slideshow = () => {

    const slideImages = [
        './images/slide_2.jpg',
        './images/slide_3.jpg',
        './images/slide_4.jpg'
    ];

    const style = {
        textAlign: "center",
        background: "teal",
        padding: "200px 0",
        fontSize: "30px",
    }

    return (
        <div>
            <div>
                <Slide easing="ease" autoplay={true}>
                    <div style={style}>
                        <div style={{'backgroundImage': `url(${slideImages[0]})`}}/>
                    </div>
                    <div style={style}>
                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}/>
                    </div>
                    <div style={style}>
                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}/>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Slideshow;