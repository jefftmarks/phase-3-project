import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import './DishForm.css'

function DishForm({ handleUpdateDishes, dishNum, dishList, onDeleteDish }) {
	const initialDish = {name: "", description: "", ingredients: "", dishNum: ""};
	const [dishData, setDishData] = useState(initialDish)

	function handleChange(event) {
		const { name, value } = event.target;
		const updatedDishData = {...dishData, [name]: value, dishNum: parseInt(dishNum)}
		setDishData(updatedDishData);
		handleUpdateDishes(updatedDishData);
	}

	return (
    <div className="dish-container">
			<h2>Dish {dishList.length > 1 ? (
				<div style={{cursor: "pointer", display: "inline"}}>
					<RiDeleteBin5Line size="18" onClick={() => onDeleteDish(dishNum)}/>
				</div>
			): null}</h2>

				<div>
				<input className="dish-input" 
					required
					id="create-dish-name"
					placeholder="Dish name goes here"
					type="text"
					name="name"
					value={dishData.name}
					onChange={handleChange}
				/>
				</div>

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