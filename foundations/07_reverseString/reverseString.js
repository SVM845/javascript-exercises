const reverseString = function(string) {
    string = string.split("");
    let result = '';
    for (let i = string.length - 1; i >= 0; i-- ){
        result += string[i];
    }
    return result;
    
};  

reverseString("hello there")

// Do not edit below this line
module.exports = reverseString;
