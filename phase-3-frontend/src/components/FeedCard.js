import React from "react";
import { Link } from "react-router-dom";
import './FeedCard.css'


function FeedCard({ menu }) {
    const {image_url, name, id, user, date, description, created_at} = menu

		const publishedDate = new Date(created_at);

		const platedDate = new Date(date);


    return (
        <div className="menu-container">
					<div className="menu-card">
						<h1>{user.first_name}'s {name}</h1>
						<p>Published {publishedDate.toDateString()}</p>
            <Link to={`/menu/${id}`}>
							<img className="menu-image" src={image_url} alt="menu"/>
						</Link>
						<p className="plated">Plated by {user.first_name} on {platedDate.toDateString()}</p>
						<p className="description">{description}</p>
						<div className="divider"></div>
					</div>
        </div>

    )
}

export default FeedCard