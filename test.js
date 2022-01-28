// const url = require('url');
// const querystring = require('querystring');

console.log("test")

let test_data = { address1: 'addr', city: 'city', state: 'state', description: 'descript', warehouse_manager: 'test'}

console.log(test_data)
// let transformed_data = new url.URLSearchParams(test_data)

// console.log(transformed_data)
// console.log(transformed_data.toString())

console.log("URL search Parameters")
const params = new URLSearchParams(test_data).toString();

console.log(params)
// console.log(params.toString())


