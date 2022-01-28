// import Header from "./components/Nav/Header";
// import Main from "./components/Main";
import { Outlet, useNavigate } from "react-router-dom"
import "./App.css"
import { NavBar } from "./components/nav";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUser, createUser, updateUser, deleteUser } from "./actions/User"
import Main from "./components/Main";

import {  Route, Routes } from "react-router-dom";
import Warehouses from "./components/Warehouse/Warehouses";
import Warehouse from "./components/Warehouse/Warehouse";
import Auth from "./components/Auth/Auth";
import Form from "./components/Form/Form";
import Users from "./components/User/Users";
import SingleUser from "./components/User/SingleUser";
import UserForm from "./components/User/UserForm";

function App() {
  const users = useSelector((state) => state.user)
  const dispatch = useDispatch()

  
  // an object that represents a null todo
  const nullUser = {
    name: "",
    email: "",
  };
  let navigate = useNavigate();

  // const state to hold todo to edit
  const [targetUser, setTargetUser] = useState(nullUser);
  //////////////
  // Functions
  //////////////


  // Function to add todo from form data
 const addUser =  (newUser) => {
  dispatch(createUser(newUser))
  dispatch(getUser())
  };

  // Function to select todo to edit
  const getTargetUser = (user, id) => {
    setTargetUser(user);
    navigate("user/"+id+"/edit");
  };

  // Function to update user
 const updateU =  (user) => {
  dispatch(updateUser(user.id, user))
  dispatch(getUser())
  };

  // Function to delete user
 const deleteU =  (id) => {
  dispatch(deleteUser(id))
  dispatch(getUser())
  navigate("/");
  };

  // can make hooks here, pass down and if they change throw in array to redo get
  useEffect(() => { dispatch(getUser())}, [dispatch]);

  return (
    <div className="App">
      <NavBar/>
      <Outlet />
      <Main />
      <Routes>
        <Route path="auth" element={<Auth />} />
        <Route path="user" element={<Users />} >
        <Route index element={ <main style={{ padding: "1rem" }}> <p>Select an User</p> </main> }/>
        <Route path="*" element={ <main style={{ padding: "1rem" }}> <p>There's nothing here!</p> </main> } />
        </Route>
        <Route
          path="user/new"
          element={<UserForm 
          initialUser={nullUser}
          handleSubmit={addUser}
          buttonLabel="create user" />}
        />
        <Route 
          path="user/:userId/edit" 
          element={<UserForm 
            initialUser={targetUser}
            handleSubmit={updateU}
            buttonLabel="update user"/>}
          />
        <Route 
        path="user/:userId/*" 
        element={<SingleUser
          edit={getTargetUser}
          deleteTodo={deleteU}/>} 
        />
        <Route path="warehouses/" element={<Warehouses />}>
          <Route index element={ <main style={{ padding: "1rem" }}> <p>Select an warehouse</p> </main> }/>
          <Route path="new" element={<Form />} />
          <Route path=":warehouseId/*" element={<Warehouse />} />
          <Route path="*" element={ <main style={{ padding: "1rem" }}> <p>There's nothing here!</p> </main> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;




// throw route paths here and maybe just render the header? so header and links here and then 
// or the next layer of routes so render header and maybe 