//**Swap two numbers without using 3 rd variable */

let a = 5
let b = 10
 a = a+b // 15
 b = a-b // 5
 a =a-b // 10
 console.log(a,",",b);

 //OR in Es6 we can:-
 function swapNew(n1,n2){
[n1,n2]=[n2,n1]
return n1+" "+n2
 }
 console.log(swapNew(5,4));
 //______________________________________________________________________________________________//

 let x = "heelo"
 let y = "hi"
 x = x+y
 
console.log(x);

//********************reverse array with using new array*********************** */
// let arr = [1,5,8,9,6,7]
// // let str = ""
//  let i = 0
//  let k = arr.length-1
// while(i<k){
//     arr[i]= arr[i]+arr[k]
//     arr[k]=arr[i]-arr[k]
//     arr[i] = arr[i]-arr[k]
//     i++
//     k--
// }
//***********************rotate the array in cyclic *******/

function reverse(a,b){
    a= a+b
    b = a-b
    a= a-b
    return a,b
}
 function rotate(arr,k){
    
    return reverse(arr)
 }

let arr = [1,2,3,6,4]
 console.log(rotate(arr,2));