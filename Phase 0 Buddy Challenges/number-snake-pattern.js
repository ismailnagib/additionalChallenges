function soal3(param) {
    var output = [];
    var counter = 1;
    for (var i = 0; i < param; i++) {
        output.push([]);
        for (var j = 0; j < param; j++) {
            if (i % 2 === 0) {
                output[i].push(counter);
                counter++;
            } else {
                output[i].unshift(counter);
                counter++;
            }
        }
    }
    return output;
}
console.log(soal3(4));