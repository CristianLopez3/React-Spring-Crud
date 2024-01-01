import {useState, useEffect} from 'react'
import EmployeesTable from './EmployeesTable'
import { employeesList } from '../service/employeesService';
import { useNavigate } from 'react-router-dom';

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    employeesList()
      .then((res) => {
        // console.log(res.data);
        return setEmployees(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const addNewEmployee = () => navigate('/employees/add');

  return (
    <div className='container'>
      <h2 className='text-center p-5'>Employess List</h2>
      <button onClick={addNewEmployee} className='btn btn-primary mb-5'> Add Employee </button>
      <EmployeesTable employees={employees} />
    </div>
  )
}

export default EmployeesList;