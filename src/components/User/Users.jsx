import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import User from "./User";
import {Link} from "react-router-dom";

const Users = (props) => {
  ////////////////////
  // Style Objects
  ////////////////////
  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto",
  };
  const users = useSelector((state) => state.user)
  // console.log(users)
  return (
    <div>
      <Outlet/>
    <h1>Users</h1>
    <Link to="new"><button style={button}>Add New User</button></Link>
    {users.map((user) =>
    <User user={user} key={user.id} />)
    }
  </div>
  )
};

export default Users;