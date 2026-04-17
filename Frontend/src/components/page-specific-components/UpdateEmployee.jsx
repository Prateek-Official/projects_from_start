import { FORM_INPUTS } from "../../constants/constants";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployeeById, updateEmployee } from "../../api/employeeApi";
import { employeeMapper } from "../../utils/mapper/employeeMapper";
import { useNavigate } from "react-router-dom";

const UpdateEmployee = () => {

    const { id } = useParams();
    const [empData, setEmpData] = useState({name: "", email:"", department: "", phone: ""})
    const navigate = useNavigate();
    // console.log(id);

    const employeeDetail = async (id) => {
        const data = await getEmployeeById(id);
        // console.log(data);
        setEmpData(employeeMapper(data));
        // console.log(Object.keys(data));
        // console.log(data.email);
    }

    useEffect(() => {
        employeeDetail(id);
    }, [])

    const handleChange = (e) => {
        // console.log(e)
        const {name, value} = e.target;
        // console.log(value);
        setEmpData(prev => ({...prev, [name]: value}));
    }

    const handleUpdate = async (e, id, empData) => {
        e.preventDefault();
        const data = await updateEmployee(id, empData);
        // console.log(empData);
        // console.log(data);
        navigate("/employee-management/employees");
    }

    
    return (
        <div
          className="flex-1 flex justify-center items-center "
          //   bg-amber-400"
        >
          <div className="w-1/3">
            <form className="flex flex-col gap-3" onSubmit={(e) => handleUpdate(e, id, empData)}>
              <h2 className="text-center font-semibold text-[32px]">
                Update Employee
              </h2>
    
              <div className="flex flex-col gap-5 border border-[#d2d4d6] rounded-lg p-5">
                {FORM_INPUTS.map((input) => {
                  return (
                    <div key={input?.id}>
                      {/* <Label></Label> */}
                      <input
                        className="border border-[#e3e6e8] w-full px-3.5 py-4 rounded-[10px]"
                        type={input?.type}
                        name={input?.inputType}
                        placeholder={`Enter ${input?.inputType}`}
                        value={empData[input?.inputType]}
                        // onChange={(e) => handleChange(e, input?.inputType)}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  );
                })}
                <button
                  type="submit"
                  className="bg-[#343a40] text-white px-3.5 py-4 rounded-[10px] cursor-pointer hover:bg-[#646566]"
                //   onClick = {(e) => handleUpdate(e, id, empData)}
                >
                  Update Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default UpdateEmployee;