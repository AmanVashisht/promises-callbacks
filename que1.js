// 1.  Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each 
// element is doubled using the callback

let arr=[1,2,3,4,5,6];

function doubled(callback,arr) {
    let res = arr.map(
        (num)=>{
            return callback(num)
        }
    )
    return res;
}

function callback(num) {
    return 2*num;
}
console.log(doubled(callback,arr));