import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function Profile ({ activeUser }) {
	const [profile, setProfile] = useState(null)

	const params = useParams();

	useEffect(() => {
		fetch(`http://localhost:9292/find_by_username/${params.username}`)
		.then(res => res.json())
		.then(user => setProfile(user))
	},[params])

	return ( 
    <div>
			<Link to={`/edit-user/${activeUser.username}`}><button>Edit Profile</button></Link>
			{profile ? (
				<>
					<h1>{profile.first_name}'s Profile</h1>
					<img
						src={profile.image_url}
						alt="profile"
						style={{height: "200px", width: "auto"}}
					/>
				</>
			) : null}
    </div>    
  )
}

export default Profile;