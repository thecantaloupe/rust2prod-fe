import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";
import { createWarehouse, getWarehouse, updateWarehouse } from "../../actions/Warehouse";
import { useLocation, useNavigate } from "react-router-dom";

// initial state for form data
const initialState = { address1: '', city: '', state: '', description: '', warehouse_manager: ''}

const Form = ({ warehouse, id }) => {
  const [newForm, setNewForm] = useState(
    warehouse ? warehouse : initialState
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();
  // regex for after slash
  var result = /[^/]*$/.exec(location.pathname)[0];
  const user = JSON.parse(localStorage.getItem("profile"));
 
  // handleChange function
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (id) {
      dispatch(updateWarehouse(id, { ...newForm}));
      dispatch(getWarehouse());
      navigate("/warehouses");
    }
    dispatch(createWarehouse({ ...newForm}));
    navigate("/warehouses");
  };
  if (!user?.user?.email) {
      return <h6>Please Sign in</h6>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input value={newForm.address1} name="address1" handleChange={handleChange} />
      <Input value={newForm.city} name="city" handleChange={handleChange} />
      <Input value={newForm.state} name="state" handleChange={handleChange} />
      <Input value={newForm.description} name="description" handleChange={handleChange} />
      <Input value={newForm.warehouse_manager} name="warehouse_manager" handleChange={handleChange} />
      {/* hide update if not the user who made it */}
      <input
        type="submit"
        value={id ? "Update Warehouse" : "Add a new warehouse"}
      />
    </form>
  );
};

export default Form;
