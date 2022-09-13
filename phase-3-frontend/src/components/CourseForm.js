import React, { useState } from "react";
import DishForm from "./DishForm";

function CourseForm({ updateCourses }) {
	const initialCourse = {category: ""};
	const [courseData, setCourseData] = useState(initialCourse)

	function handleChange(event) {
		const { name, value } = event.target;
		setCourseData(courseData => ({...courseData, [name]: value}))
	}

	return (
    <div style={{border: "1px solid black", margin: "10px"}}>
			<div>Course</div>
			<label htmlFor="create-course-category">category:</label>
			<input
				required
				id="create-course-category"
				type="text"
				name="category"
				value={courseData.category}
				onChange={handleChange}
			/>

			<DishForm />

			<button onClick={() => updateCourses(courseData)}>Submit Course</button>

				
		</div>
	)
}

export default CourseForm;