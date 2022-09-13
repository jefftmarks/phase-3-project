import React, { useState, useEffect } from "react";
import DishForm from "./DishForm";
import { RiDeleteBin5Line } from "react-icons/ri";

function CourseForm({ handleUpdateCourses, courseNum, isDeletable }) {
	const initialCourse = {category: "", courseNum: "", dishes: []};
	const [courseData, setCourseData] = useState(initialCourse);
	const [dishes, setDishes] = useState([]);
	const [dishList, setDishList] = useState([]);

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

		if (dishes.length === 0 || !dishes.find(dish => dish.dishNum === dishData.dishNum)) {
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

	
	function onAddDishClick(){
		const id = dishList.length + 2;
		const dishObj = {
			dishNum: id
		}
		setDishList(dishList => ([...dishList, dishObj]))
	}

	return (
    <div style={{border: "1px solid black", margin: "10px", paddingLeft: "5px", backgroundColor: "#fff4e6"}}>
			<h2>Course {isDeletable ? (
				<button style={{cursor: "pointer"}}>
					<RiDeleteBin5Line size="15" />
				</button>
			): null}</h2>

			<label htmlFor="create-course-category">category:</label>
			<input
				required
				id="create-course-category"
				type="text"
				name="category"
				value={courseData.category}
				onChange={handleChange}
			/>

			<br />

			<button style={{marginTop: "15px"}} onClick={onAddDishClick}>Add Dish</button>

			<DishForm handleUpdateDishes={handleUpdateDishes} dishNum="1" />
			{dishList.map(dish => (
				<DishForm
				key={dish.dishNum}
				dishNum={dish.dishNum}
				handleUpdateDishes={handleUpdateDishes}
				isDeletable={true}
				onDeleteDish={onDeleteDish}
				/>
			))}
				
		</div>
	)
}

export default CourseForm;