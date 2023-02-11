import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
