let str1 = "cattl"
let str2 = "acttl"

function checkAnagram(str1,str2){
    let obj1 = {} //taking empty object to map alphabet as a key and frequency as a value

    if(str1.length !== str2.length) // checking if the length of str1 = str2 
    return "not an anagram"

    for( let i in str1){
        obj1[str1[i]] = (obj1[str1[i]] ||0)+1  // first it will show undefined so we use "||0" here so, that if it is undefined then make its value to 0 and then incremnet to 1
    }
    console.log(obj1);

for(let j of str2){
   if(!obj1[j]){
   
    return "Not an anagram"
   }
   obj1[j] -= 1
  
}
return "Yes, Anagram"
}

console.log(checkAnagram(str1,str2));