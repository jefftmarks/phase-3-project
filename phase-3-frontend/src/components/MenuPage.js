import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function MenuPage ({ activeUser }) {
	const [menu, setMenu] = useState({});
	const [date, setDate] = useState("");
	const [profile, setProfile] = useState({})
	const [isActiveUser, setIsActiveUser] = useState(false);

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
					}
				}
			})
			.catch(e => console.error(e))
	}, [params, activeUser])

	function handleDeleteMenu() {
		fetch(`http://localhost:9292/menus/${params.menu_id}`, {
			method: "DELETE",
		})
			.then(res => res.json)
			.then(() => navigate(`/user/${activeUser.username}`))
			.catch(e => console.error(e));
	}


	return (
		<div>
			{menu && date ? (

				<div>

					<div style={{border: "1px solid black"}}>
						<img src={menu.image_url} alt="menu" style={{height: "200px", width: "auto"}}/>
						<h1>{menu.name}</h1>

						{!isActiveUser ? (

							<h3>
								by <Link to={`/user/${profile.username}`}>{profile.first_name} {profile.last_name}</Link>
							</h3>

						) : null}
						
						<p>{date}</p>
						<p><em>{menu.description}</em></p>

						{menu.courses.map(course => (
							<div style={{border: "1px solid black"}} key={course.id}>
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
							{/* <Link to={`/edit-menu/${menu.id}`}><button>Edit Menu</button></Link> */}
							<button onClick={handleDeleteMenu}>Delete Menu</button>
						</>
					) : null}

				</div>	

			) : null}
		</div>
	)
}

export default MenuPage