import React from "react";
import { Link } from "react-router-dom";
import './FeedCard.css'


function FeedCard({ menu }) {
    const {image_url, name, date, id, user} = menu

		const formattedDate = new Date(date);


    return (
        <div className="menu-card">
						<p>{formattedDate.toDateString()}</p>
            <Link to={`/menu/${id}`}><img className="menu-image" src={image_url} alt="menu"/></Link>
						<p>{user.first_name}'s {name}</p>
        </div>

    )
}

export default FeedCard