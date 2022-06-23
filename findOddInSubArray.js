// function countOdd(arr,n){
//     let res =0;
//     for(let i =0 ; i<n;i++){
//         let val = 0;
//         for(let j =i ;j<n;j++){
//             val +=arr[j]
//             if(val %2 !=0)
//             res++
//         }
//     }
//     return res;
// }
// let ar = [ 5, 4, 4, 5, 1, 3 ];
// let n = ar.length;
// console.log(countOdd(ar,n));


// function getTranslationMap(rhyme) {
//     const rhymes = {
//       "apples and pears": "Stairs",
//       "hampstead heath": "Teeth",
//       "loaf of bread": "Head",
//       "pork pies": "Lies",
//       "whistle and flute": "Suit",
//     };
    
//     return rhymes[rhyme.toLowerCase()] ?? "Rhyme not found";
//   }

//   console.log(getTranslationMap("apples"));

function stringToBool(str) {
    const boolStrings = {
      "true": true,
      "false": false,
    };
  
    return boolStrings[str] ?? "String is not a boolean value";
  }

  console.log(stringToBool("fals"));