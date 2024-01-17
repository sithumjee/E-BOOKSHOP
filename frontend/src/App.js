// App.js
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Pages/ContactUs";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route
            path="/romance"
            element={<ShopCategory category="romance" />}
          />
          <Route
            path="/fiction"
            element={<ShopCategory category="fiction" />}
          />
          <Route
            path="/mystery"
            element={<ShopCategory category="mystery" />}
          />
          <Route
            path="/history"
            element={<ShopCategory category="history" />}
          />
          <Route
            path="/selfHelp"
            element={<ShopCategory category="selfHelp" />}
          />
          <Route
            path="/business"
            element={<ShopCategory category="business" />}
          />
          <Route
            path="/cookbooks"
            element={<ShopCategory category="cookbooks" />}
          />
          <Route
            path="/children"
            element={<ShopCategory category="children" />}
          />
          <Route
            path="/adventure"
            element={<ShopCategory category="adventure" />}
          />
          <Route path="/health" element={<ShopCategory categoty="health" />} />
          <Route
            path="/philosophy"
            element={<ShopCategory category="philosophy" />}
          />
          <Route path="/art" element={<ShopCategory />} categoty="art" />
          <Route path="/poetry" element={<ShopCategory categoty="poetry" />} />
          <Route
            path="/religion"
            element={<ShopCategory category="religion" />}
          />
          <Route path="/sports" element={<ShopCategory categoty="sports" />} />
          <Route path="/product" element={<Product />}>
            <Route path="/product/:id" element={<Product />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
