//***********************take  iput and check wheck wheteher the input is integer or not***** */
//APPROACH-2 USING REGEX
function integer(int){
    let pattern = /^-?[0-9)]+$/
    let result = pattern.test(int)
    return result
    }
    console.log(integer(48));

 //APPROACH-2//************************ */
 function int(num){
let isNum = true
for( let i=0 ; i<num.length ; i++){
    if(num[i]>="0" && num[i] <="9"){
    continue
}
    else{
        isNum=false
        break
    }
}
return isNum
 }  
 console.log(int("4k")) 
    