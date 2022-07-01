
function revNum(arr,left,right){
    while(left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++
        right--
    }
}

function rotateArr(arr,k){
revNum(arr,0,arr.length-1)
revNum(arr,0,k-1)
revNum(arr,k,arr.length-1)

return arr
}
let arr = [1,2,3,4,5,6]
let k = 2
console.log(rotateArr(arr,k));