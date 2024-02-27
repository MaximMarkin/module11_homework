function multiPlier(a, b) {
    let fix = a;
    for (let i = 1; i < b; i++) {
        fix *= a;
    }
    return fix;
}
let a = +prompt("введите число");
let b = +prompt("введите степень");
if (b < 1) {
    alert("введите степень больше или равную 1");
} else {
    console.log(multiPlier(a, b));
}