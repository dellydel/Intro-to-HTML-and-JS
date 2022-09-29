
// Call two functions that ask for three parameters 'a', 'b' and 'c' and pass them in a math function

function subtractMultiply() {
    let a = window.prompt("First Number: ");
    let b = window.prompt("Second Number: ");
    let c = window.prompt("Third Number: ");

    x1 = parseInt(a - b * c);

    console.log("The answer is equal to " + x1);
    alert(x1);
}

function subtractMultiplyInverse() {
    let a = window.prompt("First Number: ");
    let b = window.prompt("Second Number: ");
    let c = window.prompt("Third Number: ");

    x2 = parseInt(-a + b / -c);

    console.log("The answer is equal to " + x2);
    alert(x2);
}