import React from "react";
import { Link } from "react-router-dom";
import './FeedCard.css'
import './MenuCard.css'

function MenuCard({ menu, tag }) {

	const formattedDate = new Date(menu.date);

	

	return (
		<>
		<div className={`${tag}-images`}>
			<h4 className={`${tag}-captions`}>{`${menu.name} | ${formattedDate.toDateString()} `}</h4>
			<Link to={`/menu/${menu.id}`}>
				<img 
					src={menu.image_url}
					alt="menu"
					className={`${tag}-card-image`}
					style={{height: "200px", width: "auto"}}
				/>
			</Link>
		</div>
		
		</>
		
	)
}

export default MenuCard;