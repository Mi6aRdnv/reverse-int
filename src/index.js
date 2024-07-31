module.exports = function reverse(n) {
    let result = 0;
    for (let i = Math.abs(n); i > 0; i = Math.floor(i / 10)) {
        console.log(i);
        result = result * 10 + (i % 10);
    }
    return result;
};
