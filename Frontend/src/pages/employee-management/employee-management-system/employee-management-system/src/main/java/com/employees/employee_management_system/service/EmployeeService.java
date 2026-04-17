package com.employees.employee_management_system.service;

import com.employees.employee_management_system.model.Employee;
import com.employees.employee_management_system.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    public Employee saveEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public boolean deleteEmployee(Long id){
        if(!employeeRepository.existsById(id)){
            return false;
        }
        employeeRepository.deleteById(id);
        return true;
    }

    public Employee getEmployeeById(Long id){
        return employeeRepository.findById(id).orElseThrow(() -> new RuntimeException("Employee with id " + id + " not found"));
    }

    public Employee updateEmployee(Long id, Employee employeeDetails){
        Employee employee = getEmployeeById(id);

//        if(!employeeRepository.existsById(id)){
//            return ;
//        }
        employee.setName(employeeDetails.getName());
        employee.setEmail(employeeDetails.getEmail());
        employee.setPhone(employeeDetails.getPhone());
        employee.setDepartment(employeeDetails.getDepartment());

        return employeeRepository.save(employee);
    }
}
