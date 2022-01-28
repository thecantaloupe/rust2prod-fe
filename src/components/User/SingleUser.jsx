import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// destructuring the props needed to get our user, including router prop match
const SingleUser = ({ edit, deleteTodo }) => {
    const users = useSelector((state) => state.user)
    const params = useParams()
    const id = params.userId; //get the id from url param
    const user = users.find((user) => user.id === id);
  
    ////////////////////
    // Styles
    ///////////////////
    const div = {
      textAlign: "center",
      border: "3px solid green",
      width: "80%",
      margin: "30px auto",
    };
  
    return (
      <div style={div}>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <button onClick={(event) => edit(user, id)}>Edit</button>
        <button onClick={(event) => deleteTodo(id)}>Delete</button>
        <NavLink to="/user">
          <button>Go Back</button>
        </NavLink>
      </div>
    );
  };
  
  export default SingleUser;


//   add form component directly with options to edit etc
//   new route can be standalone 