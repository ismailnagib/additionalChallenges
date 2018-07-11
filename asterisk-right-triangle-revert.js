function asterisk (height) {
    for (var i = height; i > 0; i--) {
        var pattern = "";
        for (var j = 0; j < height; j++) {
            pattern += "*";
            
        }
        height--
        console.log(pattern);
    }
}

asterisk(5);