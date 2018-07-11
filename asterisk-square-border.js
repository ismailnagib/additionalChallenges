function asterisk(height) {
    for (var i = 0; i < height; i++) {
        var result = "";
        if (i === 0 || i === height - 1) {
            for (var j = 0; j < height; j++) {
                result += "*";
            }
        } else {
            for (var j = 0; j < height; j++) {
                if (j === 0 || j === height - 1) {
                    result += "*";
                } else {
                    result += " ";
                }
            }
        }
        console.log(result);
    }
}
asterisk(5);