import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './NavBar.css';
import { FiPlus } from "react-icons/fi";


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
  	<div>
			{activeUser ? (
				<div className="navbar-div">
					<div className="nav-item-container">
						<div className="nav-pic"
							style={{backgroundImage: `url(${activeUser.image_url})`}}
						>
						</div>
						<Link to={`/user/${activeUser.username}`}>
							<button className="nav-item">Profile</button>
						</Link>
						<Link to={"/"}>
							<button className="nav-item">Feed</button>
							</Link> 
						<Link to={"/create-menu"}>
							<button className="nav-item">
								Create Menu <FiPlus size="15" style={{marginBottom: "-2.5"}} />
							</button>
						</Link>
						<button className="nav-item" onClick={handleLogout}>Log Out</button>
					</div>	
				</div>
			) : null}
    </div>
    
	)
}

export default NavBar;