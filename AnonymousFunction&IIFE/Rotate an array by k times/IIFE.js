//let arr = [1,2,3,4,5,6,7];
//let k = 5
(function(arr,noOfRotation){
    for (let i = 0; i < noOfRotation; i++){
        arr.unshift(arr.pop())
        console.log(`step ${i+1}:` ,arr);
    }
})([1,2,3,4,5,6,7] ,5);
