// function count(arr){
//     if(arr.length){
//         let i = 0                             
//         for( j=1 ; j< arr.length ; j++){      
//             if(arr[i]!=arr[j]){
//                 i++
//                 arr[i]=arr[j]
//             }
//         }
//         return i+1
//     }
//     else{
//         return 0
//     }
//     }
    
//     const arr =count([1,2,2,3,4,6,7,8,9,9,9])
//     console.log(arr)
//     console.log("_______________________________________________________________________________________");
//**************************************************************************** */
    function uniqueArr(arr){
    let freq = new Map()
    for(let i=0 ; i<arr.length ; i++){
        if(freq.get(arr[i])==undefined){
            freq.set(arr[i],1)
        }
        else
        freq.set(arr[i],freq.get(arr[i])+1)
    }
 
    console.log(freq);
     let res= []
     for(let pairs of freq){
        if(pairs[1]>=1) res.push(pairs[0])
     }
    return res.length
    }
    console.log(uniqueArr([1,2,2,3,4,6,7,8,9,9,9]));
    // console.log("_______________________________________________________________________________________");

    //__________________________________________________________________________________________________________//
    
//*******************filter out unique element in array**************************************
// function uniqueArr(arr){
//     let freq = new Map()
//     for(let i=0 ; i<arr.length ; i++){
//         if(freq.get(arr[i])==undefined){
//             freq.set(arr[i],1)
//         }
//         else
//         freq.set(arr[i],freq.get(arr[i])+1)
//     }
 
//     console.log(freq);
//      let res= []
//      for(let pairs of freq){
//         if(pairs[1]==1) res.push(pairs[0])
//      }
//     return res
//     }
//     console.log(uniqueArr([1,1,2,22,3,5,11,2]));

