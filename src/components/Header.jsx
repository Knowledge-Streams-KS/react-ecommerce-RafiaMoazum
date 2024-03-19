import { NavLink } from "react-router-dom"
import "./Header.css"
import { useContext } from "react"
import UserAuthContext from "../context/UserAuthContext"

const Header =() =>{

    const {email} = useContext(UserAuthContext)
    return(
        <>
        <nav className="NavBar">
          
                <li><NavLink to="/" style={{ textDecoration: 'none', color:"black" }}>Home</NavLink></li>
                <li><NavLink to="/productsPage" style={{ textDecoration: 'none', color:"black" }}>All Products</NavLink></li>
                <li><NavLink to="/allCategoriesPage" style={{ textDecoration: 'none' , color:"black"}}>All Categories</NavLink></li>
                <li><NavLink to="/login" style={{ textDecoration: 'none' , color:"black"}}>Login</NavLink></li>
                <li><NavLink to="/signUp" style={{ textDecoration: 'none' , color:"black"}}>SignUp</NavLink></li>
                <li><NavLink to="/cart" style={{ textDecoration: 'none' , color:"black"}}>Cart</NavLink></li>
                <li><NavLink to="" style={{ textDecoration: 'none' , color:"blue", justifyContent:"flex-end"}} >{email}</NavLink></li>
            
        </nav>
        
        </>
    )
}

export default Header