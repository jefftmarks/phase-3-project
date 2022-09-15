import React from "react";
import { Link } from "react-router-dom";
import './FeedCard.css'


function FeedCard({ menu }) {
    const {image_url, name, date, id, user, description} = menu

		const formattedDate = new Date(date);


    return (
        <div className="menu-container">
					<div className="menu-card">
						<h1>{user.first_name}'s {name}</h1>
						<p>Published {formattedDate.toDateString()}</p>
            <Link to={`/menu/${id}`}>
							<img className="menu-image" src={image_url} alt="menu"/>
						</Link>
						<p className="description">{description}</p>
						<div className="divider"></div>
					</div>
        </div>

    )
}

export default FeedCard