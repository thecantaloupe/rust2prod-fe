import { useLocation, NavLink } from "react-router-dom";

// This allows persistance of the query string in the url
export default function QueryNavLink({ to, desc, ...props }) {
  let location = useLocation();
  return(
    <>
    <NavLink to={to + location.search} {...props} style={{ fontSize: "15px", marginBottom: "0" }}/>
    <h6 style={{ fontSize: "15px", marginBottom: "10px" }}>{desc}</h6> 
    </>
  ) 
}