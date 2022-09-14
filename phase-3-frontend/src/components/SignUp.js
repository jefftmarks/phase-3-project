import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './SignUp.css'


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

		fetch(`http://localhost:9292/find_by_username/${formData.username}`)
			.then(res => res.json())
			.then(data => {
				if (data) {
					alert("username already exists");
					setFormData(initialValues);
					setConfirmedPassword("");
				} else {
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
			})
	}




    return (
      <div className="signup-whole">
        <div className="signup-banner">
          <div className="signup-banner-content">
            <div className="signup-title">Create an Account</div>
          </div>
        </div>
        <div className="signup-container">
          <div className="signup-screen">
            <div className="signup-screen__content">
              <form className="signup" onSubmit={handleSubmit}>
                <div className="signup-align-div">
                  <div className="signup__field">
                    <i className="signup__icon fa fa-user"></i>
                    <input
											required
                      type="email"
                      className="signup__input"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="signup__field">
                    <i className="signup__icon fas fa-user"></i>
                    <input
                      required
                      type="text"
                      className="signup__input"
                      name="first_name"
                      placeholder="First Name"
                      value={formData.first_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="signup__field">
                    <i className="signup__icon fas fa-user"></i>
                    <input
                      required
                      type="text"
                      className="signup__input"
                      name="last_name"
                      value={formData.last_name}
                      placeholder="Last Name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="signup__field tip">
                    <i className="signup__icon fas fa-user"></i>
                    <input
                      required
                      type="text"
                      className="signup__input"
                      name="username"
                      value={formData.username}
                      placeholder="Username"
                      onChange={handleChange}
											pattern="^[A-Za-z0-9]{8,20}$"
                    />
										<br/>
										<small>8-20 characters, no symbols</small>
                  </div>
                  <div className="signup__field">
                    <i className="signup__icon fas fa-lock"></i>
                    <input
                      type="image-url"
                      className="signup__input"
                      name="image_url"
                      placeholder="Profile Image"
                      value={formData.image_url}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="signup__field tip">
                    <i className="signup__icon fas fa-lock"></i>
                    <input
                      required
                      type="password"
                      className="signup__input"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
											pattern="^[A-Za-z0-9]{8,20}$"
                    />
										<br/>
										<small>8-20 characters, no symbols</small>
                  </div>
									<div className="signup__field">
									{passwordsMatch ? "✓" : "X"}
                    <input
                      required
                      type="password"
                      className="signup__input"
                      name="confirm-password"
                      placeholder="Confirm Password"
											pattern="^[A-Za-z0-9]{8,20}$"
											value={confirmedPassword}
											onChange={(event) => setConfirmedPassword(event.target.value)}
                    />
                  </div>										
                
                <div className="signup-help-me">
                </div>

				<div className="submit-register">
                <i className="button__iconnew "></i>
                <input
                  type="submit"
                  value="REGISTER"
                  className="signup__submit"
                  disabled={!passwordsMatch}
                />
				</div>
				</div>
              </form>
              <Link to="/login" className="back-to-login">
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
	
    );
}


export default SignUp