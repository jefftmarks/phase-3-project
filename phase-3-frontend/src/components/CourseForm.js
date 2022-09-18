import React, { useState, useEffect } from "react";
import DishForm from "./DishForm";
import { RiDeleteBin5Line } from "react-icons/ri";
import './CourseForm.css'

function CourseForm({ handleUpdateCourses, courseNum, courseList, onDeleteCourse }) {
	const initialCourse = {category: "", courseNum: "", dishes: []};
	const [courseData, setCourseData] = useState(initialCourse);
	const [dishes, setDishes] = useState([]);
	const [dishList, setDishList] = useState([{ dishNum: 1, id: 1 }]);


	function handleChange(event) {
		const { name, value } = event.target;
		setCourseData(courseData => ({...courseData, [name]: value, courseNum: parseInt(courseNum)}))
	}

	useEffect(() => {
		const updatedCourse = {...courseData, dishes: dishes}
		handleUpdateCourses(updatedCourse)
	}, [courseData, dishes])


	function handleUpdateDishes(dishData) {
		let updatedDishes;

		const dishExists = dishes.find(dish => dish.dishNum === dishData.dishNum);

		if (!dishExists) {
			updatedDishes = [...dishes, dishData];
		} else {
			updatedDishes = dishes.map(dish => {
				if (dish.dishNum === dishData.dishNum) {
					return dishData;
				} else {
					return dish;
				}
			})
		}
		if (dishData.dishNum !== "") {
			setDishes(updatedDishes);
		}
	}


	function onDeleteDish(dishNum){
		const updatedDishList = dishList.filter(dish => {
			return dish.dishNum !== dishNum;
		})
		setDishList(updatedDishList);

		const updatedDishes = dishes.filter(dish => {
			return dish.dishNum !== dishNum;
		})
		setDishes(updatedDishes);
	}
	
	function onAddDishClick(event){
		event.preventDefault();
		const id = dishList.length + 1;
		const dishObj = {
			dishNum: id,
			id: Date.now()
		}
		setDishList(dishList => ([...dishList, dishObj]))
	}

	return (
    <div className="course-container">
			<h2>Course {courseList.length > 1 ? (
				<button >
					<RiDeleteBin5Line size="18" onClick={() => onDeleteCourse(courseNum)} />
				</button>
			): null}</h2>
			<div className="course-form-div">
				<select className="course-input"
					required
					id="create-course-category"
					// placeholder="Add a Category"
					name="category"
					value={courseData.category}
					onChange={handleChange}
				>
					<option disabled value="">Course Type</option>
					<option value="Appetizer">"Appetizer"</option>
					<option value="Starter">"Starter"</option>
					<option value="Side">"Side"</option>
					<option value="Main">"Main"</option>
					<option value="Entree">"Entree"</option>
					<option value="Dessert">"Dessert"</option>
				</select>

				<button className="add-dish-button" onClick={onAddDishClick}>Add Dish</button>

				<br />
			</div>


			{dishList.map(dish => (
				<DishForm
				key={dish.id}
				dishNum={dish.dishNum}
				handleUpdateDishes={handleUpdateDishes}
				dishList={dishList}
				onDeleteDish={onDeleteDish}
				/>
			))}
				
		</div>
	)
}

export default CourseForm;