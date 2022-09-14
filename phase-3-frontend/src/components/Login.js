import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

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
    <div className="login-whole">
      <div className="login-banner">
        <div className="login-banner-content">
          <img className="plate-icon" src="/bowl-spoon.png"></img>
          <div className="title">PLATES</div>
        </div>
      </div>
      <div className="login-container">
        <div className="login-screen">
          <div className="login-screen__content">
            <form className="login" onSubmit={handleSubmit}>
              <div className="login-align-div">
                <div className="login-input-group-prepend"></div>
                <div className="login-field">
                  <i className="login__icon fas fa-user"></i>
                  <input
                    required
                    type="text"
                    className="login__input"
                    placeholder="Username"
                    id="login-username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="login-input-group mb-3">
                  <div className="login- input-group-prepend">
                    <span className="login-input-group-text"></span>
                  </div>
                  <div className="login-field">
                    <i class="fa fa-lock"></i>
                    <input
                      required
                      type="password"
                      className="login__input"
                      placeholder="Password"
                      id="login-password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <input type="submit" className="login-btn" value="Login" />
              <div className="login-message"></div>
            </form>
            <Link to="/signup" className="signup-link">Don't have an account? Sign up</Link>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );

}



	
	export default Login ;




	// 	return ( 
	//     <div className="login-container">
	// 			<h1>Login</h1>
				
	// 			<form onSubmit={handleSubmit}>
	
	// 				<label htmlFor="login-username">username:</label>
	// 				<input
	// 					required
	// 					id="login-username"
	// 					type="text"
	// 					name="username"
	// 					value={formData.username}
	// 					onChange={handleChange}
	// 				/>
	
	// 				<br />
	
	// 				<label htmlFor="login-password">password:</label>
	// 				<input
	// 					required
	// 					id="login-password"
	// 					type="password"
	// 					name="password"
	// 					value={formData.password}
	// 					onChange={handleChange}
	// 				/>
	
	// 				 <br />
		
	// 				<input type="submit" value="submit"/>
	// 			</form>
	
	// 			<Link to="/signup">Don't have an account? Sign up</Link>
	
	//     </div>    
	// 	)
	// }\