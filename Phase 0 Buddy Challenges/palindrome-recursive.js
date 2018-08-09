function recPalindrome(str) {
    var reversed = "";
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
    if (reversal(str) === str) {
        return true;
    } else {
        return false;
    }
}

console.log(recPalindrome('katak')); // true
console.log(recPalindrome('blanket')); // false
console.log(recPalindrome('civic')); // true
console.log(recPalindrome('kasur rusak')); // true
console.log(recPalindrome('mister')); // false