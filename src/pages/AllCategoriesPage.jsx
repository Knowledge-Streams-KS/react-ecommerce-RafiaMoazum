import axios from "axios";
import "../pages/styles/AllCategoriesPage.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AllCategoriesPage = () => {
  const [category, setCategory] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategory(res.data);
    } catch (error) {
      console.log("Error in fetching categories from API", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="all-categories-main-div">
      <h1>All Categories</h1>
      {category.map((category, index) => (
        <div className="all-categories-inner-div">
          <NavLink
            to={`/category-products/${category}`}
            key={index}
            style={{ textDecoration: "none", color: "black" }}>
            {category}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default AllCategoriesPage;
