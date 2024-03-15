import { Route, Routes } from "react-router"
import ProductsPage from "./pages/ProductsPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import Header from "./components/Header"
import AllCategoriesPage from "./pages/AllCategoriesPage"
import CategoryWiseProducts from "./pages/CategoryWiseProducts"

function App() {

  return (
    <>
   <Header/>
    <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/allCategoriesPage" element={<AllCategoriesPage/>}/>
        <Route path="/product-details/:productID?" element={<ProductDetailsPage />} />
        <Route path="category-products/:category" element={<CategoryWiseProducts/>}/>
      </Routes>
    
    </>
  )

}

export default App
