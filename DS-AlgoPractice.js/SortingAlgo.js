//**************************BUBBLE SORT********************* */
 
function bubble(arr){
for(let i =0 ;i<arr.length-1;i++){
    let swap = false  
    for(let j = 0 ; j<=arr.length-2 ; j++){ // or j <arr.length-1
        if(arr[j]>arr[j+1]){
        arr[j]=arr[j]+arr[j+1]
        arr[j+1]=arr[j]-arr[j+1]
        arr[j]=arr[j]-arr[j+1]
        swap = true
    }
}
    if(swap==false) break;   // if all the elments got sorted then this loop should break
}
return arr
}
let arr = [233,12,6,89,34,56]
console.log(bubble(arr));