import React from "react";

function Feed ({ activeUser }) {

	return (
		<div>
			<h1>{activeUser.first_name}'s Feed</h1>
		</div>    
	)
}

export default Feed;