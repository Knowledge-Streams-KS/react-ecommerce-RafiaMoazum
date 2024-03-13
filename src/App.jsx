import { Route, Routes } from "react-router"
import ProductsPage from "./pages/ProductsPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"


function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/product-details/:productID" element={<ProductDetailsPage />} />
      </Routes>
    
    </>
  )

}

export default App
