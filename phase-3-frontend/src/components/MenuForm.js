import React, { useState } from "react";
import CourseForm from "./CourseForm";

function MenuForm () {
	const initialMenu = {name: "", date: "", description: "", image_url: "", courses: []}

	const [menuData, setMenuData] = useState(initialMenu);

	function handleChange(event) {
		const { name, value } = event.target;
		setMenuData(menuData => ({...menuData, [name]: value}))
	}

	function updateCourses(courseData) {
		setMenuData(menuData => ({
			...menuData,
			courses: [...menuData.courses, courseData]
		}))
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(menuData);
		setMenuData(initialMenu);
	}

	return (
    <div>
			<h1>Create Your Menu</h1>
			<form className="create-menu-form" onSubmit={handleSubmit} style={{border: "1px solid black"}}>

				<label htmlFor="create-menu-name">name:</label>
				<input
					required
					id="create-menu-name"
					type="text"
					name="name"
					placeholder="Menu Title"
					value={menuData.name}
					onChange={handleChange}
				/>

				<br />

				<label htmlFor="create-menu-date">date of meal:</label>
				<input
					required
					id="create-menu-date"
					type="date"
					name="date"
					value={menuData.date}
					onChange={handleChange}
				/>

				<br />

				<label htmlFor="create-menu-image">image url:</label>
				<input
					required
					id="create-menu-image"
					type="text"
					name="image_url"
					value={menuData.image_url}
					onChange={handleChange}
				/>

				<br />

				<label htmlFor="create-menu-description">description:</label><br/>
				<textarea
					required
					id="create-menu-description"
					name="description"
					value={menuData.description}
					onChange={handleChange}
				></textarea>

				<CourseForm updateCourses={updateCourses} />

				<input type="submit" value="Submit Menu"/>

			</form>
		</div>
	)
}

export default MenuForm;
