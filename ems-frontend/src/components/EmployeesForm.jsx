import { useState } from "react";
import { saveEmployee } from "../service/employeesService";
import { useNavigate } from "react-router-dom";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
};

const EmployeesForm = () => {
  const [employee, setEmployee] = useState(initialForm);
  const [errors, setErrors] = useState(initialForm);
  const navigator = useNavigate();

  const handleChange = (e) =>
    setEmployee({ ...employee, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!employee.firstName || !employee.lastName || !employee.email) {
    //   alert("Incomplete Data");
    //   return;
    // }
    if (isValidForm()) {
      console.log("true");
      saveEmployee(employee)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      handleReset();
      navigator("/employees");
    }
    console.log("false");
    console.log(errors);
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
    console.log(errorsCopy);
    setErrors(errorsCopy); // Actualización del estado
  
    // La comprobación de errores se realiza después de la actualización del estado
    return valid;
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
