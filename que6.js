// 6.  Fetch results asynchronously.
// Write a function that asynchronously fetches data from an API 
// [ https://jsonplaceholder.typicode.com/todos/1 ] and logs the result to the console.

async function fetchdata(){
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data) 
}

fetchdata()