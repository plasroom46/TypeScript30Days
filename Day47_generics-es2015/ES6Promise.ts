/* 使用 ES6 Map */
let typedMap = new Map<number, string>();

typedMap.set(1, 'Hello world');

typedMap.get(1);

typedMap.has(1);

/* 使用 ES6 Set */
let typedSet = new Set<number>();

typedSet.add(123);

typedSet.values();

typedSet.clear();

let unspecifiedTypeMap1 = new Map();
let unspecifiedTypeSet1 = new Set();

let unspecifiedTypeMap2 = new Map([[123, 'Hello world']]);
let unspecifiedTypeSet2 = new Set([1, 2, 3, 4, 5]);


/* ES6 Promise 與泛型的機制 */
let aPromise =
    new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve('succeeded'); // 裡面要傳入 string，不然會報錯
        }, 3000);
    });
// aPromise.then();

const unspecifiedTypePromise =
    new Promise((resolve, reject) => {

    });

const unspecifiedTypePromise2 =
    new Promise((resolve, reject) => {
        resolve(true); // Resolve 一個 boolean 型別
    });

const resolvedPromise = Promise.resolve(true);
const rejectedPromise = Promise.reject(false);

/* 使用 Promise.all */
// tupe型別
const promiseAll = Promise.all([
    Promise.resolve('123'),
    new Promise<number>((resolve) => resolve(123)),
    new Promise<boolean>((resolve) => resolve(true)),
]);

const promiseAll1 = Promise.all([
    Promise.resolve('123'),
    new Promise<number>((resolve) => resolve(123)),
    new Promise<boolean>((resolve) => resolve(true)),
    Promise.reject(false),
]);

/* 使用 Promise.race */
// union型別
function delay<T>(milliseconds: number, value: T): Promise<T> {
    return new Promise<T>((resolve) => {
        setTimeout(function () {
            resolve(value);
        }, milliseconds);
    });
}

const promiseRace = Promise.race([
    delay<string>(3000, 'Hello World'),
    delay<number>(1000, 123),
    delay<boolean>(2000, false),
]);

// 可以使用 Promise.race 來進行 request 的比賽
// const mightTimeout = Promise.race(
//   arbitraryRequest,
//   rejectDelay<string>(3000, '408 Timeout after 3 seconds'),
// );