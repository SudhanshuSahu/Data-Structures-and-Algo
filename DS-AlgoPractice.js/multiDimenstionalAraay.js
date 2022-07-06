// //You are given an m*n integer grid accound where accounts[i][j]is the amount of money the ith costumer has in jth bank return the wealth that the richest customer has
//  //input : [[2,8,17],[7,1,10],[1,9,5]]
//  //output : 27


// function calculateTotalSum(banks){
//     let totalSum=0
//     for(let i =0 ; i<banks.length ; i++){
//         totalSum += banks[i]
//     }
//     return totalSum
// }

// function calculateRichestPerson(account){
//    let maxAmount = 0
//     for(let i =0 ; i<account.length ; i++){
//         maxAmount = Math.max(calculateTotalSum(account[0]),maxAmount)
//     }
//     return maxAmount
// }

// let account = [[2,8,17],[7,1,10],[1,9,5]]
// console.log(calculateRichestPerson(account));

var calculateTotalSum= function(bank){
    let totalSum = 0
    for(let i in bank){
        totalSum += bank[i]
    }
    return totalSum
}

var maximumWealth = function(accounts) {
    let maxSum = 0
    for(let i in accounts){
        maxSum = Math.max(calculateTotalSum(accounts[i]),maxSum)
    }
    returm maxSum
};