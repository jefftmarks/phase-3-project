import React from "react";
import Login from './components/Login';
import Feed from './components/Feed';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import MenuPage from './components/MenuPage';
import MenuForm from './components/MenuForm';
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/user/:username' element={<Profile />}/>
        <Route path='/menu/:menu_id' element={<MenuPage />}/>
        <Route path='/create-menu' element={<MenuForm />}/>
        <Route path='/edit-menu/:menu_id' element={<MenuForm />}/>
        <Route path='/' element={<Feed /> }/>
      </Routes>
    </div>
  )
}

export default App;
