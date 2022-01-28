import { useSelector } from "react-redux";
import { Outlet, useSearchParams } from "react-router-dom";
import QueryNavLink from "../queries/QueryNavLinks";
import { NavLink } from "react-router-dom";

const Warehouses = (props) => {
  const warehouses = useSelector((state) => state.warehouses)
  console.log(warehouses)
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
         borderRight: "solid 1px",
         padding: "1rem"
         }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={event => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
          />
          {warehouses
            .filter(warehouse => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = warehouse.address1.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map(warehouse => (
              <QueryNavLink
                  style={({ isActive }) => {
                  return {
                      display: "block",
                      margin: "1rem 0",
                      color: isActive ? "red" : "",
                      fontWeight: isActive ? "bold" : ""
                  };
                  }}
                  to={`/warehouses/${warehouse.id}`}
                  key={warehouse.id}
                  desc={warehouse.description}
              >
                  {warehouse.address1}
              </QueryNavLink>
          ))}
        <NavLink to="new">
            Add a new Warehouse
        </NavLink>
        </nav>
        <Outlet/>
      </div>
    );
  }

export default Warehouses;