(function(array){
    console.log (array.filter((el,index) => array.indexOf(el)==index));

   // return array.filter((el,index) => array.indexOf(el)==index)


})([1,2,3,3,4,5,6,7,5,8,"I", "Love", "I", "JavaScript", "JavaScript"]);
