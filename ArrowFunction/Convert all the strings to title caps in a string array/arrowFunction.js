const capitalLetter = (str)=> { 
let split = str.split(" ");
let output = split.map(word => word.charAt(0).toUpperCase()+ word.substring(1).toLowerCase());
console.log(output.join(" "))
}
capitalLetter("This is my string");

//We can also do like this also//

const sentence =(words)=>{
    let str = words.split(" ");
    for (ind = 0; ind < str.length; ind++){
    str[ind] = str[ind][0].toUpperCase() + str[ind].substring(1);
    }
    console.log(str.join(" "));
} 
sentence("javaScript is a scripting language used to develop web pages");