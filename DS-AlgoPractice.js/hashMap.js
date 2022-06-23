//*********print the duplicates in an array by using hash map************************************//


function duplicate(arr){
    let freq = new Map()
    for(let i=0 ; i<arr.length ; i++){
        if(freq.get(arr[i])==undefined){
            freq.set(arr[i],1)
        }
        else
        freq.set(arr[i],freq.get(arr[i])+1)
    }
    //now freq = Map(4) { 23 => 1, 3 => 2, 2 => 1, 1 => 2 }
    console.log(freq);
     let res= []
     for(let pairs of freq){//this will give key values in pair like :- [ 23, 1 ][ 3, 2 ] [ 2, 1 ]  [ 1, 2 ]
        if(pairs[1]>1) res.push(pairs[0])
     }
    return res
    }
    console.log(duplicate([23,3,2,1,3,1]));