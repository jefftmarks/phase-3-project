import React, { useState } from "react";
import CourseForm from "./CourseForm";

function MenuForm () {
	const initialMenu = {name: "", date: "", description: "", image_url: "", courses: []}

	const [menuData, setMenuData] = useState(initialMenu);
	const [courses, setCourses] = useState([]);
	const [courseList, setCourseList] = useState([])


	function handleChange(event) {
		const { name, value } = event.target;
		setMenuData(menuData => ({...menuData, [name]: value}))
	}
	

	function handleUpdateCourses(courseData) {
		let updatedCourses;

		if (courses.length === 0 || !courses.find(course => course.courseNum === courseData.courseNum)) {
			updatedCourses = [...courses, courseData];
		} else {
			updatedCourses = courses.map(course => {
				if (course.courseNum === courseData.courseNum) {
					return courseData;
				} else {
					return course;
				}
			})
		}
	
		if (courseData.courseNum !== "") {
			setCourses(updatedCourses);
		}
	}


	function handleSubmit(event) {
		event.preventDefault();
		const updatedMenu = {...menuData, courses: courses}
		console.log(updatedMenu);
		setMenuData(initialMenu);
	}


	function onAddCourseClick(){
		const id = courseList.length + 2;
		console.log(id)
		setCourseList([
			...courseList,
			<CourseForm key={id} handleUpdateCourses={handleUpdateCourses} courseNum={id} />
		])
	}

	return (
    <div>
			<h1>Create Your Menu</h1>
			<form
				className="create-menu-form"
				onSubmit={handleSubmit}
				style={{border: "1px solid black", paddingLeft: "5px", backgroundColor: "#f9e6ff"}}
			>

				<h2>Menu</h2>

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

				<br />

				<button style={{marginTop: "15px"}} onClick={onAddCourseClick}>Add Course</button>

				<CourseForm handleUpdateCourses={handleUpdateCourses} courseNum="1" />
				{courseList}

				<input type="submit" value="Submit Menu"/>

			</form>
		</div>
	)
}

export default MenuForm;
