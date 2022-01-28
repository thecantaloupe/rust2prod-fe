import axios from 'axios'

const API = axios.create({ 
    baseURL: 'https://canta-pfwarehouse.herokuapp.com/',
    headers: {"Content-Type": "application/json"}
})

// way to send session token to backend. interceptors and backend will know we are logged in
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchWarehouse= () => API.get('./warehouses')
export const createWarehouse= (newForm) => API.post('./warehouses', newForm)
export const updateWarehouse= (id, updatedForm) => API.put(`./warehouses/${id}`, updatedForm)
export const deleteWarehouse = (id) => API.delete(`./warehouses/${id}`)
export const login = (FormData) => API.post('./users/login',FormData)
export const signup = (FormData) => API.post('./users/signup',FormData)

const API_From = axios.create({ 
    baseURL: 'http://127.0.0.1:8000/',
    headers: {"Content-Type": "application/x-www-form-urlencoded"}
})
// way to send session token to backend. interceptors and backend will know we are logged in
// API_From.interceptors.request.use((req) => {
//     if(localStorage.getItem('profile')){
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
//     return req;
// })
export const fetchUser= () => API_From.get('./user')
export const createUser= (newForm) => API_From.post('./user', newForm)
export const updateUser= (id, updatedForm) => API_From.put(`./user/${id}`, updatedForm)
export const deleteUser= (id) => API_From.delete(`./user/${id}`)
export const login_2 = (FormData) => API_From.post('./user/login',FormData)
export const signup_2 = (FormData) => API_From.post('./user/signup',FormData)