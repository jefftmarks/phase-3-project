import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsQuestionSquare } from "react-icons/bs";


function SignUp ({ activeUser, setActiveUser }) {
	const initialValues = {
		first_name: "",
		last_name: "",
		username: "",
		password: "",
		image_url: "",
	};

	const [formData, setFormData] = useState(initialValues);
	const [confirmedPassword, setConfirmedPassword] = useState("");
	const [passwordsMatch, setPasswordsMatch] = useState(false);

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

	useEffect(() => {
		if (
			formData.password === confirmedPassword
			&& formData.password !== ""
			&& formData.password.length >= 5
		) {
			setPasswordsMatch(true);
		} else {
			setPasswordsMatch(false);
		}
	}, [confirmedPassword, formData.password]);

	function handleSubmit(event) {
		event.preventDefault();
		fetch("http://localhost:9292/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then(res => res.json())
			.then(user => {
				setActiveUser(user);
				setFormData(initialValues);
				navigate(`/user/${user.username}`);
			})
			.catch(e => console.error(e));
	}

	return ( 
    <div style={{border: "1px solid black"}}>
        <h1>Create an Account</h1>

				<form onSubmit={handleSubmit}>

				<label htmlFor="signup-firstname">first name:</label>
				<input
					required
					id="signup-firstname"
					type="text"
					name="first_name"
					value={formData.first_name}
					onChange={handleChange}
				/>

				<br />

				<label htmlFor="signup-lastname">last name:</label>
				<input
					required
					id="signup-lastname"
					type="text"
					name="last_name"
					value={formData.last_name}
					onChange={handleChange}
				/>

				<br />

				<label htmlFor="signup-username">username:</label>
				<input
					required
					id="signup-username"
					type="text"
					name="username"
					pattern="^[A-Za-z0-9_]{5,20}$"
					value={formData.username}
					onChange={handleChange}
				/>
				<span className="tip"><BsQuestionSquare />
					<span className="tip-text"> 5-20 characters, no special characters except underscore</span>
				</span>

				<br />

				<label htmlFor="signup-image-url">profile image:</label>
				<input
					required
					id="signup-image-url"
					type="image-url"
					name="image_url"
					value={formData.image_url}
					onChange={handleChange}
				/>

				 <br />

				<label htmlFor="signup-password">password:</label>
				<input
					required
					id="signup-password"
					type="password"
					name="password"
					pattern="^[A-Za-z0-9]{5,15}$"
					value={formData.password}
					onChange={handleChange}
				/>
				<span className="tip"><BsQuestionSquare />
					<span className="tip-text"> 5-15 characters, no special characters</span>
				</span>

				 <br />

				<label
				 	htmlFor="confirm-password"
					style={passwordsMatch ? { color: "green"} : { color: "red"}}
				>
					confirm password:
				</label>
				<input
					required
					id="confirm-password"
					type="password"
					name="confirim-password"
					pattern="^[A-Za-z0-9]{5,15}$"
					value={confirmedPassword}
					onChange={(event) => setConfirmedPassword(event.target.value)}
				/>

				 <br />
	
				<input type="submit" value="submit" disabled={!passwordsMatch}/>
			</form>

			<Link to="/login">Back to login</Link>

    </div>    
  )
}

export default SignUp 