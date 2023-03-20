function fibonacciGenerator(n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else if (n > 2) {
        for (var f = [0, 1]; f.length < n; f.push(x)) {
            var x = f[f.length-1] + f[f.length-2];
        }
        return f;
    }
}

var numberOfNumbers = Number(prompt("How many Fibonacci numbers to generate?"))

console.log(fibonacciGenerator(numberOfNumbers))