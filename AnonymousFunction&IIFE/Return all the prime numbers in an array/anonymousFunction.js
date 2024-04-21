let emptyarr=[];
const isPrime = function(arr){
    arr.forEach((num)=>{
        let factor = 0;
        for (let i = 0; i <= num; i++) {
        if(num%i==0){
        factor++;
        }
    }
    if (factor===2){
       emptyarr.push(num);
    }
})
}
isPrime([1,2,3,4,5,6,7,8,9,20,17])
console.log(emptyarr);

