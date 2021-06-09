/* 陽春的 Generator Function */
function* numbersIteratorGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

// 從 Generator Function 建立一個迭代器
const numbersIter = numbersIteratorGenerator();

// let iterElement = numbersIter.next();



// 以下連續呼叫 7 次 next 方法
console.log(numbersIter.next());
console.log(numbersIter.next());
console.log(numbersIter.next());
console.log(numbersIter.next());
console.log(numbersIter.next());
console.log(numbersIter.next());
console.log(numbersIter.next());


// Q1
function* generator1() {
    yield 1;
    yield 2;
    yield 3;
}
function* generator2() {
    yield 1;
    yield 2;
    return 3;
}
console.log('--------------');
const g1=generator1();
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());

console.log('--------------');
const g2=generator2();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log('--------------');
// Q2
function* generatorFunc() {
    console.log('Iterator created...');

    yield 1;
    yield 2;
    yield 3;
}

// 試問呼叫 generatorFunc 時，console.log 會先動？
console.log('Before create iterator');
let iterator = generatorFunc();
console.log('After create iterator');

// 還是等到 next 被呼叫前後才會動作？
console.log('Before invoke 1st next method');
console.log(iterator.next());
console.log('After invoke 1st next method');

// Q3
/* 費伯內契數列 */
function* fibonacci() {
    let n0 = 1;
    let n1 = 1;

    while (true) {
        yield n0;

        // 使用 ES6 Destructure 語法
        [n0, n1] = [n1, n0 + n1];
    }
}
console.log('--------------');
// 試問以下會出現什麼樣的結果？
const fibSeries = fibonacci();
for (let i = 0; i < 10; i ++) {
  console.log(fibSeries.next());
}


function* summationGenerator(defaultValue: number = 0) {
    let total = defaultValue;

    while (true) {
        total += yield total;
    }
}
console.log('--------------');
let summationIter = summationGenerator();

console.log(summationIter.next(5));
console.log(summationIter.next(7));
console.log(summationIter.next(11));


function* positiveNumberIterator() {
    let number = 1;

    while (true) {
        yield number;
        number += 1;
    }
}