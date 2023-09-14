import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = ({ user }) => {
  const navigate = useNavigate()
  const { id } = useParams();
  const userProfile = user.find((per, idx) => per.id === id);
  return (
    <div className="profile">
      <h1>User Profile</h1>
      <div className="user-profile-card-left">
          <div className="user-profile-card-right">
          <div className="profile-card">
          <h1>{userProfile.name ? userProfile.name : "Name"}</h1>
          <p>Age : {userProfile.age}</p>
          <p>Role : {userProfile.role}</p>
          <div className="profile-content">
            <h3>Contect Us</h3>
            <p>Email : {userProfile.email}</p>
            <p>Mobile No : {userProfile.mobile}</p>
            <h4 onClick={()=>navigate("/")}>Dashboard</h4>
          </div>
        </div>
          </div>
      </div>
    </div>
  );
};

export default Profile;
