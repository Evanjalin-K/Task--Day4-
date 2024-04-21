const sum = (arr)=>{
    let add =0;
    for (i = 0; i < arr.length; i++){
    add = arr[i]+add;
    }
return add;
}
console.log(sum([1,2,3,4,5,5]));