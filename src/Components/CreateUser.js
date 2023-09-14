import React, { useState } from 'react'
import {FaAddressCard} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const CreateUser = ({user, setUser}) => {
    const navigate = useNavigate()
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const createUser = ()=>{
        const newUser = {
            id,
            name,
            age,
            role,
            email,
            mobile
        }
        console.log(newUser);
        setUser([...user, newUser])
        navigate("/")
    }

  return (
    <div className='create-a-user'>
         <div className="from">
              <h1>Create a User</h1>
              <div className="input-filed">
                <input type="text" placeholder='Id' value={id} onChange={(event)=>setId(event.target.value)} />
                <input type="text" placeholder='Name' value={name} onChange={(event)=>setName(event.target.value)} />
                <input type="text" placeholder='Age' value={age} onChange={(event)=>setAge(event.target.value)} />
                <input type="text" placeholder='Role' value={role} onChange={(event)=>setRole(event.target.value)} />
                <input type="email" placeholder='Email' value={email} onChange={(event)=>setEmail(event.target.value)} />
                <input type="text" placeholder='Mobile No' value={mobile} onChange={(event)=>setMobile(event.target.value)} />
                <button className="Add" onClick={createUser}><span><FaAddressCard /></span>Add</button>
                <p onClick={()=>navigate("/")}>Dashboard</p>
              </div>
         </div>
    </div>
  )
}

export default CreateUser
