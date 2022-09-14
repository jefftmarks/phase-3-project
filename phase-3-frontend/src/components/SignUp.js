import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsQuestionSquare } from "react-icons/bs";
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
                    <i className="signup__icon fas fa-user"></i>
                    <input
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
                      placeholder="Name"
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
                  <div className="signup__field">
                    <i className="signup__icon fas fa-user"></i>
                    <input
                      required
                      type="text"
                      className="signup__input"
                      name="username"
                      value={formData.username}
                      placeholder="Username"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="signup__field">
                    <i className="signup__icon fas fa-lock"></i>
                    <input
                      type="image-url"
                      className="signup__input"
                      name="image_url"
                      placeholder="Image"
                      value={formData.image_url}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="signup__field">
                    <i className="signup__icon fas fa-lock"></i>
                    <input
                      required
                      type="password"
                      className="signup__input"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <span className="tip">
                      <BsQuestionSquare />
                      <span className="tip-text">
                        5-15 characters, no special characters
                      </span>
                    </span>
                  </div>
                  {/*<div className="signup_field">
                    <i className="signup__icon fas fa-lock"></i>
                    <label
                      htmlFor="confirm-password"
                      style={
                        passwordsMatch ? { color: "green" } : { color: "red" }
                      }
                    >
                      confirm password:
                    </label>
                    <input
                      required
                      type="password"
					  id="confirm-"
                      className="signup__input"
                      name="confirm-password"
                      placeholder="Password"
                      value={confirmedPassword}
                      onChange={(event) =>
                        setConfirmedPassword(event.target.value)
                      }
                    /> */}
                
                <div className="signup-help-me">
                </div>
                {/*</div> */}
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

{/*
// 	return ( 
//     <div style={{border: "1px solid black"}}>
//         <h1>Create an Account</h1>

// 				<form onSubmit={handleSubmit}>

// 				<label htmlFor="signup-firstname">first name:</label>
// 				<input
// 					required
// 					id="signup-firstname"
// 					type="text"
// 					name="first_name"
// 					value={formData.first_name}
// 					onChange={handleChange}
// 				/>

// 				<br />

// 				<label htmlFor="signup-lastname">last name:</label>
// 				<input
// 					required
// 					id="signup-lastname"
// 					type="text"
// 					name="last_name"
// 					value={formData.last_name}
// 					onChange={handleChange}
// 				/>

// 				<br />

// 				<label htmlFor="signup-username">username:</label>
// 				<input
// 					required
// 					id="signup-username"
// 					type="text"
// 					name="username"
// 					pattern="^[A-Za-z0-9_]{5,20}$"
// 					value={formData.username}
// 					onChange={handleChange}
// 				/>
// 				<span className="tip"><BsQuestionSquare />
// 					<span className="tip-text"> 5-20 characters, no special characters except underscore</span>
// 				</span>

// 				<br />

// 				<label htmlFor="signup-image-url">profile image:</label>
// 				<input
// 					required
// 					id="signup-image-url"
// 					type="image-url"
// 					name="image_url"
// 					value={formData.image_url}
// 					onChange={handleChange}
// 				/>

// 				 <br />

// 				<label htmlFor="signup-password">password:</label>
// 				<input
// 					required
// 					id="signup-password"
// 					type="password"
// 					name="password"
// 					pattern="^[A-Za-z0-9]{5,15}$"
// 					value={formData.password}
// 					onChange={handleChange}
// 				/>
// 				<span className="tip"><BsQuestionSquare />
// 					<span className="tip-text"> 5-15 characters, no special characters</span>
// 				</span>

// 				 <br />

// 				<label
// 				 	htmlFor="confirm-password"
// 					style={passwordsMatch ? { color: "green"} : { color: "red"}}
// 				>
// 					confirm password:
// 				</label>
// 				<input
// 					required
// 					id="confirm-password"
// 					type="password"
// 					name="confirim-password"
// 					pattern="^[A-Za-z0-9]{5,15}$"
// 					value={confirmedPassword}
// 					onChange={(event) => setConfirmedPassword(event.target.value)}
// 				/>

// 				 <br />
	
// 				<input type="submit" value="submit" disabled={!passwordsMatch}/>
// 			</form>

// 			<Link to="/login">Back to login</Link>

//     </div>    
//   )
*/}