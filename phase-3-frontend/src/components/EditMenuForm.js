import React, { useState, useEffect } from "react";
import EditCourseForm from "./CourseForm";
import { useNavigate, useParams } from "react-router-dom";

function EditMenuForm ({ activeUser, setActiveUser }) {

	const [menuData, setMenuData] = useState({});

	const params = useParams();

	useEffect(() => {
		fetch(`http://localhost:9292/menus/${params.menu_id}`)
			.then(res => res.json())
			.then(menu => setMenuData(menu))
			.catch(e => console.error(e));
	}, [params])

	console.log(menuData.date)


	function handleChange(event) {
		const { name, value } = event.target;
		setMenuData(menuData => ({...menuData, [name]: value}))
	}


	return (
    <div>
			{menuData && activeUser ? (
				<>
			
					<h1>Edit Your Menu</h1>
					<form
						className="create-menu-form"
						// onSubmit={handleSubmit}
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
							// value={menuData.date}
							// onChange={handleChange}
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

						{/* <button style={{marginTop: "15px"}} onClick={onAddCourseClick}>Add Course</button> */}

						{/* {courseList.map(course => (
						<EditCourseForm
							key={course.id}
							courseNum={course.courseNum}
							handleUpdateCourses={handleUpdateCourses}
							courseList={courseList}
							onDeleteCourse={onDeleteCourse}
							menuId={menuData.id}
						/>
					))} */}

						<input type="submit" value="Submit Menu"/>

					</form>
				</>
			) : null}
		</div>
	)
}

export default EditMenuForm;
