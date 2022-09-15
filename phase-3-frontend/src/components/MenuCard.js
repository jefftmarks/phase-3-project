import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

function MenuCard({ menu }) {

	const formattedDate = new Date(menu.date);

	return (
		<>
		<div className="menu-images">
			<h4>{`${menu.name} | ${formattedDate.toDateString()} `}</h4>
			<Link to={`/menu/${menu.id}`}>
				<img
					src={menu.image_url}
					alt="menu"
					className="menu-image"
					style={{height: "200px", width: "auto"}}
				/>
			</Link>
		</div>
		</>
	)
}

export default MenuCard;