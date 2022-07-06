
function revNum(arr,left,right){
    while(left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++
        right--
    }
}

function rotateArr(arr,k){
    k=k%arr.length // we wrote this because if k is greater then the length of arr then we rotate it by the remainder
revNum(arr,0,arr.length-1)
revNum(arr,0,k-1)
revNum(arr,k,arr.length-1)

return arr
}
let arr = [1,2,3]
let k = 4
console.log(rotateArr(arr,k));