import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyProducts from "./pages/MyProducts";
import AddProduct from "./pages/AddProduct";
import Product from "./pages/Product";
import EditProduct from "./pages/EditProduct"
import Logout from "./pages/Logout";
import AllProducts from "./pages/AllProducts";
import ProductsByCategory from "./pages/ProductsByCategory";
import ProductView from "./pages/ProductView"
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/products/:category" element={<ProductsByCategory />} />
        <Route path="/myproducts" element={<MyProducts />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product/hard/:category/:id" element={<ProductView />} />
        <Route path="/myproducts/edit/:id" element={<EditProduct />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
