const palindromes = function (string) {
    let cleanString = string.replace(/[.,!? ]/g, "").toLowerCase();
    let result = cleanString
        .split("")
        .reverse()
        .join("");

    // console.log(result);
    if (cleanString == result) { return true }
    else { return false };
};

// console.log(palindromes("123321"));

// Do not edit below this line
module.exports = palindromes;
