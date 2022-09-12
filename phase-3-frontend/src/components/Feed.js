import React, { useState, useEffect } from "react";

function Feed () {

	useEffect(() => {
		fetch("http://localhost:9292/find_active_user")
			.then(res => res.json())
			.then(user => console.log(user))
			.catch(e => console.error(e))
	},[])


	return ( 
		<div>
			<h1>Feed</h1> 
		</div>    
	)
}

export default Feed;