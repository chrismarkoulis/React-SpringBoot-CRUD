import React, { useContext, useEffect } from 'react';
import EmployeeContext from '../../context/employee/employeeContext';
import Table from 'react-bootstrap/Table';
import './Employees.css';
import Employee from '../Employee';
import EmployeeForm from '../EmployeeForm';


const Employees = () => {

  const employeeContext = useContext(EmployeeContext);

  const { employees, getEmployees, loading } = employeeContext;

  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line
  }, []);

  if (employees !== '' && employees.length === 0 && !loading) {
    return <h4>Fetching Data...</h4>;
  }

  return (
    <div className="main-wrapper p-5">
      <h1 className="mb-4 mt-4">Employee Table</h1>
      <div className="form-wrapper mb-4">
        <EmployeeForm />
      </div>
      <div className="table-wrapper">
        <Table bordered hover id="employee-table">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th colSpan='2' style={{ textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <Employee key={employee.id} employee={employee} />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Employees
