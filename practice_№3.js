function lan(a) {
    return function fanNum(b) {
        return a + b;
    };
}
console.log(lan(7)(5));