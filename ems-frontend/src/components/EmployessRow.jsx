import React from 'react'

const EmployessRow = ({id, firstName, lastName, email}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>
        <button className='btn btn-warning mx-2'>update</button>
        <button className='btn btn-danger'>delete</button>
      </td>
    </tr>
  )
}

export default EmployessRow