const isPalindrome = (calFromArr) =>{
    let sEqual = calFromArr;
    calFromArr = calFromArr.split("").reverse().join(""); // spliting, reversing and joinng
    return calFromArr == sEqual
}
function PalindromicStrings(arr)  //passing the value
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
let arr = [ "abc", "car", "ada", "racecar", "cool","jol", "madam" ]; //Driver code
// Print required answer
let final = PalindromicStrings(arr);
if(final.length == 0)
    console.log("-1");
for(let goodToGo of final)
    console.log(goodToGo,"");

  