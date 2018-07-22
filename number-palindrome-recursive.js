function recNumPalindrome (num) {
    var reversed = "";
    var nextNum = String(num + 1);
    function reversal(toBeReversed) {
        var unused = toBeReversed.slice(0, toBeReversed.length-1);
        var used = toBeReversed[toBeReversed.length-1];
        reversed += used;
        if (toBeReversed.length === 1) {
            return reversed;
        } else {
            return reversal(unused);
        }
    }
    if (reversal(nextNum) === nextNum) {
        return Number(nextNum);
    } else {
        return recNumPalindrome(num + 1);
    }
}

console.log(recNumPalindrome(8)); // 9
console.log(recNumPalindrome(10)); // 11
console.log(recNumPalindrome(117)); // 121
console.log(recNumPalindrome(175)); // 181
console.log(recNumPalindrome(1000)); // 1001