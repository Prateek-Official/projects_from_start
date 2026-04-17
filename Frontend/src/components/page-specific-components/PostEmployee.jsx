import { FORM_INPUTS } from "../../constants/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../../api/employeeApi";

const PostEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const navigate = useNavigate();

  const handleChange = (e, inputType) => {
    setEmployeeData({ ...employeeData, [inputType]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(employeeData);
    const data = await createEmployee(employeeData);
    console.log(data);
    navigate("employees");
  };

  return (
    <div
      className="flex-1 flex justify-center items-center "
      //   bg-amber-400"
    >
      <div className="w-1/3">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <h2 className="text-center font-semibold text-[32px]">
            Post New Employee
          </h2>

          <div className="flex flex-col gap-5 border border-[#d2d4d6] rounded-lg p-5">
            {FORM_INPUTS.map((input) => {
              return (
                <div key={input?.id}>
                  {/* <Label></Label> */}
                  <input
                    className="border border-[#e3e6e8] w-full px-3.5 py-4 rounded-[10px]"
                    type={input?.type}
                    placeholder={`Enter ${input?.inputType}`}
                    onChange={(e) => handleChange(e, input?.inputType)}
                  />
                </div>
              );
            })}
            <button
              type="submit"
              className="bg-[#343a40] text-white px-3.5 py-4 rounded-[10px] cursor-pointer hover:bg-[#646566]"
            >
              Post Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostEmployee;
