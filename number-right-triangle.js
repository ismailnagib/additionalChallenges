function asterisk (height) {
    var pattern = "";
    for (var i = 1; i <= height; i++) {
        pattern += String(i);
        console.log(pattern);
    }
}

asterisk(5);