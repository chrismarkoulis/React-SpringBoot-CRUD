package com.chrismark.employee_api.controller;

import java.util.List;

import javax.validation.Valid;

import com.chrismark.employee_api.entities.Employee;
import com.chrismark.employee_api.exception.EmployeeNotFoundException;
import com.chrismark.employee_api.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    EmployeeRepository repository;

    @GetMapping("/employees")
	public List<Employee> getAllEmployees() {
	    return repository.findAll();
	}
	
	@PostMapping("/employees")
	public Employee createEmployee(@Valid @RequestBody Employee employee) {
	    return repository.save(employee);
	}
	
	@GetMapping("/employees/{id}")
	public Employee getEmployeeById(@PathVariable int id) {
	    return repository.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee", "id", id));
	}
	
	@PutMapping("/employees/{id}")
	public Employee updateEmployee(@PathVariable int id, @Valid @RequestBody Employee employee) {
	    repository.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee", "id", id));
	    employee.setId(id);
	    Employee updatedEmployee = repository.save(employee);
	    return updatedEmployee;
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable int id) {
	    Employee employee = repository.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee", "id", id));
	    repository.delete(employee);
	    return ResponseEntity.ok().build();
	}
	
}
