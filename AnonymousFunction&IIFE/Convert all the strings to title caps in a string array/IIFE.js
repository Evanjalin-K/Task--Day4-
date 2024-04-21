(function(msg) {
    let split = msg.split(" ");
    let output = split.map(word => word.charAt(0).toUpperCase()+ word.substring(1).toLowerCase());
    console.log(output.join(" "))
})("This is my string");

//Another logic//

(function(words){
    let str = words.split(" ");
    for (ind = 0; ind < str.length; ind++){
        str[ind] = str[ind][0].toUpperCase() + str[ind].substring(1);
        }
        console.log(str.join(" "));
})("javaScript is a scripting language used to develop web pages");
