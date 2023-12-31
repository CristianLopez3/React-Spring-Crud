import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeesList from "./components/EmployeesList.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Error404 from "./components/Error404.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<EmployeesList />} />
          <Route path="/employees" element={<Navigate to={"/"} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
