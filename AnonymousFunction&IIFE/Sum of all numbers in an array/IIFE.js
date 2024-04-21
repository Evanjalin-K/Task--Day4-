//IIFE 

(function(arr){
    let add =0;
    for (i = 0; i < arr.length; i++){
    add = arr[i]+add;
    }
    console.log(add);
})([1,2,3,4,5,5]);
