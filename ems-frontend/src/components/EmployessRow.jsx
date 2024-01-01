import { useNavigate } from "react-router-dom";

const EmployessRow = ({ id, firstName, lastName, email, setDataToEdit }) => {
  const navigator = useNavigate();

  const handleUpdate = (id) => navigator(`/employees/update/${id}`);
  const handleDelete = (id) => navigator(`/employees/delete/${id}`);

  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>
        <button
          className="btn btn-warning mx-2"
          onClick={() => handleUpdate(id)}
        >
          update
        </button>
        <button className="btn btn-danger" onClick={() => handleDelete(id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default EmployessRow;
