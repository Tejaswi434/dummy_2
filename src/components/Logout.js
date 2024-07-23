import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate();
  const handleLogout =(e)=>{
    navigate("/")

  }
  return (
    
    <div>

      <button onClick={handleLogout()}></button>
    </div>
  )
}

export default Logout