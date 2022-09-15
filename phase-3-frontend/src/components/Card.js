import React from "react";
import { Link } from "react-router-dom";
import './Card.css'


function Card({ menu }) {
    const {image_url, name, description, date, id, user} = menu

		const formattedDate = new Date(date);


    return (
        <div className="menu-images">
						<p>{formattedDate.toDateString()}</p>
            <Link to={`/menu/${id}`}><img className="menu-image" src={image_url} alt="menu"/></Link>
						<p>{user.first_name}'s {name}</p>
        </div>

    )
}

export default Card