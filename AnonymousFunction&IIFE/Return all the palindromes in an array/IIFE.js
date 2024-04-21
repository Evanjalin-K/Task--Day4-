const isPalindrome = (function (calFromArr){
    let sEqual = calFromArr;
    calFromArr = calFromArr.split("").reverse().join(""); // spliting, reversing and joinng
    return calFromArr == sEqual
})
function PalindromicStrings(arr) //passing the value
{
    let ans = [];
 
    for (let i = 0; i < arr.length; i++) {       // Loop to find palindrome string

 
        // Checking if given string is
        // palindrome or not
        if (isPalindrome(arr[i])) {
 
            ans.push(arr[i]);   // Update answer variable

        }
    }
    return ans;
}
 
let arr = [ "abc", "car", "ada", "racecar", "cool","jol", "madam" ]; 

let final = PalindromicStrings(arr);
if(final.length == 0)
    console.log("-1");
for(let st of final)
    console.log(st,"");

  