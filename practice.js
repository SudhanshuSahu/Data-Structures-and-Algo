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












//*******************max sum of 3 consecutive sum *******/
// function maxSum(arr){
// let maxSum = 0
// let sum = 0
// for(let i = 0 ; i < 3 ; i++){
//     sum += arr[i]
// }
// char = ""
// maxSum = sum
// i = 3
// while(i<arr.length){
//     sum += arr[i]-arr[i-3]
//     if(sum>maxSum){
//         maxSum=sum
//     }
//     i++
// }
// return [maxSum]

// }
// let arr = [8,1,3,9,6,2,11,7]
// console.log(maxSum(arr));


// function secondFrequentNumber(arr) {
//     let map = {};
//     for (let i in arr) {
//       map[arr[i]] = (map[arr[i]] || 0) + 1;
//     }
//     console.log(map);
//     let secMax ;
//     let max = 0;
//     let thirdMax;
//     for (let i in map) {
//       if(map[i]>max){
//         thirdMax = max
//          max = map[i]
//       }
  
//       else if(map[i]>thirdMax && map[i]<max){
//           secMax = map[i]
//       }
//   }
//       if(secMax===0){
//           return "No 2nd freq is present"  
//     }
//     console.log(thirdMax);
//     for(let i in map){
//       if(map[i]=== thirdMax){
//           return i
//       }
//     }
//     return "no"
//   }
  
//   console.log(secondFrequentNumber([1, 1,1, 2, 2,2, 3,3, 4, 5, 6, 7, 8, 1, 9]));


  //************************************************ */
//  function reverseInGroups(arr, n, k){
//     k = k%n
//     //reverseArr(arr,0,k-1)
//     revNum(arr,0,k-1)
//     revNum(arr,k,n-1)
    
//     return arr
    
// }

//     function revNum(arr,left,right){
// while(left<right){
//     [arr[left],arr[right]] = [arr[right],arr[left]]
//     left++
//     right--
// }
// }

// arr = [1,2,3,4,5]
// n = arr.length
// k = 3
// console.log(reverseInGroups(arr,n,k));

//QUick sort practice


// function pivot(arr,left,right){
// // left = 0
// // right = arr.length-1

// const swap = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

// let pivot = arr[left]
// let swapIdx = left
// for(let i = left+1 ; i<=right; i++){
//   if(arr[i]<pivot){
//     swapIdx++
//     swap(arr,swapIdx,i)
//   }
// }
// swap(arr,left,swapIdx)
// return swapIdx
// }

// function quickSort(arr,left=0,right=arr.length-1){
//   // left = 0
//   // right = arr.length-1
//   if(left<right){
//     let pivotIndex = pivot(arr,left,right) 
//     quickSort(arr,left,pivotIndex-1)
//     quickSort(arr,pivotIndex+1,right)
//   }
//   return arr
// }


// console.log(quickSort([4,8,2,1,5,7,6,3]))


// //*****************************longest not repeating substring*** */
// //i/p = abcabbcdabef

// function longSub(str){
//   let start = 0
//   let end = 0
//   let maxLength = 0
//   let uniqueChar = new Set()
//   while(end<str.length){
//     if(!uniqueChar.has(str[end])){
//       uniqueChar.add(str[end])
//       end++
//       maxLength = Math.max(maxLength,uniqueChar.size)
//     }
//     else{
//       uniqueChar.delete(str[start])
//       start++
//     }

//   }
// return maxLength
// }
// let str = "abcabbcdabefzr"
// console.log(longSub(str));


//Checking square of an arrays*********************
// function squareSum(arr1,arr2){
//   let map = {}
//   for(let i of arr1){
//     map[i*i]=(map[i]||0)+1
//   }
//   for(let i of arr2){
//    if(!map[i]){
//     return false
//    }
//    else{
//     map[i]--
//    }
//   }
//   return true
// }
// let arr1 = [1,2,3,4,5]
// let arr2 = [1,4,9,16,25]
// console.log(squareSum(arr1,arr2));




//** code to take input from user */
// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();    
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

// function solution(){

// }


// function main() {
//   var a = parseInt(readLine());
   
//   var res = solution(a);
//   console.log(res);
// }

//*******************************count the vowels****************** */
function vow(str){
  let vowel = "AEIOUaeiou"
  let count = 0
  for(let i in str){
    if(vowel.includes(str[i])){
      count++
    }
  }
  return count
}
console.log(vow("helloo"));

