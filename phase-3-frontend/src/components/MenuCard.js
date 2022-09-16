import React from "react";
import { Link } from "react-router-dom";
import './FeedCard.css'
import './MenuCard.css'

function MenuCard({ menu, tag }) {

	const publishedDate = new Date(menu.date);

	return (
		<>
		<div className={`${tag}-images`}>
			<Link to={`/menu/${menu.id}`}>
				<fig>
					<img 
						src={menu.image_url}
						alt="menu"
						className={`${tag}-card-image`}
						style={{height: "200px", width: "auto"}}
					/>
					<figcaption className={`${tag}-captions`}>
						{/* {`${menu.name}Published ${publishedDate.toDateString()} `} */}
						{menu.name}
					</figcaption>
				</fig>
			</Link>
		</div>
		
		</>
		
	)
}

export default MenuCard;