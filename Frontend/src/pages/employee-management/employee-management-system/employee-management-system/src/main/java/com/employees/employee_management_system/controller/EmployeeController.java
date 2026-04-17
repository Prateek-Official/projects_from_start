package com.employees.employee_management_system.controller;

import com.employees.employee_management_system.model.Employee;
import com.employees.employee_management_system.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/employee")
    public ResponseEntity<Map<String, Object>> createEmployee(@RequestBody Employee employee){
        Employee createEmployee = employeeService.saveEmployee(employee);
        Map<String, Object> response = new HashMap<>();
        response.put("id", createEmployee.getId());
        response.put("message", "Employee added to the database");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/all-employees")
    public ResponseEntity<List<Employee>> getEmployees(){
        List<Employee> allEmployees = employeeService.getAllEmployees();
        if(allEmployees.isEmpty()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(allEmployees);
    }

    @DeleteMapping("/delete-employee/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id){
        Boolean response = employeeService.deleteEmployee(id);
        if(!response){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee with id " + id + " does not exist");
        }
        return ResponseEntity.status(HttpStatus.OK).body("Employee with id " + id + " deleted");
    }

    @GetMapping("/get-employee/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        try{
            Employee employee = employeeService.getEmployeeById(id);
            return ResponseEntity.status(HttpStatus.OK).body(employee);
        } catch(RuntimeException ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }

    @PutMapping("/update-employee/{id}")
    public ResponseEntity<?> updateById(@PathVariable Long id, @RequestBody Employee employeeDetails){
        try{
            Employee employee = employeeService.updateEmployee(id, employeeDetails);
            return ResponseEntity.status(HttpStatus.OK).body(employee);
        } catch(RuntimeException ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }
}
