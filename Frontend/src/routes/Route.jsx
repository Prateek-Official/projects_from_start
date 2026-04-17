import { Routes, Route } from "react-router-dom";
import Brand from "../pages/brand/BrandPage";
import ContactUs from "../pages/contact-us/ContactUs";
import DiceHomePage from "../pages/dice-game/DiceHomePage";
import DiceGamePage from "../pages/dice-game/dice-game-page/DiceGamePage";
import FoodyZone from "../pages/foody-zone/FoodyZone";
import EmployeeManagement from "../pages/employee-management/EmployeeManagement";
import PostEmployee from "../components/page-specific-components/PostEmployee";
import Employees from "../pages/employee-management/Employees/Employees";
import UpdateEmployee from "../components/page-specific-components/UpdateEmployee";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Brand />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/dice-home" element={<DiceHomePage />} />
      <Route path="/dice-home/dice-game" element={<DiceGamePage />} />
      <Route path="/foody-zone" element={<FoodyZone />} />
      <Route path="/employee-management" element={<EmployeeManagement />}>
        <Route index element={<PostEmployee />} />
        <Route path="employees" element={<Employees />} />
        <Route path="update-employee/:id" element={<UpdateEmployee />} />
      </Route>
    </Routes>
  );
};

export default RoutePage;