// function solution(a,b) {
//     let str = a+b
//     let news = [...new Set(str)]
//      return news.join("")
//  }

//  console.log(solution("pearr","peach"));
// function solution(a) {
//     let count = 0
//     for(let i =0;i<a.length ; i++){
//         for(let j=i+1 ; i<a.length-1 ; i++){
//             if(a[i]==a[j]){
//                 count++
//             }

//         }
//         console.log(a[j],count)
//     }
// }

// console.log(solution([1,1,2,3,4,5,6,7,1,2,3]));
const data = [
    { firstname: "Keshika", age: 20 },
    { firstname: "Vikas", age: 21 },
    { firstname: "Umesh", age: 23 }
];
function a(b){
    
let search = data.filter((item)=>{
return (item.firstname=="K")
})
console.log(search)

}
console.log(a("k"));
