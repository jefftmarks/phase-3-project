import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import './MenuPage.css'

function MenuPage ({ activeUser }) {
	const [menu, setMenu] = useState({});
	const [date, setDate] = useState("");
	const [profile, setProfile] = useState({})
	const [isActiveUser, setIsActiveUser] = useState(false);
	const [like, setLike] = useState(false);

	const params = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		fetch(`http://localhost:9292/menus/${params.menu_id}`)
			.then(res => res.json())
			.then(menu => {
				setMenu(menu);
				setProfile(menu.user)

				const date = new Date(menu.date);
				setDate(date.toDateString());

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
			{menu && date ? (

				<div>

					<div className="menu-page-container-div">
						{like ? (
							<button className="like-button" style={{padding: "3px"}} onClick={handleDislike}>
								Unlike Menu <BsSuitHeartFill style={{marginBottom: "-2px", color:"red" }}/>
								</button>
						) : (
							<button style={{padding: "3px"}} onClick={handleLike}>
								Like Menu <BsSuitHeart style={{marginBottom: "-2px"}}/>
								</button>
						)}
						
						<br />
						<img className="menu-page-img" src={menu.image_url} alt="menu" style={{height: "200px", width: "auto"}}/>
						<h1 className="menu-page-title">{menu.name}</h1>

						{!isActiveUser ? (

							<h3>
								by <Link to={`/user/${profile.username}`}>{profile.first_name} {profile.last_name}</Link>
							</h3>

						) : null}
						
						<p>{date}</p>
						<p><em>{menu.description}</em></p>

						{menu.courses.map(course => (
							<div  key={course.id}>
								<h2>{course.category}</h2>

								{course.dishes.map(dish => (
									<div key={dish.id}>
										<h3>{dish.name}</h3>
										<p>{dish.description}</p>
										<p>Ingredients: {dish.ingredients}</p>
									</div>
								))}
							</div>
						))}
					</div>

					{isActiveUser ? (
						<>
							<button onClick={handleDeleteMenu}>Delete Menu</button>
						</>
					) : null}

				</div>	

			) : null}
		</div>
	)
}

export default MenuPage