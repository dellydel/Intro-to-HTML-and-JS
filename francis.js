
// Call two functions that ask for three parameters 'a', 'b' and 'c' and pass them in a math function

function addMultiply(a, b, c) {
    x1 = parseInt(a + b * c);

    console.log("The answer is equal to " + x1);
    alert(x1);
}

function addMultiplyInverse(a, b, c) {
    x2 = parseInt(-a - b * -c);

    console.log("The answer is equal to " + x2);
    alert(x2);
}