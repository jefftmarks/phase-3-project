import React, { useState } from "react";

function DishForm() {
	const initialCourse = {name: "", description: ""};
	const [dishData, setDishData] = useState(initialCourse)


	// function handleChange(event) {
	// 	const { name, value } = event.target;
	// 	setCourseData(courseData => ({...courseData, [name]: value}))
	// }

	return (
    <div style={{border: "1px solid black", margin: "10px" }}>
			<div>Dish</div>
				<label htmlFor="create-dish-name">dish name:</label>
				<input
					required
					id="create-dish-name"
					type="text"
					name="name"
					// value={dishData.name}
					// onChange={handleChange}
				/>
				<br />

				<label htmlFor="create-dish-description"> menu description:</label>
				<input
					required
					id="create-dish-description"
					type="text"
					name="description"
					// value={dishData.description}
					// onChange={handleChange}
				/>
				<br />
				
				<button>Submit Dish</button>
		</div>
	)
}

export default DishForm;