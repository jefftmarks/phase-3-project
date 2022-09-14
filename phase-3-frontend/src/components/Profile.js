import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function Profile ({ activeUser }) {

	return ( 
    <div>
			{activeUser ? (
				<>
					<Link to={`/edit-user/${activeUser.username}`}><button>Edit Profile</button></Link>
					<h1>{activeUser.first_name}'s Profile</h1>
					<img
					src={activeUser.image_url}
					alt="profile"
					style={{height: "200px", width: "auto"}}
					/>
				</>
			) : null}
    </div>    
  )
}

export default Profile;