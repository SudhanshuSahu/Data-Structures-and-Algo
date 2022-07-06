// //*********print the duplicates in an array by using hash map************************************//

// // function duplicate(arr){
// //     let freq = new Map()
// //     for(let i=0 ; i<arr.length ; i++){
// //         if(freq.get(arr[i])==undefined){
// //             freq.set(arr[i],1)
// //         }
// //         else
// //         freq.set(arr[i],freq.get(arr[i])+1)
// //     }
// //     //now freq = Map(4) { 23 => 1, 3 => 2, 2 => 1, 1 => 2 }
// //     console.log(freq);
// //      let res= []
// //      for(let pairs of freq){//this will give key values in pair like :- [ 23, 1 ][ 3, 2 ] [ 2, 1 ]  [ 1, 2 ]
// //         if(pairs[1]>1) res.push(pairs[0])
// //      }
// //     return res
// //     }
// //     console.log(duplicate([23,3,2,1,3,1]));
// //____________________________________________________________________________________________________________//
// //*********************************number having Maximum frequency ***********/
// //[1,2,2,2,1,1,1,2,1] = 1 => 5 , 2=>4  ====> output => 1(having frequency 5)
// function maxfreq(arr) {
//   let map = new Map();
//   let maxFreq = 0;
//   let maxEle = 0;

//   for (let i of arr) {
//     if (map.get(i)) {
//       map.set(i, map.get(i) + 1);
//       if (maxFreq < map.get(i)) {
//         maxFreq = map.get(i);
//         maxEle = i;
//       }
//     } else {
//       map.set(i, 1);
//     }
//   }
//   return maxEle;
// }
// console.log(maxfreq([1, 2, 2, 2, 1, 1, 1, 2, 1]));

// //_______________________________________________________________________________________________________//

// //*******************filter out unique element in array**************************************
// function uniqueArr(arr) {
//   let freq = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (freq.get(arr[i]) == undefined) {
//       freq.set(arr[i], 1);
//     } else freq.set(arr[i], freq.get(arr[i]) + 1);
//   }

//   console.log(freq);
//   let res = [];
//   for (let pairs of freq) {
//     if (pairs[1] == 1) res.push(pairs[0]);
//   }
//   return res;
// }
// console.log(uniqueArr([1, 1, 2, 22, 3, 5, 11, 2]));

// //________________________________________________________________________________________________//

// //******************find the duplicate element ******* */
// function duplicate(arr) {
//   let map = new Map();
//   for (let i of arr) {
//     if (map.get(i)) {
//       map.set(i, map.get(i) + 1);
//     } else {
//       map.set(i, 1);
//     }
//   }
//   let empArr = [];
//   for (let pairs of map) {
//     if (pairs[1] > 1) empArr.push(pairs[0]);
//   }
//   return empArr;
// }

// console.log(duplicate([1, 2, 3, 3, 6, 5, 2, 2, 1, 1, 2]));

// //_______________________________________________________________________________________//

// //*******************SUM OF LARGEST 2 NUMBERS OF ARRAY********************/
// function largestTwoNumberSum(arr) {
//   let firstMax = arr[0];
//   let secondMax = -Infinity;
//   for (let i in arr) {
//     if (arr[i] >= firstMax) {
//       //5>=8
//       secondMax = firstMax; // SM = 5
//       firstMax = arr[i]; // FM = 8
//     } else if (arr[i] > secondMax) {
//       secondMax = arr[i];
//     }
//   }
//   return firstMax + secondMax;
// }
// let arr = [4, 8, 5, 3, 21, 1, 3, 9, 10, 11];
// console.log(largestTwoNumberSum(arr));
// //______________________________________________________________________________________________________//

// //********************Check if max occurring character of one string appears same number of times in other *****/
// //a : "hello world"
// //b : "llleawoprd"
// //Output : Yes , 'l' has highest frequency of 3 in S1 and it appears 3 times in S2.
// // function(str1,str2){
// // let map = new Map()
// // let char = 0
// // let count = 0
// // for(let i of str1)

// // }

// //***************************************Second largest frequent Number******************** */
// function secondFrequentNumber(arr) {
//   let map = {};
//   for (let i in arr) {
//     map[arr[i]] = (map[arr[i]] || 0) + 1;
//   }
//   console.log(map);
//   let secMax ;
//   let max = 0;
//   for (let i in map) {
//     if(map[i]>max){
//         secMax = max
//        max = map[i]
//     }

//     else if(map[i]>secMax){
//         secMax = map[i]
//     }
// }
//     if(secMax===0){
//         return "No 2nd freq is present"  
//   }
//   console.log(secMax);
//   for(let i in map){
//     if(map[i]=== secMax){
//         return i
//     }
//   }
//   return "no"
// }

// console.log(secondFrequentNumber([1, 1, 2, 2,2, 3, 4, 5, 6, 7, 8, 1, 9]));


//there is an  array of animals . the animals can be reapeated , give me the data that how many time each animal is repeated
//input = ["goat","cat","goat","horse","cat","dog"]

// function countFreq(animals){
//     let map = {}
//     for(let i of animals){
//         map[i]=(map[i]||0)+1
//     }
//     return map
//     }
//     console.log(countFreq(["goat","cat","goat","horse","cat","dog"]));


    //************Replace each element by difference of array size and frequency of that element */
// [1,2,5,2,2,5,4] and arr.length : 7 ==> [6,4,5,4,4,5,6]
function replace(arr){
let map = {}
for(let i in arr){
  map[arr[i]] = (map[arr[i]]||0)+1
}
for(let i in arr){
arr[i] = arr.length-map[arr[i]]
}
return arr

}
let arr = [1,2,5,2,2,5,4]
console.log(replace(arr));

//***program to check the half of a string contains the same alphabet in 2nd half */
//str = "abcbca"
//output = true
//code is same as code of anagram
function checkHalfs(str){
  if(str.length %2 !==0) return "No"
  let map = {}
  let i =0

  while(i < str.length/2){
       map[str[i]] = (map[str[i]]||0)+1
       i++  
  }
  i = str.length/2 
  while(i<str.length){
    if(map[str[i]]){
      map[str[i]]--
      i++
    }
    else{
      return false
    }
  }
  return true
}
let str = "abcabbac"
console.log(checkHalfs(str));