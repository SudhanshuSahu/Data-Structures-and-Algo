//*********print the duplicates in an array by using hash map************************************//


// function duplicate(arr){
//     let freq = new Map()
//     for(let i=0 ; i<arr.length ; i++){
//         if(freq.get(arr[i])==undefined){
//             freq.set(arr[i],1)
//         }
//         else
//         freq.set(arr[i],freq.get(arr[i])+1)
//     }
//     //now freq = Map(4) { 23 => 1, 3 => 2, 2 => 1, 1 => 2 }
//     console.log(freq);
//      let res= []
//      for(let pairs of freq){//this will give key values in pair like :- [ 23, 1 ][ 3, 2 ] [ 2, 1 ]  [ 1, 2 ]
//         if(pairs[1]>1) res.push(pairs[0])
//      }
//     return res
//     }
//     console.log(duplicate([23,3,2,1,3,1]));
//____________________________________________________________________________________________________________//
//*********************************number having Maximum frequency ***********/
//[1,2,2,2,1,1,1,2,1] = 1 => 5 , 2=>4  ====> output => 1(having frequency 5)
function maxfreq(arr) {
    let map = new Map()
    let maxFreq = 0
    let maxEle = 0

    for(let i of arr){
        if(map.get(i)){
            map.set(i,map.get(i)+1)
            if(maxFreq<map.get(i)){
                maxFreq = map.get(i)
                maxEle = i
            }
        }
            else{
                map.set(i,1)
        }
    
    }
return maxEle
}
console.log(maxfreq([1,2,2,2,1,1,1,2,1]));

//_______________________________________________________________________________________________________//

//*******************filter out unique element in array**************************************
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
        if(pairs[1]==1) res.push(pairs[0])
     }
    return res
    }
    console.log(uniqueArr([1,1,2,22,3,5,11,2]));

    //________________________________________________________________________________________________//
   
   
    //******************find the duplicate element ******* */
function duplicate(arr){
    let map = new Map()
    for(let i of arr){
        if(map.get(i)){
            map.set(i,map.get(i)+1)
        }
        else{
            map.set(i,1)
        }
    }
    let empArr = []
    for(let pairs of map){
        if(pairs[1]>1) empArr.push(pairs[0])
    }
    return empArr
    }
    
    console.log(duplicate([1,2,3,3,6,5,2,2,1,1,2]))

    //_______________________________________________________________________________________//

    //*******************SUM OF LARGEST 2 NUMBERS OF ARRAY********************/
function largestTwoNumberSum(arr){
    let firstMax= arr[0]
    let secondMax  = -Infinity
    for(let i in arr){
        if(arr[i]>=firstMax){      //5>=8
            secondMax = firstMax   // SM = 5
            firstMax=arr[i]        // FM = 8
        }
        else if( arr[i] > secondMax){
            secondMax = arr[i]
        }
    }
return firstMax+secondMax
}
let arr = [4,8,5,3,21,1,3,9,10,11]
console.log(largestTwoNumberSum(arr));
//______________________________________________________________________________________________________//

//********************Check if max occurring character of one string appears same number of times in other *****/
//a : "hello world"
//b : "llleawoprd"
//Output : Yes , 'l' has highest frequency of 3 in S1 and it appears 3 times in S2. 
function(str1,str2){
let map = new Map()
let char = 0
let count = 0
for(let i of str1)




}
