function count(arr){
    if(arr.length){
        let i = 0                             
        for( j=1 ; j< arr.length ; j++){      
            if(arr[i]!=arr[j]){
                i++
                arr[i]=arr[j]
            }
        }
        return i+1
    }
    else{
        return 0
    }
    }
    
    const arr =count([1,2,2,3,4,6,7,8,9,9,9])
    console.log(arr)