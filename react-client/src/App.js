import React from 'react';
import EmployeeState from './context/employee/EmployeeState';
import Employees from './components/Employees/Employees';


function App() {
  return (
    <EmployeeState>
    <div className="App">
     <Employees />
    </div>
    </EmployeeState>
  );
}

export default App;
