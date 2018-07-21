function selectionSort (numArr) {
    var temp = 0;
    for (var i = 0; i < 1; i++) {
        for (var j = 1; j < numArr.length; j++) {
            if (numArr[j] < numArr [i]) {
                if (temp === 0) {
                    temp = numArr[j];
                } else if (numArr[j] < temp) {
                    temp = numArr[j];
                }
            }
        }
        if (temp !== 0) {
            numArr[j-1] = numArr[i];
            numArr[i] = temp;
        }
    }
    return numArr;
}

console.log(selectionSort([5, 3, 7, 2]))