//*****Find the maximum and minimum element in an array
function getMinMax(arr,n){
    let min = Infinity
    let max = -Infinity
    for(let i = 0 ; i<n ; i++){
        if(arr[i]>max){
            max=arr[i]
        }
        if(arr[i]<min){
            min = arr[i]
        }
    }
return ([min,max])
}
