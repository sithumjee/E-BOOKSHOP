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
import Authors from "./Components/Authors/Authors";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/author" element={<Authors />} />

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
          <Route
            path="/health"
            element={<ShopCategory category="children" />}
          />
          <Route
            path="/philosophy"
            element={<ShopCategory category="philosophy" />}
          />
          <Route path="/art" element={<ShopCategory category="children" />} />
          <Route
            path="/poetry"
            element={<ShopCategory category="children" />}
          />
          <Route
            path="/religion"
            element={<ShopCategory category="religion" />}
          />
          <Route
            path="/sports"
            element={<ShopCategory category="children" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
