import React from "react";
import { Link, useNavigate } from "react-router-dom";


function NavBar({ activeUser, setActiveUser })  {
	const navigate = useNavigate();

	function handleLogout() {
		fetch(`http://localhost:9292/users/${activeUser.id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...activeUser,
					is_active: false
				})
			})
				.then(res => res.json())
				.then(user => {
					setActiveUser(null);
					navigate("/login")
				})
				.catch(e => console.error(e))
	}

	return (
  	<div style={{border: "1px solid black"}}>
      <h2>navbar</h2> 
			{activeUser ? (
				<>
					<button onClick={handleLogout}>Log Out</button>
					<Link to={`/user/${activeUser.username}`}><button>Profile</button></Link>
					<Link to={"/"}><button>Feed</button></Link>
				</>	
			) : null}
    </div>
    
	)
}

export default NavBar