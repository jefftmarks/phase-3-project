import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ setActiveUser, activeUser }) {
	const initialValues = {username: "", password: ""};
	const [formData, setFormData] = useState(initialValues);

	const navigate = useNavigate();

	useEffect(() => {
		if (activeUser) {
			navigate("/");
		}
	},[activeUser, navigate])

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData(formData => ({...formData, [name]: value}))
	}

	function handleSubmit(event) {
		event.preventDefault();
		fetch(`http://localhost:9292/find_by_username/${formData.username}`)
			.then(res => res.json())
			.then(user => handleLogin(user))
			.catch(e => console.error(e))
		setFormData(initialValues)
	}

	function handleLogin(user) {
		if (!user) {
			alert("Username does not exist");
		} else if (formData.password !== user.password) {
			alert("Password incorrect");
		} else {
			fetch(`http://localhost:9292/users/${user.id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...user,
					is_active: true
				}),
			})
				.then(res => res.json())
				.then(user => {
					setActiveUser(user);
					navigate("/")
				})
				.catch(e => console.error(e))
		}
	}

	return ( 
    <div style={{border: "1px solid black"}}>
			<h1>Login</h1>
			
			<form onSubmit={handleSubmit}>

				<label htmlFor="login-username">username:</label>
				<input
					required
					id="login-username"
					type="text"
					name="username"
					value={formData.username}
					onChange={handleChange}
				/>

				<br />

				<label htmlFor="login-password">password:</label>
				<input
					required
					id="login-password"
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
				/>

				 <br />
	
				<input type="submit" value="submit"/>
			</form>

			<Link to="/signup">Don't have an account? Sign up</Link>

    </div>    
	)
}

export default Login ;