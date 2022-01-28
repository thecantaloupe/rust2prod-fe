import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {

    // console.log(user)
    //////////////////
    // Style Objects
    //////////////////
    const div = {
        textAlign: "center",
        border: "1px solid",
        margin: "10px auto",
        width: "400px",
    };
  return (
    <div style={div}>
    <Link to={`/user/${user.id}`}>
      <h3>{user.name}</h3>
    </Link>
    <p>{user.email}</p>
    </div>
  );
};

export default User;