import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import './MenuPage.css'

function MenuPage ({ activeUser }) {
	const [menu, setMenu] = useState(null);
	// const [date, setDate] = useState("");
	const [profile, setProfile] = useState({})
	const [isActiveUser, setIsActiveUser] = useState(false);
	const [like, setLike] = useState(false);

	const params = useParams();

	const navigate = useNavigate();

	let publishedDate;
	let platedDate;

	if (menu) {
		publishedDate = new Date(menu.created_at);
		platedDate = new Date(menu.date);
	}

	useEffect(() => {
		fetch(`http://localhost:9292/menus/${params.menu_id}`)
			.then(res => res.json())
			.then(menu => {
				setMenu(menu);
				setProfile(menu.user)

				if (activeUser) {
					if (menu.user_id === activeUser.id) {
						setIsActiveUser(true)
					} else {
						const like = menu.likes.find(like => {
							return like.user_id === activeUser.id;
						})
						setLike(like)
					}
				}
			})
			.catch(e => console.error(e))
	}, [params, activeUser])


	function handleDeleteMenu() {
		fetch(`http://localhost:9292/menus/${params.menu_id}`, {
			method: "DELETE",
		})
			.then(res => res.json())
			.then(() => navigate(`/user/${activeUser.username}`))
			.catch(e => console.error(e));
	}


	function handleLike() {
		const newLike = {user_id: activeUser.id, menu_id: menu.id}

		fetch("http://localhost:9292/likes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newLike),
		})
			.then(res => res.json())
			.then(newLike => setLike(newLike))
			.catch(e => console.error(e));
	}


	function handleDislike() {
		fetch(`http://localhost:9292/likes/${like.id}`, {
			method: "DELETE",
		})
			.then(res => res.json())
			.then(data => {
				setLike(false);
			})
			.catch(e => console.error(e));
	}

	return (
		<div>
			{menu ? (

				<div>

					<div className="menu-page-container-div">
						{isActiveUser ? null : (
							<>
							{like ? (
								<button className="like-button" onClick={handleDislike}>
									Unlike Menu <BsSuitHeartFill style={{marginBottom: "-2px", color:"red" }}/>
									</button>
							) : (
								<button className="like-button" onClick={handleLike}>
									Like Menu <BsSuitHeart style={{marginBottom: "-2px"}}/>
									</button>
							)}
							
							<br />
							</>
						)}

						<img className="menu-page-img" src={menu.image_url} alt="menu" style={{height: "200px", width: "auto"}}/>
						<h1 className="menu-page-title">{menu.name}</h1>

						{!isActiveUser ? (

							<h3 className="dish-name">
								by <Link to={`/user/${profile.username}`}>{profile.first_name} {profile.last_name}</Link>
							</h3>

						) : null}
						
						<p className="small-text-menu">Plated on {platedDate.toDateString()}</p>
						<p className="small-text-menu"><em>{menu.description}</em></p>

						{menu.courses.map(course => (
							<div key={course.id}>
								<h2 className="menu-page-category">{course.category}</h2>

								{course.dishes.map(dish => (
									<div key={dish.id}>
										<h3 className="dish-name">{dish.name}</h3>
										<p className="small-text-menu">{dish.description}</p>
										<p className="small-text-menu">Ingredients: {dish.ingredients}</p>
									</div>
								))}
							</div>
						))}
						<p className="small-date-menu">Published {publishedDate.toDateString()}</p>

						{isActiveUser ? (
							<button onClick={handleDeleteMenu} className="delete-button">Delete Menu</button>
						) : null}

					</div>

					

				</div>	

			) : null}
		</div>
	)
}

export default MenuPage