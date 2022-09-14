import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MenuCard from "./MenuCard";


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
    <div>
			{profile ? (

				<>
					{isActiveUser ? (
						<Link to={`/edit-user/${profile.username}`}><button>Edit Profile</button></Link>
					) : null}
				
					<h1>{profile.first_name}'s Profile</h1>
					<img
					src={profile.image_url}
					alt="profile"
					style={{height: "200px", width: "auto"}}
					/>

					<h2>menus:</h2>

					{menus.map(menu => (
						<MenuCard key={menu.id} menu={menu} />
					))}

				</>

			) : null}
    </div>    
  )
}

export default Profile;