//********************************max product sub array**** */








//**************************shifting in linked list */
// class Node{
//   constructor(val){
//       this.val = val;
//       this.next = null;
//   }
// }

// class SinglyLinkedList{
//   constructor(){
//       this.head = null;
//       this.tail = null;
//       this.length = 0;
//   }
//  push(val){
//   let newNode = new Node(val)
//   if(!this.head){
//     this.head = newNode
//     this.tail = this.head
//   }
//   else{
//     this.tail.next = newNode
//     this.tail = newNode
//   }
//   this.length++
//   return this;
//  }
// pop(){
// if(!this.head) return undefined
// let current = this.head
// let newTail = current
// while(current.next){  //sudhanshu-> null == yes
//   newTail = current                   //goodbye
//   current = current.next              //sudhanhsu
// }
// this.tail = newTail
// this.tail.next = null
// this.length--
// return current
//   }
//   shifting(){
//     if(!this.head) return undefined
//     let current = this.head
//     this.head = current.next
//     this.length--
//     if(this.length===0){
//       //this.head = null
//       this.tail = null
//     }
//     return current
    
//   }

//   unshift(val){
//     let newNode = new Node(val)
//     let currentHead = this.head
//     if(!this.head){
//       this.head = newNode;
//       this.tail = this.head;
//   }
// else{
//   newNode.next = currentHead
//   this.head = newNode
// }
//   this.length++
//   return this
//   }

//   get(index){
//     if(index<0 || index>= this.length) return null
//     let counter= 0
//     let current = this.head
//     while(counter !=index){
//       current = current.next
//       counter++
//     }
//     return current
//   }
//   set(index,val){
//     let foundNode = this.get(index)
//     if(foundNode){
//       foundNode.val = val
//       return true
//     }
//     return false
//   }

//   remove(index){
//    if(index<0 || index>this.length) return undefined 
//    if(index ==0) return this.shifting()
//    if(index == this.length-1) return this.pop()
//    let prevNode = this.get(index-1)
//    let removedNode = prevNode.next
//    prevNode.next = removedNode.next
//    this.length--
//    return removedNode
    

//   }
// }


// var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")
// list.push("sudhanshu sahu")
// list.push("!!!!")
// //list.unshift("hola")


// list.remove(1)
// //list.set(1,"My name is")

// //console.log(list.remove(0));

// console.log(list);


//______________________________________________________________________________________________
//*****************prime number*********** */
// for(let i=10;i<50;i++){
//   let c=0
//   for(let j=2;j<=i;j++){
//       if(i%j===0){
//           c++
//           console.log(c);
//       }
//   }
//   if(c===1){
//       console.log(i)
//   }
// }


//________________________________________________________________________________________________
// //sliding window
// function maxSubStr(str){
// let uniqueArr = new Set()
// let maxEle = 0
// let start =0
// let end = 0
// while(end<str.length){
//   if(!uniqueArr.has(str[end])){
//     uniqueArr.add(str[end])
//     maxEle = Math.max(maxEle,uniqueArr.size)
//     end++
//   }
//   else{
//     uniqueArr.delete(str[start])
//     start++
//   }
// }
// return maxEle
// }
// let str = "abdeftttttdceas"
// console.log(maxSubStr(str));



// //******************** */
// let arr = [1,2,3,4]
// let arr1 = [1,2,3,4]
// if(arr===arr1){
//   console.log("true hai bhai");
// }else console.log("false");






//_______________________________________________________________________________________________________
// //****************** */
// function palidrome(x){
//   if (x < 0) {
//       return false;
//   }
//   // Store the number in a variable
//   let number = x;
//   // This will store the reverse of the number
//   let reverse = 0;
//   while (number > 0) {                         //125
//       reverse = reverse * 10 + number % 10;  // 
//       number = parseInt(number / 10);
//   }
//   return x === reverse;
// };
// let result = palidrome(121)
// console.log(result);


// function print1(){
//   console.log("1");
// }

//_______________________________setTimeout()________________________________________________________
// let create =  function(){
//    setTimeout(create,3000);
// }
// function print3(){
//   console.log("3");
// }

// create("")

// print3()

// function add() {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i)
//     }, 5000);
//   }
// }

// add();



// //__________________________________interview Questions_________________________________


// (async()=>{function A(){

//   console.log("a")
//   await sleep(2)
//   console.log("b")
//   };
//   A();
//   async function sleep(seconds){
//   //Write your code here
//   }
//   })();



