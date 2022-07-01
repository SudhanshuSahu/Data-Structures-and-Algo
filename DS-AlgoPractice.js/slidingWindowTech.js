// ////brute force 
// function maxSum(arr,k){
//     let maxSum = 0
    
//     for(let i =0 ; i<arr.length-k +1 ; i++){
//         let sum = 0
//         {
//             for(let j = i ; j <i+k ; j++){
//                 sum = sum + arr[j]
//         }
//         if(sum > maxSum){
//             maxSum = sum      // maxSum = 3,5,
//         }
//     }
//     }
//     return maxSum
//     }
//     let arr = [1,2,3,4,5]
//     let k = 3
//     console.log(maxSum(arr,k))



    //************************SLiding window techinique***********************************//
//find the largest some of k consecutive integers*******//
    // function maxSum(arr,k){
    //     let maxSum = 0
    //     let sum =0
    //     let i =0 
    //     while(i < k){
    //         sum = sum+arr[i]
    //         i++
    //     }
    //     maxSum = sum 
    //     i = k
    //     while(i<arr.length){
    //         sum = sum + arr[i] - arr[i-k]
    //         if(sum > maxSum){
    //             maxSum = sum
    //         }
    //         i++
    //     }
    //         return maxSum
    //     }
    //     let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20]
    //     let k = 4
    //     console.log(maxSum(arr,k))


//*****Given a string S and a number K, find the number of substrings of length K whose sum of ASCII value of characters is divisible by K.********************

// function asciiCode(str,k){
//  let sum = 0
//  let count = 0

//  if(str.length<k) {
//  return 0
//  }
//  let i = 0
//  while(i<k){
//     sum += str[i].charCodeAt(0)  
//     i++
//  }
//  if(sum % k ==0){
//    count++
//  }
// i=k
// while(i<str.length){
//     sum += str[i].charCodeAt(0) - str[i-k].charCodeAt(0)
//     i++
   
//     if(sum % k==0){
//         count++
//     }
// }
// return count
// }
// let str = "adkf"
// let k = 3
// console.log(asciiCode(str,k));



//problem>>3 - Longest Substring Without Repeating Characters (Leetcode Medium) Interview Questions

//str1 = "abbcdafeegh"
//output =bcdafe
//output = 6
var lengthOfLongestSubstring = function(s) {
    let start = 0 
    let end  =0 
    let maxLength =0
    let uniqueChar = new Set()
    while(end<s.length){
        if(!uniqueChar.has(s[end])){
           uniqueChar.add(s[end])
             end++
        maxLength = Math.max(maxLength,uniqueChar.size)
       
           }
     else{
         uniqueChar.delete(s[start])
         start++
     }
    }
 return maxLength
 };
 console.log(lengthOfLongestSubstring("abbcdafeegh"))