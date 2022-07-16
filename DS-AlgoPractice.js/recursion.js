//******(Problem 1)Write a fucntion to check if the elements of an array is divisible by 7 or not by using recursion */

// function div(arr){
//     if(arr.length ==0) return 
//     else{
//        let ele =  arr.pop()
//        if(ele%7 ==0){
//         console.log("yes",ele);
//        }
//        else console.log("no",ele);
//        div(arr)
//     }
//     }
    
//     console.log(div([24,58,92,49,63,78,45]));







    //(problem 2)**** write a function to get the sum of n integers by using recurion*******

    // function sum(n){
    //     if(n==1) return 1
    //     else{
    //         return (n+sum(n-1))
    //     }
    // }
    // console.log(sum(10));

    ////*******factorial by using recursion********* */

// function factorial(n){
// if(n==1) return 1
// else{
//     return n* factorial(n-1)
// }
// }

// console.log(factorial(6));









///*************************************palindorm by recursion*********************************////////
// function checkPalindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return checkPalindrome(str.slice(1,-1))
//     return false;
// }
    
//     console.log(checkPalindrome("aba"));








//***********************fibnacci series through recursion******************* */
//0,1,1,2,3,5
// function fib(n){
// if(n<=3) return 1
// else{
// return fib(n-1)+fib(n-2)
// }
// }
// console.log(fib(4));







//****************************find the product of an array through recursion******* */
//using array.slice()
// function prod(arr){
// if(arr.length==0) return 1
// return arr[0] * prod(arr.slice(1))
// }
// console.log(prod([1,2,3,4]));








//****************************find the product of an array through recursion******* */
//using array.pop()
// function prod(arr){
//     if(arr.length==0) return 1
//     let ele = arr.pop()
//     return ele * prod(arr)
//     }
//     console.log(prod([1,2,3,4]));






//*****************************************find the value of b to the power exp throufh recursion *************/
// logic===> pow(3,2) = 3*pow(3,1)
//             = 3*3*pow(3,0)
//             =3*3*1
//             =9

// function power(b,exp){
//     if(exp==0) return 1
//     return b * power(b,exp-1)
//     }
//     console.log(power(3,2));





//***************************************REVERSE STRING BY RECURSION*******************************************/
// function revString(str){
// if(str.length==1) return str
// return revString(str.slice(1)) + str[0]
// }
// console.log(revString("hello"));





//*********************PALINDROME CHECK BY RECURSION********************************************//
function pal(str) {
    if (str.length == 1) return true;
    return str[0] == str[str.length - 1] && pal(str.slice(1, -1));
  }
  console.log(pal("RADAR"));
  //********************************OR********************************************** */
  //**********************PREFERABLE ***********************/
  function pal(str) {
    if (str.length == 1) return true;
    if (str[0] == str[str.length - 1]) return pal(str.slice(1, -1));
    else return false;
  }
  console.log(pal("hello"));
  



  //**************************FLATTEN ARRAY BY RECURSION**************************** */
  //arr = [1,2,[3,4],[6,7]]
  
  function flatten(arr) {
    let flat = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) == false) flat.push(arr[i]);
      else {
        flat = flat.concat(flatten(arr[i]));
      }
    }
    return flat;
  }
  //let arr = [1,2,[3,4],[6,7]]
  let arr = ["a", "b", [[["c", "d"]]]];
  console.log(flatten(arr));

  



  //***********************************Capitalise Ist character in array *********(IMPORTANT FOR INTERVIEW)*/
  function capitalise(arr){
    let result = []
    if(arr.length==0) return []
    let s = arr[0][0].toUpperCase() + arr[0].slice(1)
    result.push(s)
    return result.concat(capitalise(arr.slice(1)))
  }
  console.log(capitalise(["hello","hi","hola"]));
  

  //--------------OR------------------------- */
  var capitalizeFirst = function(array) {
    if (array.length === 0) return [];
  
  let chars = array[0].split('');
  chars[0] = chars[0].toUpperCase();
  
  return [chars.join('')].concat(capitalizeFirst(array.slice(1)));
  
};
console.log(capitalizeFirst(["hi","hello","hola"]));





//_______________________________________________________________________________________________________//
//*****************************REVERSE EACH WORD OF A SENTENCE ********* */(IMPORTANT FOR INTERVIEW)
//INPUT = "hi to all"
//output = "ih ot lla"

function rev(str){
  if(str.length==0) return ""
  return rev(str.slice(1))+str[0]
}

function reverseSen(str){
let arr = str.split(" ")
let a= 0
for(let i =0 ; i<arr.length ; i++){
  arr[i]= rev(arr[i])
}
return arr.join(" ")
}
console.log(reverseSen("hello world"));

//________________________________________________________________________________________________//

