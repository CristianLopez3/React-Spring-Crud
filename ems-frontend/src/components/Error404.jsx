import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const handleGoBack = () => navigate(-1);
  const navigate = useNavigate();

  return (
    <div className='container text-center p-5'>
      <h1 className='fs-1 d-block'>404</h1>
      <p>Page not found.</p>
      <button onClick={handleGoBack} className='btn btn-success'>Get Back</button>
    </div>
  )
}

export default Error404;