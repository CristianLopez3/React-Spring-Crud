import axios from "axios";

export const REST_API_BASE_URL = "http://localhost:8080/api/employees";

// Get All Employees  from Spring Boot API.
export const employeesList = () => axios.get(REST_API_BASE_URL);

export const saveEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);  