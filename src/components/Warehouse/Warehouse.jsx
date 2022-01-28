import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css"
import { deleteWarehouse, getWarehouse } from "../../actions/Warehouse";

export default function Warehouse() {
  const initialState = { address1: '', city: '', state: '', description: '', warehouse_manager: '', inventory_levels: [{id: '1', count: ''}]}
  console.log("start")
  let params = useParams();
  let number = parseInt(params.warehouseId, 10)
  console.log(number)
  
  let warehouse = useSelector((state) => {
    const all_warehouses = state.warehouses
    let one_warehouse = all_warehouses.find((warehouse) => {
      return warehouse.id === number
    })
    return one_warehouse
  });
  console.log(warehouse)
  if (!warehouse) {
    warehouse = initialState
  }
  console.log(warehouse)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let inv = warehouse.inventory_levels
  console.log(inv)


  return (
    <main style={{ padding: "1rem" }}>
      <h3>{warehouse.description}</h3>
      <p>{warehouse.address1}, {warehouse.city}, {warehouse.state}</p>
      <p>Warehouse Manager: {warehouse.warehouse_manager}</p>
      <h5>Inventory Levels</h5>
      {inv.map((invs) =>(
      <p key={invs.id}>Inventory Item Id number: {invs.id} | Count: {invs.count}</p>))}
      {user && (
      <button
            onClick={() =>
              dispatch(deleteWarehouse(warehouse.id),
              dispatch(getWarehouse()), navigate("/warehouses"))
            }
            id="delete"
          >
            DELETE
          </button>
            )}
    </main>
  );
}