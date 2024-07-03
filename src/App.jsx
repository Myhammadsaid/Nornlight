import { Route, Routes } from "react-router-dom";
import NotFound from "./components/notfound/NotFound";
import Home from "./pages/home/Home";
import AllProducts from "./pages/all-products/AllProducts";
import AllBlog from "./pages/all-blog/AllBlog";
import AboutCompany from "./pages/about-company/AboutCompany";
import ShipiningPayment from "./pages/shipining-payment/ShipiningPayment";
import Return from "./pages/return/Return";
import Garant from "./pages/garant/Garant";
import Contact from "./pages/contact/Contact";
import AllKatalog from "./pages/all-katalog/AllKatalog";
import SingleRoute from "./pages/single-route/SingleRoute";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import Layout from "./pages/layout/Layout";
import Auth from "./pages/auth/Auth";
import ManageProduct from "./components/manage__product/ManageProduct";
import CreateProduct from "./components/create-product/CreateProduct";
import CreateCategory from "./components/create__category/CreateCategory";
import ManageCategory from "./components/manage__category/ManageCategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Auth />}>
            <Route path="admin" element={<Admin />}>
              <Route path="create-product" element={<CreateProduct />} />
              <Route path="manage-product" element={<ManageProduct />} />
              <Route path="create-category" element={<CreateCategory />} />
              <Route path="manage-category" element={<ManageCategory />} />
            </Route>
          </Route>
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/about-company" element={<AboutCompany />} />
          <Route path="/shipining-payment" element={<ShipiningPayment />} />
          <Route path="/products/:id" element={<SingleRoute />} />
          <Route path="/all-katalog" element={<AllKatalog />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/all-blog" element={<AllBlog />} />
          <Route path="/garant" element={<Garant />} />
          <Route path="/return" element={<Return />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
