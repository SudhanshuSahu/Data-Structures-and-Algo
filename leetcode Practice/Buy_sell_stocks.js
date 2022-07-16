var maxProfit = function(prices) {
    let min = Infinity
    let result = -Infinity
    for(let i =0 ; i<prices.length ; i++){
        min = Math.min(prices[i],min)          //7 //1 , 1  , 1
        result= Math.max(prices[i]-min,result)  // 0 , 0 , 5
    }
      return result<0?0:result
  };