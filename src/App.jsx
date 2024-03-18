import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import ProductsPage from "./pages/ProductsPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import AllCategoriesPage from "./pages/AllCategoriesPage"
import CategoryWiseProducts from "./pages/CategoryWiseProducts"
import PrivateRoute from "./routes/PrivateRoute"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Cart from "./pages/Cart"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {

  return (
    <>
   
    <Routes>
      <Route element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/productsPage" element={<ProductsPage />} />
        <Route path="/allCategoriesPage" element={ <AllCategoriesPage/>}/>
        <Route path="/cart" element={
        <PrivateRoute>
        <Cart/>
        </PrivateRoute>
        }/>
        <Route path="/product-details/:productID?" element={<ProductDetailsPage />} />
        <Route path="category-products/:category" element={<CategoryWiseProducts/>}/>
      </Route>

      <Route path="/login" element={<Login/>} />
      <Route path="/signUp" element={<SignUp/>} />

    </Routes>
    
    </>
  )

}

export default App
