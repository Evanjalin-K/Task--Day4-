const isPalindrome = function (s){
    let sEqual = s; //assingning s value to sEqual
    //let regx = /[\W\_]/g;      // regex (to remove the alpha numeric value )
    //let smlLtr = s.toLowerCase().replace(regx,""); //converting string into smallCase
     s = s.split("").reverse().join(""); // spliting, reversing and joinng
    return s == sEqual
}
function PalindromicStrings(arr) //passing the value
{
    let ans = [];
 
    // Loop to find palindrome string
    for (let i = 0; i < arr.length; i++) {
 
        // Checking if given string is
        // palindrome or not
        if (isPalindrome(arr[i])) {
 
            ans.push(arr[i]);   // Update answer variable
        }
    }
    return ans;
}
 
// Driver Code
let arr = [ "abc", "car", "ada", "racecar", "cool","jol", "madam" ]; 
// Print required answer
let final = PalindromicStrings(arr);
if(final.length == 0)
    console.log("-1");
for(let st of final)
    console.log(st,"");

  