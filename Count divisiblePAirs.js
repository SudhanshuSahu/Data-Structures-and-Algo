

function  countDiv(arr){
    let count = 0
    for(let i=0 ; i<arr.length ; i++){
        for(let j = i+1 ; j<arr.length ; j++){
            if(arr[i] % arr[j]==0 || arr[j] % arr[i] ==0){
                count ++
            }
        }
    }
    return count
}

let arr = [1,2,3,4]
console.log(countDiv(arr));