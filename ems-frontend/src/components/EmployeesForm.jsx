import { useState } from "react";
import { saveEmployee } from "../service/employeesService";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
};

const EmployeesForm = () => {
  const [employee, setEmployee] = useState(initialForm);
  const handleChange = (e) =>
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.firstName || !employee.lastName || !employee.email) {
      alert("Incomplete Data");
      return;
    }
    // console.log("Happy New Year.");
    // console.log(employee);
    saveEmployee(employee)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleReset();
  };

  const handleReset = () => setEmployee(initialForm);

  return (
    <div className="container d-flex justify-content-center">
      <div className="card m-5 border-dark ">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter the employee first name..."
              value={employee.firstName}
              onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter the employee first name..."
              value={employee.lastName}
              onChange={handleChange}
            />

            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter the employee first name..."
              value={employee.email}
              onChange={handleChange}
            />

            <input type="submit" value="Save Employee" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeesForm;
