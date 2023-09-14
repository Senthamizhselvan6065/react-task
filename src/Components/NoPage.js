import React from 'react';
import {useNavigate} from "react-router-dom"

const NoPage = () => {
    const navigate = useNavigate()
  return (
    <div className='page-not'>
        <h1>404 Page Not Found...!</h1>
        <button onClick={()=>navigate("/")}>Dashboard</button>
    </div>
  )
}

export default NoPage