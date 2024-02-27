function countDown(start, end) {
    let timeNum = setInterval(() => {
        console.log(start++);
        if (start > end) clearInterval(timeNum);
    }, 1000);
}
let start = +prompt("введите первое число");
let end = +prompt("введите последнее число");
countDown(start, end);