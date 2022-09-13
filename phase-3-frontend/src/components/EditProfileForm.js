import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";


function EditProfileForm ({ activeUser, setActiveUser }) {
	const initialValues = {
		first_name: "",
		last_name: "",
		image_url: "",
	};

	const [formData, setFormData] = useState(initialValues);

	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`http://localhost:9292/find_by_username/${params.username}`)
		.then(res => res.json())
		.then(user => {
			setFormData(user);
		})
	},[params])

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData(formData => ({...formData, [name]: value}))
	}

	function handleSubmit(event) {
		event.preventDefault();
		fetch(`http://localhost:9292/users/${activeUser.id}`, {
			method: "PATCH",
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
        <h1>Edit Profile</h1>

				<form onSubmit={handleSubmit}>

				<label htmlFor="edit-firstname">first name:</label>
				<input
					required
					id="edit-firstname"
					type="text"
					name="first_name"
					value={formData.first_name}
					onChange={handleChange}
				/>

				<br />

				<label htmlFor="edit-lastname">last name:</label>
				<input
					required
					id="edit-lastname"
					type="text"
					name="last_name"
					value={formData.last_name}
					onChange={handleChange}
				/>

				<br />

				<label htmlFor="edit-image-url">profile image:</label>
				<input
					required
					id="edit-image-url"
					type="image-url"
					name="image_url"
					value={formData.image_url}
					onChange={handleChange}
				/>

				<br/>
	
				<input type="submit" value="submit" />
			</form>

    </div>    
  )
}

export default EditProfileForm; 