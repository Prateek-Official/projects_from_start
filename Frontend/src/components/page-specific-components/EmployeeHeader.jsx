import { Link } from "react-router-dom";

const EmployeeHeader = () => {
  return (
    <div
      className="bg-[#343a40] text-white"
      style={{
        display: "flex",
        padding: "20px 60px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/employee-management">
        <h2 className="font-semibold text-[24px] cursor-pointer">
          Employee Managment System
        </h2>
      </Link>
      <div className="text-[20px]" style={{ display: "flex", gap: "20px" }}>
        <Link to="employees">Employees</Link>
        <Link to="/employee-management">Post Employee</Link>
      </div>
    </div>
  );
};

export default EmployeeHeader;
