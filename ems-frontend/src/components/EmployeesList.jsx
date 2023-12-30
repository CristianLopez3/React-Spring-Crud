import {useState, useEffect} from 'react'
import EmployeesTable from './EmployeesTable'
import { employeesList } from '../service/employeesService';

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    employeesList()
      .then((res) => {
        // console.log(res.data);
        return setEmployees(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className='container'>
      <h2 className='text-center p-5'>Employess List</h2>
      <EmployeesTable employees={employees} />
    </div>
  )
}

export default EmployeesList;