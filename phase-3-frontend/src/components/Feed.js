import React from "react";

function Feed ({ activeUser }) {

	return (
		<div>
			{activeUser ? <h1>{activeUser.first_name}'s Feed</h1> : null }
		</div>    
	)
}

export default Feed;