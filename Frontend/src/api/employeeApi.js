import axios from 'axios';

export const createEmployee = async (employeeData) => {
  try {
    const response = await fetch("http://localhost:8080/employees/employee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employeeData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllEmployees = async () => {
    try{
        const response = await axios.get("http://localhost:8080/employees/all-employees");
        const data = await response.data;
        return data;
    } catch(error){
        console.dir(error);
        if(error.response){
            if(error.response.status === 400){
                console.log(error.message);
                return [];
            }
            else{
                console.log(error.message);
            }
        }
        throw error;
    }
}

export const deleteEmployee = async (id) => {
    try{
        const response = await axios.delete(`http://localhost:8080/employees/delete-employee/${id}`);
        const data = await response.data;
        return data;
    } catch(error){
        // console.error(error);
        // throw error;
        console.log("Full Error: ", error);
    }
}

export const getEmployeeById = async (id) => {
    try{
        const response = await axios.get(`http://localhost:8080/employees/get-employee/${id}`);
        return response.data;
    } catch(error){
        console.log(error);
        throw error;
    }
} 

export const updateEmployee = async (id, updateData) => {
    try{
        const response = await fetch(`http://localhost:8080/employees/update-employee/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updateData)
        });
        const data = await response.json();
        return data;
    } catch(error){
        console.error(error);
        throw error;
    }
}