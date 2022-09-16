import React from "react";
import { Link } from "react-router-dom";
import './FeedCard.css'
import './MenuCard.css'

function MenuCard({ menu, tag }) {

	return (
		<>
		<div className={`${tag}-images`}>
			<Link to={`/menu/${menu.id}`}>
				<img 
					src={menu.image_url}
					alt="menu"
					className={`${tag}-card-image`}
					style={{height: "200px", width: "auto"}}
				/>
				<p className={`${tag}-captions`}>
					{/* {`${menu.name}Published ${publishedDate.toDateString()} `} */}
					{menu.name}
				</p>
			</Link>
		</div>
		
		</>
		
	)
}

export default MenuCard;