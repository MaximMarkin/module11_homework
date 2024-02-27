function goInput(num) {
    if (num < 1 || num > 1000) {
        return " - данные неверны";
    } else {
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                return " - составное число";
            }
        }
        return " - простое число";
    }
}
let numReset = Math.floor(Math.random() * 1500);
let click = goInput(numReset);
console.log(numReset + click);