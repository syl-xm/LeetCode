/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === 0) return 0;
    if (divisor === 1) return dividend;
    let negativeFlag = false;
    if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
        negativeFlag = true;
    }

    let dividendAbs = Math.abs(dividend);
    let divisorAbs = Math.abs(divisor);
    
    let n = 0;
    while(dividendAbs - divisorAbs >= 0) {
        dividendAbs -= divisorAbs;
        n ++
    }

    if (negativeFlag) {
        if (-n > 2147483647) {
            return 2147483647
        }
        return -n
    } 

    if (n > 2147483647) {
        return 2147483647
    } 
    return n
    
};

console.log(divide(10, 3))
console.log(divide(7, -3))
console.log(divide(1, -1))
console.log(divide(10, 3))
console.log(divide(-2147483648, -1))
console.log(divide(-2147483648, 2))
