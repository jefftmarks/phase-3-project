import React from "react";
import './Card.css'
import Carousel from "better-react-carousel";


function Card({ menu }) {
    const {image_url, name, description, date, id} = menu

    return (
        <div className="menu-images">
            <img className="menu-image" src={image_url} />
        </div>

    )
}

export default Card 