function asterisk(height) {
    var spaceLimit = height - 1;
    var numLimit = 1;
    for (var i = 0; i < height; i++) {
        var pattern = "";
        for (var space = 0; space < spaceLimit; space++) {
            pattern += " ";
        }
        spaceLimit --;
        var numPrint = numLimit;
        for (var j = 0; j < numLimit; j++) {
            pattern += numPrint;
            numPrint--;
        }
        numLimit ++;
        console.log(pattern);
    }
}

asterisk(5);