import React from 'react';
import EmployeeContext from '../context/employee/employeeContext';
import { useContext, useEffect, useState } from 'react';


const EmployeeForm = () => {
    const employeeContext = useContext(EmployeeContext);

    const { addEmployee, updateEmployee, clearSelected, selected } = employeeContext;

    useEffect(() => {
        if (selected !== null) {
            setEmployee(selected);
        } else {
            setEmployee({
                fname: '',
                lname: '',
                department: ''
            })
        }
    }, [employeeContext, selected])

    const [employee, setEmployee] = useState({
        fname: '',
        lname: '',
        department: ''
    });

    const { fname, lname, department } = employee;

    const onChange = e => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        if (selected === null) {
            addEmployee(employee);
        } else {
            updateEmployee(employee);
        }
        clearSelected();
    };

    return (
        <form className='form-row' onSubmit={onSubmit}>
            <div className='input-group-text'>
                <input type="text"
                    className='mr-2 form-control'
                    placeholder='First Name'
                    name='fname'
                    value={fname}
                    onChange={onChange}
                />
                <input type="text"
                    className='mr-2 form-control'
                    placeholder='Last Name'
                    name='lname'
                    value={lname}
                    onChange={onChange}
                />
                <input type="text"
                    className='form-control mr-2'
                    placeholder='Department'
                    name='department'
                    value={department}
                    onChange={onChange}
                />
                <div>
                    <input
                        className='form-control mr-2'
                        type='submit'
                        value={selected ? 'Update Employee' : 'Add Employee'}
                        className='btn btn-primary btn-inline-block'
                    />
                </div>
                {selected && (
                    <div>
                        <button className='ml-2 btn btn-secondary btn-block form-control' onClick={clearSelected}>
                            Clear
                        </button>
                    </div>
                )}
            </div>
        </form>
    )
}

export default EmployeeForm
