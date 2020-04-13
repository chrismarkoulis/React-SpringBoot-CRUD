import React, { useContext } from 'react';
import EmployeeContext from '../context/employee/employeeContext';
import PropTypes from 'prop-types';

const Employee = ({ employee }) => {
    const employeeContext = useContext(EmployeeContext);
    const { setSelected, deleteEmployee } = employeeContext

    const { id, fname, lname, department } = employee

    const onDelete = () => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            deleteEmployee(id)
        }
    }

    return (
        <tr key={id}>
            <td> {id} </td>
            <td> {fname} </td>
            <td> {lname} </td>
            <td> {department} </td>
            <td style={{ textAlign: 'center' }}>
                <button onClick={onDelete} style={{
                    backgroundColor: 'red',
                    borderRadius: 5
                }}>Delete</button> </td>
            <td style={{ textAlign: 'center' }}>
                <button onClick={() => setSelected(employee)} style={{
                    backgroundColor: 'orange',
                    color: 'black',
                    borderRadius: 5
                }}>Edit </button> </td>
        </tr>
    )

}

Employee.propTypes = {
    employee: PropTypes.object.isRequired
};

export default Employee;