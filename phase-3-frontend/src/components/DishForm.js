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
			<div className="dish-item-container">

				<div className="dish-items">
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

				<textarea className="describe-dish"
					required
					id="dish-textbox"
					placeholder="Describe your dish"
					name="description"
					value={dishData.description}
					onChange={handleChange}
				></textarea>

				<br />

				<textarea className="describe-dish"
					required
					placeholder="List your Ingredients"
					id="dish-textbox"
					name="ingredients"
					value={dishData.ingredients}
					onChange={handleChange}
				></textarea>
				</div>
		</div>
	)
}

export default DishForm;