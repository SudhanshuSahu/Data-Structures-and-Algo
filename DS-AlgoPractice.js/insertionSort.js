//step -1 consider 2nd element , arr[1]=> start yahi se hoga hamara outer loop
//step 2 arr[j]==> left index of arr[1]   >curr => swapping perform hogi

function insertionSort(arr){
for(let i = 1 ; i<arr.length ;i++){
let curr = arr[i]
let j = i-1
while(j>=0 && arr[j]>curr){
    arr[j+1] = arr[j]   
    console.log(arr);   //[8,8,4,3,1]
    j--
    console.log(j);
}
arr[j+1] = curr

}
return arr
}
let arr = insertionSort([8,2,4,3,1])
console.log(arr);