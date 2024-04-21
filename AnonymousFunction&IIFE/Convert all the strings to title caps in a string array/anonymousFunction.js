
let msg = "This is my string";
const capitalLetter = function(str) {
    let split = msg.split(" ");
    let output = split.map(word => word.charAt(0).toUpperCase()+ word.substring(1).toLowerCase());
    console.log(output.join(" "))
}
capitalLetter(msg);

//We can also do like this//

const sentence =function(words){
    let str = words.split(" ");
    for (ind = 0; ind < str.length; ind++){
        str[ind] = str[ind][0].toUpperCase() + str[ind].substring(1);
        }
        console.log(str.join(" "));
} 

sentence("javaScript is a scripting language used to develop web pages");