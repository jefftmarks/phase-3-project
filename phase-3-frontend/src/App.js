import React, { useState, useEffect } from "react";
import Login from './components/Login';
import Feed from './components/Feed';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import MenuPage from './components/MenuPage';
import MenuForm from './components/MenuForm';
import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
	const [activeUser, setActiveUser] = useState({})

	const navigate = useNavigate();

	// When homepage loads, if no active user, navigate to login page
	useEffect(() => {
		fetch("http://localhost:9292/find_active_user")
			.then(res => res.json())
			.then(user => {
				if (user) {
					setActiveUser(user)
				}
				else {
					navigate("/login")
				}
			})
			.catch(e => console.error(e))
	},[navigate])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
					path='/login'
					element={<Login setActiveUser={setActiveUser} />}
				/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/user/:username' element={<Profile />}/>
        <Route path='/menu/:menu_id' element={<MenuPage />}/>
        <Route path='/create-menu' element={<MenuForm />}/>
        <Route path='/edit-menu/:menu_id' element={<MenuForm />}/>
        <Route
					path='/'
					element={<Feed activeUser={activeUser} />}
				/>
      </Routes>
    </div>
  )
}

export default App;