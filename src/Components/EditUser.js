import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {FaAddressCard} from 'react-icons/fa'

const EditUser = ({user, setUser}) => {
   const navigate = useNavigate()

    const [idx, setIdx] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")

    const {id} = useParams()
    const seleteUser = user.find((per, idx)=>per.id === id)
     useEffect(()=>{
         setIdx(seleteUser.id)
         setName(seleteUser.name)
         setAge(seleteUser.age)
         setRole(seleteUser.role)
         setEmail(seleteUser.email)
         setMobile(seleteUser.mobile)
     }, [])

    const editUser = ()=>{
        const editIndex = {
           id: idx,
           name,
           age,
           role,
           email,
           mobile
        }
        const findIndex = user.findIndex((per, idx)=>per.id === id)
        user[findIndex] = editIndex;
        setUser([...user]) 
        navigate("/")
    }

  return (
    <div className="create-a-user">
      <div className="from">
        <h1>Create a User</h1>
        <div className="input-filed">
          <input
            type="text"
            placeholder="Id"
            value={idx}
            onChange={(event) => setIdx(event.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile No"
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
          />
          <button className="Add" onClick={editUser}>
            <span>
              <FaAddressCard />
            </span>
            Save
          </button>
          <p onClick={() => navigate("/")}>Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
