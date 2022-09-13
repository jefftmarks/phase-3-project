import React, { useState, useEffect } from "react";

function DishForm({ handleUpdateDishes, dishNum }) {
	const initialDish = {name: "", description: "", ingredients: "", dishNum: ""};
	const [dishData, setDishData] = useState(initialDish)

	function handleChange(event) {
		const { name, value } = event.target;
		setDishData(dishData => ({...dishData, [name]: value, dishNum: parseInt(dishNum)}))
	}

	useEffect(() => {
		handleUpdateDishes(dishData)
	}, [dishData])

	return (
    <div style={{border: "1px solid black", margin: "10px", paddingLeft: "5px", backgroundColor: "#e6ffeb" }}>
			<h2>Dish</h2>

				<label htmlFor="create-dish-name">dish name:</label>
				<input
					required
					id="create-dish-name"
					type="text"
					name="name"
					value={dishData.name}
					onChange={handleChange}
				/>

				<br />

				<label htmlFor="create-dish-description">dish description:</label><br/>
				<textarea
					required
					id="create-dish-description"
					name="description"
					value={dishData.description}
					onChange={handleChange}
				></textarea>

				<br />

				<label htmlFor="create-dish-ingredients">ingredients:</label><br/>
				<textarea
					required
					id="create-dish-ingredients"
					name="ingredients"
					value={dishData.ingredients}
					onChange={handleChange}
				></textarea>
		</div>
	)
}

export default DishForm;