import React, { useState } from "react";
import CourseForm from "./CourseForm";
import { useNavigate } from "react-router-dom";
import './MenuForm.css'

function MenuForm ({ activeUser, setActiveUser }) {
	const initialMenu = {name: "", date: "", description: "", image_url: "", courses: []}

	const [menuData, setMenuData] = useState(initialMenu);
	const [courses, setCourses] = useState([]);
	const [courseList, setCourseList] = useState([{ courseNum: 1, id: 1 }]);

	const navigate = useNavigate();

	function handleChange(event) {
		const { name, value } = event.target;
		setMenuData(menuData => ({...menuData, [name]: value}))
	}
	

	function handleUpdateCourses(courseData) {
		let updatedCourses;

		const courseExists = courses.find(course => course.courseNum === courseData.courseNum);

		if (!courseExists) {
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


	function onDeleteCourse(courseNum){
		const updatedCourseList = courseList.filter(course => {
			return course.courseNum !== courseNum;
		})
		setCourseList(updatedCourseList);

		const updatedCourses = courses.filter(course => {
			return course.dishNum !== courseNum;
		})
		setCourses(updatedCourses);
	}


	function onAddCourseClick(event){
		event.preventDefault();
		const num = courseList.length + 1;
		const courseObj = {
			courseNum: num,
			id: Date.now()
		};
		setCourseList(courseList => ([...courseList, courseObj]));
	}


	function handleSubmit(event) {
		event.preventDefault();
		const updatedMenu = {...menuData, courses: courses};
		fetch(`http://localhost:9292/create_menu/${activeUser.id}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedMenu),
		})
			.then(res => res.json())
			.then((menu) => {
				const updatedUser = {
					...activeUser,
					menus: [...activeUser.menus, menu]
				}
				setActiveUser(updatedUser)
			})
			.catch(e => console.error(e))
		resetForms();
		navigate(`/user/${activeUser.username}`);
	}


	function resetForms(){
		setMenuData(initialMenu);
		setCourses([]);
		setCourseList([{courseNum: 1, id: Date.now()}]);
	} 

	return (
	
	<div className="the-menu-container">
  <div className="row" id="bg">
    <div className="col-md-12">
    </div>
  </div>

  <div className="row">
    <div className="col-md-6">

      <div className="table-flexible">
        <table className="table borderless">
          <tbody>
            <tr>
              <td colspan="3" className="text-center">
                <span className="secTitle">Create Your Menu</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="dishName">Assiette de fruitset fondue de brie</span><br/>
                <span className="dishDesc">Wedge of baked Brie with ripe melon and berries</span></td>
    
            </tr>
            <tr>
              <td>
                <span className="dishName">Chausson du fromage de ch&egrave;vre</span><br/>
                <span className="dishDesc">Goat cheese tart</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="dishName">Palourdes au gratin</span><br/>
                <span className="discDesc">Baked clams with garlic butter and bread crumbs</span>
              </td>
            </tr>

            <tr>
              <td colspan="3" className="text-center">
                <span className="secTitle">Entr&eacute;es</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="dishName">Poulet &aacute; la moutard et au miel</span>
                </td>
               

            </tr>
            <tr>
              <td>
                <span className="dishName">Champignon parmentier au gratin</span><br/>
                <span className="dishDesc">Braised portobello mushrooms, topped with mashed potatoes and Gruy&egrave;re</span>
              </td>
            
            </tr>
            <tr>
              <td>
                <span className="dishName">Porc &aacute; la dijonnaise</span><br/>
                <span className="dishDesc">Sauteacuteed pork medallions with an orange compare sauce</span>
              </td>
    
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="col-md-6"> 
	</div>
	</div>
	</div>
	)
	}
      

		
	{/* )


// 	{return (
// 		<div classNameName="the-menu-container">

//     <div classNameName="create-menu-container">
// 			<h1>Create Your Menu</h1>
// 			<form
// 				classNameName="create-menu-form"
// 				onSubmit={handleSubmit}
// 			>

// 				<h2>Menu</h2>

// 				<label htmlFor="create-menu-name">name:</label>
// 				<input
// 					required
// 					id="create-menu-name"
// 					type="text"
// 					name="name"
// 					placeholder="Menu Title"
// 					value={menuData.name}
// 					onChange={handleChange}
// 				/>

// 				<br />

// 				<label htmlFor="create-menu-date">date of meal:</label>
// 				<input
// 					required
// 					id="create-menu-date"
// 					type="date"
// 					name="date"
// 					value={menuData.date}
// 					onChange={handleChange}
// 				/>

// 				<br />

// 				<label htmlFor="create-menu-image">image url:</label>
// 				<input
// 					required
// 					id="create-menu-image"
// 					type="text"
// 					name="image_url"
// 					value={menuData.image_url}
// 					onChange={handleChange}
// 				/>

// 				<br />

// 				<label htmlFor="create-menu-description">description:</label><br/>
// 				<textarea
// 					required
// 					id="create-menu-description"
// 					name="description"
// 					value={menuData.description}
// 					onChange={handleChange}
// 				></textarea>

// 				<br />

// 				<button style={{marginTop: "15px"}} onClick={onAddCourseClick}>Add Course</button>

// 				{courseList.map(course => (
// 				<CourseForm
// 					key={course.id}
// 					courseNum={course.courseNum}
// 					handleUpdateCourses={handleUpdateCourses}
// 					courseList={courseList}
// 					onDeleteCourse={onDeleteCourse}
// 				/>
// 			))}

// 				<input type="submit" value="Submit Menu"/>

// 			</form>
// 		</div>
// 		</div>
// 	)
// } */}

export default MenuForm;
