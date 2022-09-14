import React from "react";
import { Link } from "react-router-dom";

function MenuCard({ menu }) {
	return (
		<div>
			<Link to={`/menu/${menu.id}`}>
				<img src={menu.image_url} alt="menu" style={{height: "200px", width: "auto"}}/>
			</Link>
			<h4>{menu.name}</h4>
		</div>
	)
}

export default MenuCard;