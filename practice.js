// //

// // let arr =[1,2,3,4,5,6,7,8,9]
// // let sum = []
// // function a(arr){
// // for(let i=arr.length-1 ; i>=0 ; i--){
// //     //sum.push(arr[i])
// //     console.log(arr[i]);

// // }
// // return " "
// // }

// // console.log(a(arr));

// //reverse of an arr

// // function rev(arr){
// //     let obj1 = {} //taking empty object to map alphabet as a key and frequency as a value
// //     for( let i in arr){
// //         obj1[arr[i]] = (obj1[arr[i]] ||0)+1  // first it will show undefined so we use "||0" here so, that if it is undefined then make its value to 0 and then incremnet to 1
// //     }

// //     return (obj1.stringyfy());

// // }
// // let arr = "hello world"
// // console.log(rev(arr));

// // function checkStr(str1 ,str2){

// // }

// // let str1 = "Code Zinger University"
// // let str2 = "Zinger"
// // console.log(checkStr(str1,str2));

// function maxSum(arr,k){
// let maxSum = 0

// for(let i =0 ; i<arr.length-k +1 ; i++){
//     let sum = 0
//     {
//         for(let j = i ; j <i+k ; j++){
//             sum = sum + arr[j]
//     }
//     if(sum > maxSum){
//         maxSum = sum      // maxSum = 3,5,
//     }
// }
// }
// return maxSum
// }
// let arr = [-1,5,-5,8,-2,6,9]
// let k = 3
// console.log(maxSum(arr,k))

// const reverse = function(x) {

// let arr = x.toString().split("").reverse().join("")
// if(arr[arr.length-1]==("-")){
//     arr = "-"+arr
//     return parseInt(arr)
// }else{
// return parseInt(arr)
// }
// };

// let x = -321
// console.log(reverse(x));

// function maxSum(arr,k){
// let obj = {}
// let i = 0
// while(i<arr.length){
//     arr[i] = arr[i]*arr[i]
//     obj[arr[i]]= (obj[arr[i]]||0)+1
//     i++
// }
// console.log(obj);
// let j=0
// while(j<k.length){
//     if(obj[k[j]]){
//         obj[k[j]] -= 1

//     }
//     else return false
// }
// console.log(obj);
// return true
// }
// let arr = [2,4,1,3]
// let k = [1,16,4,9]
// console.log(maxSum(arr,k));

// var removeElement = function(nums) {
//     let count = 0

// for(let i =0 ; i<nums.length ;i++){    // i= 5 => nums[5] = 0
//     if(nums[i+1]<nums[i]){
//         nums[count] = nums[i+1]
//         count++
//     }          //5
// }                                //[0,1,3,0,4]
//     return count
// };

// let nums = [6,3,4,5,9,8,3]
// //let val = 2
// console.log(removeElement(nums));

//*******************************************fibonacci by recursion*/
// function fib(n){
// if(n==3) return 1
// return fib(n-1)+fib(n-2)
// }
// console.log(fib(3)); // 0,1,1

//************************ binary search algorithm*******************/
// function binary(arr,k){
// let start = 0
// let end = arr.length-1
// let mid;
// if(arr.length%2 !=0){
// mid = (start+end)/2
// }
// else{
//     mid = Math.round((start+end)/2)
// }
// while(start<=end){
// if(arr[mid]==k) return mid
// if(k>arr[mid]){
//     start = mid+1
// }
// else{
//     end = mid-1
// }
// mid = Math.round((start+end)/2)
// }
// return -1
// }
// console.log(binary([4,6,8,10,12,24],4));

//////////////////******************************************* */
// function even(a,b) {

// }
// console.log(even(16,25));

//*************COunting unique************************** */
// function countingUnique(arr){

// }
// console.log(countingUnique([[1,1,2,22,3,5,11,2]]));

// let arr = [{a:1},{b:2},{c:3}]

// //let arr2= JSON.parse(JSON.stringify(arr))
// let arr2 = arr.map(a => {return {...a}})
// console.log(arr2);



//Capitalise

// function cap(arr){
// let arr1 = []
// if(arr.length ==1) return str.slice(0,1).toUpperCase().concat(str.slice(1))
// for(let i =0 ; i<arr.length ; i++){
//      arr1 =arr1.push(arr[i].slice(0,1).toUpperCase().concat(cap(arr)))
// }
// return arr1
// }
// let arr=["hi","hello","hola"]
// console.log(cap(arr));

// let str = 'hello'
// console.log(str.slice(0,1).toUpperCase().concat(str.slice(1)));

// let items = [{id:"a",val:10 ,w:3},{id:"b",val:6 ,w:8},{id:"c",val:3 ,w:3}]
// let maxWeight = 8
// for(let i =0 ; i<items.length ; i++){
    
// }

// var longestCommonPrefix = function(strs) {
//     let prefix = ""
//     if(strs === null || strs.length === 0) return prefix

//     for (let i=0; i < strs[0].length; i++){ 
//         const char = strs[0][i] // loop through all characters of the very first string. 

