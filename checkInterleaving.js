// check whether a given string is inteleaving the two string and should maintain its order
//eg:- str1 = "AB"
// str2 = "BC"
//str3 = ACBD
//output : true

function checkInter(s1,s2,s3){
if(s1.length+s2.length !== s3.length) return false
let i =0 , j=0 , k=0
while(k!= s3.length){
    if(s1[i]==s3[k] && i < s1.length){
        i++
    }
    else if(s2[j]==s3[k] && j < s2.length){
        j++
    }
    else{
        return false
    }
    k++
}
return true

}

let s1 = "AB"
let s2 = "CD"
let s3 = "ABCD"
console.log(checkInter(s1,s2,s3));