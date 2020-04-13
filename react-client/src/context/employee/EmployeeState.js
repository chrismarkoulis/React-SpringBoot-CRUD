import React, { useReducer } from 'react';
import axios from 'axios';
import EmployeeContext from './employeeContext';
import employeeReducer from './employeeReducer';
import {
    GET_EMPLOYEES,
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE,
    UPDATE_EMPLOYEE,
    SET_SELECTED,
    CLEAR_SELECTED
} from '../types';

const EmployeeState = props => {
    const initialState = {
        employees: [],
        selected: null
    };

    const [state, dispatch] = useReducer(employeeReducer, initialState);

    // Get Employees
    const getEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/employees');

            dispatch({
                type: GET_EMPLOYEES,
                payload: response.data
            });
        } catch (error) {
            console.log(error);

        }
    }


    // Add Employee
    const addEmployee = async employee => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post(
                'http://localhost:8080/api/employees', employee, config);

            dispatch({
                type: ADD_EMPLOYEE,
                payload: response.data
            });
        } catch (error) {
            console.log(error);

        }
    };


    // Delete Employee
    const deleteEmployee = async id => {
        try {
            await axios.delete(`http://localhost:8080/api/employees/${id}`);
       
            dispatch({
                type: DELETE_EMPLOYEE,
                payload: id
            });
       
        } catch (error) {
            console.log(error);
            
        }
    };


    // Update Employee
    const updateEmployee = async employee => {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };

          try {
              const response = await axios.put(
                `http://localhost:8080/api/employees/${employee.id}`,
                employee,
                config
              );

              dispatch({
                  type: UPDATE_EMPLOYEE,
                  payload: response.data
              });
          } catch (error) {
              console.log(error);
              
          }
    }

    // Set selected employee
    const setSelected = employee => {
        dispatch({ type: SET_SELECTED, payload: employee });
    };

    // Clear selected employee
    const clearSelected = () => {
        dispatch({ type: CLEAR_SELECTED });
    }

    return (
        <EmployeeContext.Provider
        value={{
            employees: state.employees,
            selected: state.selected,
            addEmployee,
            deleteEmployee,
            getEmployees,
            updateEmployee,
            setSelected,
            clearSelected
        }}>
            {props.children}
        </EmployeeContext.Provider>
    );

};

export default EmployeeState;




