import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { getAllEmployees, deleteEmployee } from "../../../api/employeeApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const [employeesData, setEmployeesData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    employeeData();
  }, []);

  const employeeData = async () => {
    try {
      const data = await getAllEmployees();
    //   console.log(data);
      setEmployeesData(data);
    } catch (error) {
      console.error("UI error: ", error);
    }
  };

  const handleDelete = async (id) => {
    // console.log(e);
    // console.log(id);
    const res = await deleteEmployee(id);
    // console.log(res);
    await employeeData();
  };

  return (
    <div className="flex-1 flex justify-center mt-5">
      <div className="w-[80%]">
        <h1 className="text-center text-[32px] font-semibold mb-2">
          Employees
        </h1>

        <TableContainer sx={{ maxHeight: "80%" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "20px", fontWeight: 600 }}>
                  Name
                </TableCell>
                <TableCell sx={{ fontSize: "20px", fontWeight: 600 }}>
                  Email
                </TableCell>
                <TableCell sx={{ fontSize: "20px", fontWeight: 600 }}>
                  Phone
                </TableCell>
                <TableCell sx={{ fontSize: "20px", fontWeight: 600 }}>
                  Department
                </TableCell>
                <TableCell sx={{ fontSize: "20px", fontWeight: 600 }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {employeesData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    <p>No employees to display</p>
                  </TableCell>
                </TableRow>
              ) : (
                employeesData.map((emp) => {
                  //   console.log(emp);
                  return (
                    <TableRow
                      key={emp?.id}
                      className="cursor-pointer hover:bg-[#c2c3c4]"
                    >
                      <TableCell>{emp?.name}</TableCell>
                      <TableCell>{emp?.email}</TableCell>
                      <TableCell>{emp?.phone}</TableCell>
                      <TableCell>{emp?.department}</TableCell>

                      <TableCell>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            className="border-2 border-[#cacccf] p-2.5 rounded-lg hover:bg-[#e1e2e3] cursor-pointer"
                            onClick={() => navigate(`/employee-management/update-employee/${emp?.id}`)}
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            className="border-2 border-[#f50505] p-2.5 rounded-lg cursor-pointer text-[#f50505] hover:bg-[#f50505] hover:text-white"
                            onClick={() => handleDelete(emp?.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Employees;
