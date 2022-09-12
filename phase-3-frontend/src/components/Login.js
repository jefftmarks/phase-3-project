import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
	const initialValues = {username: "", password: ""};
	const [formData, setFormData] = useState(initialValues)

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData(formData => ({...formData, [name]: value}))
	}

	function handleSubmit(event) {
		event.preventDefault();
		
		setFormData(initialValues)
	}

	return ( 
    <div style={{border: "1px solid black"}}>
			<h1>Login</h1>
			
			<form onSubmit={handleSubmit}>

				<label htmlFor="login-username">username: 
				<input
					required
					id="login-username"
					type="text"
					name="username"
					value={formData.username}
					onChange={handleChange}
				/>
				</label>

				<br />

				<label htmlFor="login-password">password:
				<input
					required
					id="login-password"
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
				/>
				 </label>

				 <br />
	
				<input type="submit" value="submit"/>

				<br />

				<Link to="/signup">Don't have an account? Sign up</Link>

			</form>
    </div>    
	)
}

export default Login ;