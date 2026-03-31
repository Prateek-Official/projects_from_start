import { BrowserRouter, Routes, Route } from "react-router-dom";
import Brand from "../pages/brand/BrandPage";
import ContactUs from "../pages/contact-us/ContactUs";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Brand />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default RoutePage;
