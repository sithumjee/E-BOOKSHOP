// App.js
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Pages/ContactUs";
import Romance from "./Pages/categories/Romance";
import Fiction from "./Pages/categories/Fiction";
import Mystery from "./Pages/categories/Mystery";
import History from "./Pages/categories/History";
import PersonalDevelopment from "./Pages/categories/PersonalDevelopment";
import Business from "./Pages/categories/Business";
import CookBooks from "./Pages/categories/CookBooks";
import Childern from "./Pages/categories/Childern";
import Adventure from "./Pages/categories/Adventure";
import Health from "./Pages/categories/Health";
import Philosophy from "./Pages/categories/Philosophy";
import Art from "./Pages/categories/Art";
import Poetry from "./Pages/categories/Poetry";
import Religion from "./Pages/categories/Religion";
import Sports from "./Pages/categories/Sports";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/romance" element={<Romance />} />
          <Route path="/fiction" element={<Fiction />} />
          <Route path="/mystery" element={<Mystery />} />
          <Route path="/history" element={<History />} />
          <Route path="/selfHelp" element={<PersonalDevelopment />} />
          <Route path="/business" element={<Business />} />
          <Route path="/cookbooks" element={<CookBooks />} />
          <Route path="/children" element={<Childern />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/health" element={<Health />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/art" element={<Art />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/religion" element={<Religion />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
