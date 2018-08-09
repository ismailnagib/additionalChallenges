function bubbleSort (numArr) {
    var temp = 0;
    for (var i = 1; i < numArr.length; i++) {
        for (var j = 0; j < numArr.length - 1; j++) {
            if (numArr[j] > numArr [j+1]) {
                temp = numArr[j];
                numArr[j] = numArr[j+1];
                numArr[j+1] = temp;
            }
        }
    }
    return numArr;
}

console.log(bubbleSort([5, 3, 7, 2]))