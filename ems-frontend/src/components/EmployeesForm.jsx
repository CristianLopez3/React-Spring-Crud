import { useEffect, useState } from "react";
import {
  getEmployee,
  saveEmployee,
  updateEmployee,
} from "../service/employeesService";
import { useNavigate, useParams } from "react-router-dom";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
};

const EmployeesForm = () => {
  const [employee, setEmployee] = useState(initialForm);
  const [errors, setErrors] = useState(initialForm);
  const { id } = useParams();
  const navigator = useNavigate();

  const handleChange = (e) =>
    setEmployee({ ...employee, [e.target.name]: e.target.value });

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((res) => {
          // console.log(res);
          let employeCopy = {
            id: res.data.id,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            email: res.data.email,
          };
          setEmployee(employeCopy);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidForm()) {
      if (id) {
        updateEmployee(employee)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } else {
        saveEmployee(employee)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }
      navigator("/employees");
    }
  };

  const isValidForm = () => {
    let valid = true;
    let errorsCopy = { ...errors };

    if (!employee.firstName.trim()) {
      errorsCopy.firstName = "First name is required!";
      valid = false;
    }
    if (!employee.lastName.trim()) {
      errorsCopy.lastName = "Last name is required!";
      valid = false;
    }
    if (!employee.email.trim()) {
      errorsCopy.email = "Email is required!";
      valid = false;
    }
    setErrors(errorsCopy);
    return valid;
  };

  const titlePage = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add New Employee</h2>;
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="card m-5 border-dark ">
        <div className="card-body">
          <button
            className="py-1 mb-3 bg-warning text-dark"
            onClick={() => navigator("/employees")}
          >
            Get Back
          </button>
          {titlePage()}
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter the employee first name..."
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              value={employee.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className="invalid-feedback"> {errors.firstName} </div>
            )}

            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter the employee first name..."
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              value={employee.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <div className="invalid-feedback"> {errors.lastName} </div>
            )}

            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter the employee first name..."
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={employee.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback"> {errors.email} </div>
            )}

            <input type="submit" value="Save Employee" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeesForm;
