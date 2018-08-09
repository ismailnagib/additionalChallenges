function asterisk(height) {
    var spaceLimit = height - 1;
    var astLimit = 1;
    for (var i = 0; i < height; i++) {
        var pattern = "";
        for (var space = 0; space < spaceLimit; space++) {
            pattern += " ";
        }
        spaceLimit --;
        for (var j = 0; j < astLimit; j++) {
            pattern += "*";
        }
        astLimit += 2;
        console.log(pattern);
    }
}

asterisk(3);