import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

// Get All Employees  from Spring Boot API.
export const getEmployeesList = () => axios.get(REST_API_BASE_URL);

export const getEmployee = (id) => axios.get(`${REST_API_BASE_URL}/${id}`);

export const saveEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);  

export const updateEmployee = (employee) => axios.put(`${REST_API_BASE_URL}/${employee.id}`, employee);

export const deleteEmployee = (employeeId) => axios.delete(`${REST_API_BASE_URL}/${employeeId}`);