import EmployessRow from "./EmployessRow";

const EmployeesTable = ({ employees, setDataToEdit }) => {
  return (
    <table className="table  table-bordered table-hover">
      <thead>
        <tr>
          <td className="py-3 px-2 text-start">Id</td>
          <td className="py-3 px-2 text-start">First Name</td>
          <td className="py-3 px-2 text-start">Last Name</td>
          <td className="py-3 px-2 text-start">Email</td>
          <td className="py-3 px-2 text-start">Actions</td>
        </tr>
      </thead>
      <tbody>
        {employees.length > 0 ? (
          employees.map((employee, index) => (
            <EmployessRow
              key={index}
              id={employee.id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              email={employee.email}
              setDataToEdit={setDataToEdit}
            />
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center">No Data Available Yet</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default EmployeesTable;
