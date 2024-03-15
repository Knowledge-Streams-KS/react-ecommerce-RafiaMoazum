import { NavLink } from "react-router-dom"
import "./Header.css"


const Header =() =>{
    return(
        <>
        <nav className="NavBar">
          
                <li><NavLink to="/" style={{ textDecoration: 'none', color:"black" }}>Home</NavLink></li>
                <li><NavLink to="/" style={{ textDecoration: 'none', color:"black" }}>All Products</NavLink></li>
                <li><NavLink to="/allCategoriesPage" style={{ textDecoration: 'none' , color:"black"}}>All Categories</NavLink></li>
            
        </nav>
        
        </>
    )
}

export default Header