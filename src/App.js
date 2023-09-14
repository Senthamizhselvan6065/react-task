import React, { useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import {data} from "./Data/data"
import './App.css'
import CreateUser from './Components/CreateUser';
import Profile from './Components/Profile';
import EditUser from './Components/EditUser';
import NoPage from './Components/NoPage';

const App = () => {
  const [user, setUser] = useState(data)
     const router = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard user={user} setUser={setUser} />
        }, 
        {
            path: "/create/user",
            element: <CreateUser user={user} setUser={setUser} />
        },
        {
           path: "/user/profile/:id",
           element: <Profile user={user} />
        },
        {
           path: "/edit/user/:id",
           element: <EditUser user={user} setUser={setUser} />
        },
        {
           path: "*",
           element: <NoPage />
        }
     ])
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App

/**
 *  Create - Create User
 *  Read  - User Profile 
 *  Update - Edit Profile
 *  Delete - Delete User
 */