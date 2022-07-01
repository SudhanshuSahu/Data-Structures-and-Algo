//**********FIND THE MAX SUM OF SUBARRAY IN AN ARRAY******//
//using kadane's Algorithm

//i/p == > arr = [5,-4,-2,6,-1]
//o/p ==> 6
function maxSubArr(arr){
let currSum= 0
let maxSum =0
for(let i of arr){
    currSum += i
    if(currSum>maxSum){
        maxSum = currSum
    }
    if(currSum<0){
        currSum = 0
    }
} 
return maxSum
}
const arr =[5,-4,-2,6,-1]
console.log(maxSubArr(arr));