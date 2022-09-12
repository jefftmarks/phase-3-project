import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Feed () {

	const navigate = useNavigate();

	// When homepage loads, if no active user, navigate to login page
	useEffect(() => {
		fetch("http://localhost:9292/users/find_active")
			.then(res => res.json())
			.then(user => {
				if (user.length > 0) {
					console.log(user)
				}
				else {
					navigate("/login")
				}
			})
			.catch(e => console.error(e))
	},[navigate])

	return ( 
		<div>
			<h1>Feed</h1> 
		</div>    
	)
}

export default Feed;