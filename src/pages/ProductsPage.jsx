import React, { useState, useEffect,useContext } from "react";
import Product from "../components/Product";
import axios from "axios";
import { NavLink } from "react-router-dom";
import UserAuthContext from "../context/UserAuthContext";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const {myval} =useContext(UserAuthContext)
  
useEffect(() =>{
 console.log("Context in Products", myval)
},[])
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [filteredData, setFilteredData] = useState(products);

  const handleSearch = (e) => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredData(filteredProducts);
  };

  const handleSortLowToHigh = () => {
    const sortedProducts = [...filteredData].sort((a, b) => a.price - b.price);
    setFilteredData(sortedProducts);
  };

  const handleSortHighToLow = () => {
    const sortedProducts = [...filteredData].sort((a, b) => b.price - a.price);
    setFilteredData(sortedProducts);
  };

  const handleSortAToZ = () => {
    const sortedProducts = [...filteredData].sort((a, b) => a.title.localeCompare(b.title));
    setFilteredData(sortedProducts);
  };

  const handleSortZToA = () => {
    const sortedProducts = [...filteredData].sort((a, b) => b.title.localeCompare(a.title));
    setFilteredData(sortedProducts);
  };

  return (
    <>
      <div>
        {/* <NavLink to="/allCategoriesPage">Categories</NavLink> */}
        <h1>ALL PRODUCTS</h1>

        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
        />
        {/* <button onClick={handleSearch}>Search</button> */}
        <button onClick={handleSortLowToHigh}>Sort by Price (Low to High)</button>
        <button onClick={handleSortHighToLow}>Sort by Price (High to Low)</button>
        <button onClick={handleSortAToZ}>Sort Alphabetically (A to Z)</button>
        <button onClick={handleSortZToA}>Sort Alphabetically (Z to A)</button>



        <div className="main">
        {filteredData.map((ele) => (
          <Product
            key={ele.id}
            id={ele.id}
            name={ele.title}
            price={ele.price}
            img={ele.image}
            description={ele.description}
            category={ele.category}
          />
        ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
