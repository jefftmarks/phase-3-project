import React from "react";
import { Link } from "react-router-dom";


function SignUp () {
	return ( 
    <div style={{border: "1px solid black"}}>
        <h1>Create an Account</h1>
				<Link to="/login">Back to Login</Link> 
    </div>    
  )
}

export default SignUp 