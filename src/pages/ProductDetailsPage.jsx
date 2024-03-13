import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../components/Product.css"

const ProductDetailsPage = () => {
  const [product, setProduct] = useState();
  const param = useParams();

  const fetchDetails = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${param.productID}`
      );
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [param.productID]);

  return (
    <>
     {product && (
        <div>
          <img className="picture" src={product.image} alt="image"/>
          <h1>{product.title}</h1> 
          <p>Category: {product.category}</p>
          <p>Description:{product.description}</p>
          <p>Price:{product.price}</p>  
        </div>
      )}
      
   
    </>
  );
};

export default ProductDetailsPage;
