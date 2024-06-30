import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/about-company" element={<AboutCompany />} />
        <Route path="/shipining-payment" element={<ShipiningPayment />} />
        <Route path="/all-katalog" element={<AllKatalog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/all-blog" element={<AllBlog />} />
        <Route path="/return" element={<Return />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
