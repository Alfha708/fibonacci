'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    if(memo.has(n)) {
        return memo.get(n); //ガード句
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
const length = 4000;
for (let i = 0; i <= length; i++) {
    console.log(i + '番目：' + fib(i));
}