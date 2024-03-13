import "./Product.css";
import { NavLink } from "react-router-dom";

const Product = (props) => {
  return (
    <>
      <div className="main">
        <div className="card">
          <img className="picture" src={props.img} alt="image" />
          <p>{props.category}</p>
          <NavLink to={`/product-details/${props.id}`} className="name">
            {props.name}
          </NavLink>

          <p>Price:{props.price}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
