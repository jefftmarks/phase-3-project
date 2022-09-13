import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


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
        {profile ? <h1>{profile.first_name}'s Profile</h1> : null} 
    </div>    
  )
}

export default Profile;