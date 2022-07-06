//Convert the array of numbers to array of strings in such a way that if numbers was 1,2,3,4 the strings would have values like:-
// input = [1,2]
//output = ["a","ab"]

function generateString(number){
    let str = "abcdefghijklmnopqrstuvwxyz"
    let finalStr = ""
    let currIndex = 0
    while(currIndex<number){
        finalStr += str[currIndex%26]
        currIndex++
    }
    return finalStr
}

function encodeNumberWithChar(arr){
    for(let i =0 ; i<arr.length ; i++){
        arr[i] = generateString(arr[i]);
    }
    
}
 const temp = [2,5]
 encodeNumberWithChar(temp);
 console.log(temp)
