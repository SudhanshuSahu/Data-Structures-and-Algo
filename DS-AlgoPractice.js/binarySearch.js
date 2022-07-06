// ************************ binary search algorithm*******************/
function binary(arr,k){
let start = 0
let end = arr.length-1
let mid=Math.round(start+(end-start)/2)

while(start<=end){
if(arr[mid]==k) return mid
if(k>arr[mid]){
    start = mid+1
}
else{
    end = mid-1
}
mid =Math.round(start+(end-start)/2)
}
return -1
}
console.log(binary([4,6,8,10,12,24],10));
console.log("__________________________________________________________________________________________");

//***********************************34. Find First and Last Position of Element in Sorted Array*****/
// arr = [1,2,3,3,5] ,target = 3
//output = [2,3] (index of 3)

function positionOfElement(arr,target){
let start = 0
let end = arr.length-1
let mid = Math.floor(start+(end-start)/2)
let ans = [-1,-1]
while(start<=end){
    if(arr[mid]==target){
      ans = mid
      end = mid-1
    }
    else if(target>arr[mid]){
        start = start+1
    }
    else{
        end = end-1
    }
    mid = Math.floor(start+(end-start)/2)
}
return [ans]
}
let target = 3 
let arr = [1,2,3,3,5]
console.log(positionOfElement(arr,target));