//         for (let j = 1; j < strs.length; j++){ 
//           // loop through all other strings in the array
//             if(strs[j][i] !== char) return prefix
//         }
//         prefix = prefix + char
//     }

//     return prefix
// }
// console.log(longestCommonPrefix(["flower","flow","flight"]));




// function rev(str){
//      str = str.toString()
// let empty ="" 
// for(let i = str.length-1 ; i>=0 ; i--){
//     empty += str[i]
// }
// return empty
// }
// console.log(rev(123));

// function valueEqualToIndex(arr,n){
//     for(let i =0 ; i<n ; i++){
//         if(arr[i]==i+1){
//             return arr[i]
//         }
//     }
    
// }

// console.log(valueEqualToIndex([15, 2, 45, 12, 35],5));



// 	function findMajority(arr)
// 	{
// 		let map = new Map();

// 		for(let i = 0; i < arr.length; i++) {
// 			if (map.has(arr[i])) {
// 					let count = map.get(arr[i]) +1;
// 					if (count >= parseInt(arr.length /2)) {
					
// 						return arr[i]
// 					} else
// 						map.set(arr[i], count);

// 			}
// 			else
// 				map.set(arr[i],1);
// 			}
// 			return "no majority"
// 	}
	
// // Driver Code
// 	let a = [1,1,2,2];
		
	// console.log(findMajority(a));


    // let a = 5
    // let b = 10
    //  a = a+b // 15
    //  b = a-b // 5
    //  a =a-b // 10
    //  console.log(a,",",b);


    // function maxSum(arr){
    //     let i = 0
    //     let k = arr.length-1
    //     let max = 0
    //     sum = 0
    //     while(i<k){
    //         sum = arr[i]+arr[k]
    //         if(sum>max){
    //             max++
    //         }
    //         if()
    //     }

    // }
    // let arr = [12,4,67,2,34]



    //*********************revision********************** */
    // function power(base,exp){
    //   if(exp == 0) return 1
    //   let pow = base*power(base,exp-1)
    //     return pow
    // }
    // console.log(power(2,4));

//0,1,1,2,3,5
//    function fib(num){
//       if(num <= 3) return 1
//      return fib(num-2)+fib(num-1)
//     }
//     console.log(fib());

//    function prod(num,n){
//       if(n==0) return num[n]
//      return num[n]*prod(num,n-1)
//     }
//     console.log(prod([1,2,3,4,5]),5);

//     function pal(str) {
//      let i =0
//      let k = str.length-1        
//      while(i<k){
//         if(str[i]==str[k]){
//             i++
//             k--
//         }
//         else{
//             return "Not a palindrome"
//         }
//      }
//      return "Palindrome"
//     }
// console.log(pal("atta"));


//*****************ROTATE ARRAY**************************** */
// function rotate(arr, val) {
//     let i=0;j=arr.length-1
//     const swap=(arr,i,j)=>{
//       while(i<j){
//         arr[i]=arr[i]+arr[j]
//         arr[j]=arr[i]-arr[j]
//         arr[i]=arr[i]-arr[j]
//         i++
//         j--
//       }
        
//     }
//     swap(arr,i,j)
//     i=0
//     j=val-1
//     swap(arr,i,j)
//     i=val
//     j=arr.length-1
//     swap(arr,i,j)
    
//     return arr
// //   }
      
// //   console.log(rotate([1, 2, 3, 4, 5, 6],3))




//   function swap(arr,i,j){
//      i = 0 
//      j = arr.length-1
//     while(i<j){
//         arr[i] = arr[i]+arr[j]
//         arr[j] = arr[i]-arr[j]
//         arr[i]= arr[i]-arr[j]
//         i++
//         j--
//     }
//     return arr            //4,3,2,1
//   }
//   function rotate(arr,k){    //3,4,1,2

//   return   swap(arr,k-1)
//   }
//  console.log(rotate([1,2,3,4],2));



// function foo(num){

// }














// function uniqueArr(arr){
//     let freq = new Map()
//     for(let i=0 ; i<arr.length ; i++){
//         if(freq.get(arr[i])==undefined){
//             freq.set(arr[i],1)
//         }
//         else
//         freq.set(arr[i],freq.get(arr[i])+1)
//     }

//      let count = 0
//      for(let pairs of freq){
//         if(pairs[1]==1) count++
//      }
//     return count
//     }
//     console.log(uniqueArr([9,8,7,6,5,4,3,2,1,0,12,13,14,21,45,65,23,34,54,56]));






// function print1(){
//     console.log("1");
// }


// let create = async function(){
//     await setTimeout(create,3000);
// }
// function print3(){
//     console.log("3");
// }

// print1()
 
// print3()





//*******************max sum of 3 consecutive sum *******/
function maxSum(arr){
let maxSum = 0
let sum = 0
for(let i = 0 ; i < 3 ; i++){
    sum += arr[i]
}
char = ""
maxSum = sum
i = 3
while(i<arr.length){
    sum += arr[i]-arr[i-3]
    if(sum>maxSum){
        maxSum=sum
    }
    i++
}
return [maxSum]

}
let arr = [8,1,3,9,6,2,11,7]
console.log(maxSum(arr));