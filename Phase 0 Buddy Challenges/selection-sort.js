function selectionSort (numArr) {
    for (var i = 0; i < numArr.length - 1; i++) {
        var temp = 0;
        var k = 0;
        for (var j = i + 1; j < numArr.length; j++) {
            if (numArr[j] < numArr [i]) {
                if (temp === 0) {
                    temp = numArr[j];
                    k = j;
                } else if (numArr[j] < temp) {
                    temp = numArr[j];
                    k = j;
                }
            }
        }
        if (temp !== 0) {
            numArr[k] = numArr[i];
            numArr[i] = temp;
        }
    }
    return numArr;
}

console.log(selectionSort([5, 3, 7, 2, 6, 10]));