// Import useState hook
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createUser, getUser, updateUser } from "../../actions/User";


const UserForm = ({ initialUser, handleSubmit, buttonLabel }) => {
  const [formData, setFormData] = useState(initialUser);
  let navigate = useNavigate();

  //////////////////////////
  // Functions
  //////////////////////////
  // Standard React Form HandleChange Function
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  // Function to run when form is submitted
  const handleSubmisson = (event) => {
    //prevent form refresh
    event.preventDefault();
    //pass formData to handleSubmit prop function
    handleSubmit(formData);
    //push user back to main page
    navigate("/");
  };


  // Our Form, an input for the subject and details fields and a submit button
  return (
    <div className="form">
    <form style={{ width: "600px", align: "center" }} onSubmit={handleSubmisson}>
      <label className="hf" htmlFor="name">Name</label>
      <input
        type="text"
        className="hf"
        onChange={handleChange}
        value={formData.name}
        name="name"
      />
      <label className="hf" htmlFor="email">Email</label>
      <input
        type="text"
        className="hf"
        onChange={handleChange}
        value={formData.email}
        name="email"
      />
      <input type="submit" value={buttonLabel} />
    </form>
    </div>
  );
};

export default UserForm;