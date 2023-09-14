import React from "react";
import Core from "../layout/Core";
import { MdDelete, MdViewComfy } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate()
  const deleteUser = (id) => {
    const deleteList = user.filter((per, idx) => per.id !== id);
    setUser(deleteList)
  };
  return (
    <Core title="User Details">
      <p className="create-user" onClick={()=>navigate("/create/user")}>Create a User</p>
      <div className="user-card">
        {user ? 
            user.map((person, idx) => (
              <div key={idx} className="user-main-card">
                <h1>{person.name ? person.name : "Name"}</h1>
                <p>Age : {person.age}</p>
                <p>Role : {person.role}</p>
                <div className="contact">
                  <h3>Contact Us</h3>
                  <p>Email : {person.email}</p>
                  <p>Mobile No : {person.mobile}</p>
                </div>
                <div className="user-card-btns">
                  <button className="btn-view" onClick={()=>navigate(`/user/profile/${person.id}`)}><span><MdViewComfy /></span>View</button>
                  <button className="btn-edit" onClick={()=>navigate(`/edit/user/${person.id}`)}><span><AiFillEdit /></span>Edit</button>
                  <button className="btn-delete" onClick={() => deleteUser(person.id)}><span><MdDelete /></span>Delete</button>
                </div>
              </div>
            ))
        : ""}
      </div>
    </Core>
  );
};

export default Dashboard;
