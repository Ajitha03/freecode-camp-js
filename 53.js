var myArr = [1,2,3,4,5];
function queue(arr, item) {
  arr.push(item);
  return arr.shift(); 
}
console.log("Before: " + JSON.stringify(myArr));
console.log(queue(myArr, 6));
console.log("After: " + JSON.stringify(myArr));