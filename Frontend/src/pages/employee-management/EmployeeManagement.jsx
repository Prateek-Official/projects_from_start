import PostEmployee from "../../components/page-specific-components/PostEmployee";
import EmployeeHeader from "../../components/page-specific-components/EmployeeHeader";
import { Outlet } from "react-router-dom";

const EmployeeManagement = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <EmployeeHeader />
      <Outlet />
    </div>
  );
};

export default EmployeeManagement;
