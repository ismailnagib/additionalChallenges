// PSEUDOCODE

// STORE "celciusTemp" with any value
// STORE "targetTempType" with 'Fahrenheit' or 'Reamur' or 'Kelvin'
// STORE "resultTemp"
// IF "targetTempType" EQUALS 'Fahrenheit' THEN
//     CALCULATE "resultTemp" EQUALS TO "celciusTemp" DIVIDED BY 5 TIMES 9 PLUS 32
//     DISPLAY "resultTemp"
// ELSE IF "targetTempType" EQUALS 'Reamur' THEN
//     CALCULATE "resultTemp" EQUALS TO "celciusTemp" DIVIDED BY 5 TIMES 4
//     DISPLAY "resultTemp"
// ELSE IF "targetTempType" EQUALS 'Kelvin' THEN
//     CALCULATE "resultTemp" EQUALS TO "celciusTemp" PLUS 273
//     DISPLAY "resultTemp"
// ELSE
//     DISPLAY "Invalid input(s)"


// PROGRAM
function celciusConversion (celciusTemp, targetTempType) {
    var resultTemp = "";
    if (targetTempType === "Fahrenheit") {
        resultTemp = celciusTemp / 5 * 9 + 32;
        console.log(resultTemp  + " " + targetTempType);
    } else if (targetTempType === "Reamur") {
        resultTemp = celciusTemp / 5 * 4;
        console.log(resultTemp  + " " + targetTempType);
    } else if (targetTempType === "Kelvin") {
        resultTemp = celciusTemp + 273;
        console.log(resultTemp + " " + targetTempType);
    } else {
        console.log("Invalid input(s)");
    }
}

celciusConversion(60, "Fahrenheit");
celciusConversion(60, "Reamur");
celciusConversion(60, "Kelvin");
celciusConversion(60, "A");