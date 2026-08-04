const sumAll = function (num1, num2) {

    if (typeof num1 !== "number" || typeof num2 !== "number" || !Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return 'ERROR'
    }

    let resultArray = [];
    if (num2 > num1) {
        for (let i = num1; i <= num2; i++) {
            resultArray.push(i);
        }
        return resultArray.reduce((sum, current) => sum + current);


    } else if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            resultArray.push(i);
        }
        return resultArray.reduce((sum, current) => sum + current);


    }
};

sumAll(5, 10);

// Do not edit below this line
module.exports = sumAll;
