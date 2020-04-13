import {
    GET_EMPLOYEES,
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE,
    UPDATE_EMPLOYEE,
    SET_SELECTED,
    CLEAR_SELECTED
} from '../types';

export default (state, action) => {
    switch (action.type) {
      case GET_EMPLOYEES:
        return {
          ...state,
          employees: action.payload,
          loading: false
        };
      case ADD_EMPLOYEE:
        return {
          ...state,
          employees: [...state.employees, action.payload],
          loading: false
        };
      case UPDATE_EMPLOYEE:
        return {
          ...state,
          employees: state.employees.map(employee =>
            employee.id === action.payload.id ? action.payload: employee
          ),
          loading: false
        };
      case DELETE_EMPLOYEE:
        return {
          ...state,
          employees: state.employees.filter(
            employee => employee.id !== action.payload
          ),
          loading: false
        };
        case SET_SELECTED:
          return {
            ...state,
            selected: action.payload
          };
        case CLEAR_SELECTED:
          return {
            ...state,
            selected: null
          };

        default:
      return state;
  }
};