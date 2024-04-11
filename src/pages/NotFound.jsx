import React from "react"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"

const NotFound =() =>{
return(
  <>
  <div className="container text-center">
    <div className="display-1 text-danger">
        <p className="text-warning">The page you are looking for might have been removed, had its name changed, or is temporarily unavalaible.</p>
        <Button as ={Link} to={"/"} varing= "outline-primary">Go to Home Page</Button>
    </div>

  </div>
  </>
);
}
export default NotFound;