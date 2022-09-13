import React from "react";


function MenuForm () {
	

	return (
    <div>
			<h1>Create Your Menu</h1>
			<form className="menu-form">

			<label htmlFor="create-menu-name">name:</label>
			<input
				required
				id="create-menu-name"
				type="text"
				name="name"
				placeholder="Menu Title"
				// value={menuData.name}
				// onChange={handleChange}
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
				// value={menuData.date}
				// onChange={handleChange}
			/>

			<br />

			<label htmlFor="create-menu-description">description:</label>
			<input
				required
				id="create-menu-description"
				type="text"
				name="description"
				// value={menuData.date}
				// onChange={handleChange}
			/>

			</form>
		</div>
	)
}


export default MenuForm;