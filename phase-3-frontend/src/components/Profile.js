import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MenuCard from "./MenuCard";
import "./Profile.css"


function Profile ({ activeUser }) {
	const [profile, setProfile] = useState({})
	const [menus, setMenus] = useState([])
	const [isActiveUser, setIsActiveUser] = useState(false)
	
	const params = useParams();

	useEffect(() => {
		fetch(`http://localhost:9292/find_by_username/${params.username}`)
			.then(res => res.json())
			.then(user => {
				setProfile(user);
				setMenus(user.menus);
				if (activeUser) {
					if (user.id === activeUser.id) {
						setIsActiveUser(true)
					}
				}
			})
	},[activeUser, params])

	return ( 
    <div className="profile-container">
			{profile ? (

				<>
					<h1>{isActiveUser ? "Your Profile |" : null } {`${profile.first_name} ${profile.last_name}`}</h1>
					{isActiveUser ? (
						<Link to={`/edit-user/${profile.username}`}><button className="edit-button">Edit Profile</button></Link>
					) : null}
					<br/>
					<img
					src={profile.image_url}
					alt="profile"
					style={{height: "200px", width: "auto"}}
					/>

					<h2>{isActiveUser ? "Your Menus" : `${profile.first_name}'s Menus`}</h2>

					<div>
						{menus.map(menu => (
							<MenuCard key={menu.id} menu={menu} />
						))}
					</div>

				</>

			) : null}
    </div>    
  )
}

export default Profile;