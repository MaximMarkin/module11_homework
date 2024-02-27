let Fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, null, 55, 89, 144, "f", 233, "no"];
function getQuantityZeroEvenOdd(Fibo) {
    let zeroNumber = 0;
    let evenNumber = 0;
    let oddNumber = 0;
    let notNumber = 0;
    for (let i = 0; i < Fibo.length; i++) {
        if (typeof Fibo[i] === "number" && !isNaN(Fibo[i])) {
            if (Fibo[i] === 0) {
                zeroNumber++;
        } else {
            if (Fibo[i] % 2 === 0) {
            evenNumber++;
            } else {
            oddNumber++;
            }
        }
        } else {
            notNumber++;
        }
    }
    console.log(
    "количество нулей-" + zeroNumber,
    "количество четных чисел-" + evenNumber,
    "количество нечетных чисел-" + oddNumber,
    "количество не числовых значений-" + notNumber
    );
}
getQuantityZeroEvenOdd(Fibo);