// Checking sum zero - problem 1
let a =0 
//let arr = [-5,-4,-3,4,8,9]
// for(let i of arr){
//     for(let j = i+1 ; j<arr.length ; j++){
//         if(i+arr[j]===0) {
//             console.log([i,arr[j]]);
//         }
        
//     }
// }

let arr =[3,2,4]
function ar(sum){
   let optimal = false
let i = 0 
let j = arr.length-1
while(i<j){
    if(arr[i]+arr[j]==sum) {
    optimal = true
    break
   
}
    else if(arr[i]+arr[j] > 0) 
    j = j-1

    else if(arr[i]+arr[j] < 0)
    i = i+1
    
    
}
return optimal
}

console.log(ar(7));



// const twoSum = function(nums, target) {
//     let sortedArr=nums.sort(function(a, b) {
//       return a - b;
//     });
    
//         //let ar = []
//           let i = 0 ;
//           let j = sortedArr.length-1;
//           while(i<j){
//               if(sortedArr[i]+sortedArr[j]===target){
//                  // ar.push(i,j)
//                  return [i,j]
//               }
//               if(sortedArr[i]+sortedArr[j] > target){
//                   j--
//               }
//               else{
//                   i++
//               }
//           }
//          //return ar
//     }

//     let nums =  [3,2,4]
//     let target = 6
//     console.log(twoSum(nums,target));