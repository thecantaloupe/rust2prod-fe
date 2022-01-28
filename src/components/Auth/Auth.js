import React, { useState } from "react";
import "./styles.css";
import Input from './Input'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../../actions/Auth"

// initial state for form data
const initialState = { email: '', password: '', confPass: ''}

const Auth = () => {
    // initialize state handle
    const [showPass, setShowPass] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState)
    // dispatch for redux flow
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // handler to toggle password visibility
    const togglePassword = (event) => {
        event.preventDefault();
        setShowPass(!showPass);
    }
    const pass = (showPass ? "text" : "password")
    // handler to toggle login vs sign up fields
    const handleToggle = (event) => {
        setIsSignup(!isSignup)
        setShowPass(false)
      }
      // handleChange function for form
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      // handleSubmit function for form submission
      const handleSubmit = (event) => {
        event.preventDefault();
        if (isSignup){
          //pass history to navigate and formData to get into database
          //dispatch - signup action - with formData and history
          dispatch(signup(formData, navigate))
        } else {
          dispatch(login(formData, navigate))
        }
        console.log(formData)
      };
    
    //google auth
    const googleSuccess = async (res) => {
      console.log("Google sign-in Succeeded")
      // /?. prevents crash if value is null
      const result = res?.profileObj;
      const token = res?.tokenId;

      try {
          dispatch({ type: 'AUTH', data: { result, token } });
          navigate('/')
      } catch (error) {
          console.log(error)
      }
    }
      const googleFailure = (error) => {
          console.log(error)
          console.log("Google sign-in failed. This is painful")
      }

  return (
    <div className="container">
        <div className="card">
            <h3>{isSignup ? 'Sign up' : 'Sign In'}</h3>
        <form className="authForm" onSubmit={handleSubmit}>
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" autocomplete={"on"}/>
            <Input name="password" label="Password" handleChange={handleChange} type={pass} autocomplete={"off"}/>
            <button className="auth" onClick={togglePassword}>Show Password</button>
            {/* && is ternary notation but with no else on false */}
            { isSignup && <Input name="confPass" label="Repeat Password" handleChange={handleChange} type={pass} autocomplete={"off"}/> }
            <GoogleLogin 
                clientId="304928940408-de8cbhprfiu9quvliu8gj4huahd75pho.apps.googleusercontent.com"
                render={(renderProps) => (
                    <button className="auth" 
                    onClick={renderProps.onClick} 
                    disabled={renderProps.disabled} 
                    variant="contained" 
                    > Google Sign In</button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}  
                cookiePolicy="single_host_origin"          
            />
          <input className="auth" type="submit" value={isSignup ? 'Sign Up' : 'Log in'} />
          <button className="auth" onClick={handleToggle}>{isSignup ? 'Already have an account?' : "Make Account"}</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
