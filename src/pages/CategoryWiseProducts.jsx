import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const CategoryWiseProducts = () => {
  const { category } = useParams();
  const [products, setProduct] = useState([]);

  const fetchCategoryProducts = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setProduct(res.data);
    } catch (error) {
      console.log("Error getting data", error);
    }
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [category]);

  return (
    <>
      <h1>{category}</h1>
      <div className="main">
        
        {products.map((product, index) => (
          <div key={index} className="card">
            <img src={product.image} alt={product.title} className="picture" />
            <br/>
            <NavLink to={`/product-details/${product.id}`} className="name">
              {product.title}
            </NavLink>
           
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default CategoryWiseProducts;
