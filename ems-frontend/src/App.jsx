import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeesList from "./components/EmployeesList.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Error404 from "./components/Error404.jsx";
import EmployeesForm from "./components/EmployeesForm.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* http://localhost:5050 */}
          <Route path="/" element={<EmployeesList />} />
          {/* http://localhost:5050/employees */}
          <Route path="/employees" element={<EmployeesList />} />
          {/* http://localhost:5050/employees/add */}
          <Route path="/employees/add" element={<EmployeesForm />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
