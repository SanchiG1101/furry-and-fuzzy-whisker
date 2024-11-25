import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import women_banner from "./Components/Assets/banner_women.png";
import men_banner from "./Components/Assets/banner_mens.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import fish_banner from "./Components/Assets/banner_fish.jpg";
import LoginSignup from "./Pages/LoginSignup";
import Blogs from "./Pages/Blog/blogs";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Aboutus from "./Pages/aboutus/aboutus";
import Contactus from './Pages/contactus/contactus';
import Insurance from './Pages/insurance/Insurance';


export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/dogs" element={<ShopCategory banner={men_banner} category="dogs" />} />
          <Route path="/cats" element={<ShopCategory banner={women_banner} category="cats" />} />
          <Route path="/birds" element={<ShopCategory banner={kid_banner} category="birds" />} />
          <Route path="/others" element={<ShopCategory banner={fish_banner} category="others" />}/>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />s
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/insurance" element={<Insurance />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
