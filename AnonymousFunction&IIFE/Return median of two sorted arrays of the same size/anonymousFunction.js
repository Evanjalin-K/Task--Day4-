let arr1 =[1,2,6,]
let arr2 = [3,4,5]
const medianOf2Array = function(arr1, arr2){
    let concat = arr1.concat(arr2);
    concat = concat.sort(function (a,b) {return a-b})
    let length = concat.length;
    if (length%2==1){
        console.log(concat[(length/2)- .5]) //odd
        return(concat[(length/2)- .5]);
        }
        else{
        console.log((concat[(length/2)]+concat[(length/2)]-1)/2) //even
        }
    }
    medianOf2Array(arr1,arr2);