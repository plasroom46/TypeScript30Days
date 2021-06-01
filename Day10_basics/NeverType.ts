let executesForever = function forever() {
    while (true) {
        /* Stuck in here forever... */
    }
};

const randomNumber = Math.random() * 10;

let probablyExecutesForever = function (num: number) {
    while (num > 5) {
        /* Probably stuck in here forever... */
    }
};

// Maybe 'never' or 'void' case
probablyExecutesForever(randomNumber);

// Definite 'never' case
probablyExecutesForever(6);

// Definite 'void' case
probablyExecutesForever(4);

// let probablyThrowsError = function (num: number): number | never {
//   if (num <= 0) {
//     throw new Error('Not a positve number, go to hell!');
//   }
//   return num;
// };

type EitherNumberOrNever = number | never;
type MustBeNever = number & never;


let probablyThrowsError = function (num: number) {
    if (num <= 0) {
        throw new Error('Not a positve number, go to hell!');
    }
    return num;
};

let acceptsNever: number = probablyThrowsError(-5);

// let mustThrowError = function () {
//   throw new Error('Throw new error!');
// }

let mustThrowError = function () {
    throw new Error('Throw new error!');
}

let mustAcceptsNever: never = mustThrowError();

let canAlsoAcceptNever: number = mustThrowError();

let wontThrowError = function () { return 42; };

// 會出現錯誤！
// mustAcceptsNever = wontThrowError();

// 若是被註記為 never 型態，則函式一定要符合不能有結束執行的結果
// function possibleNotToThrowError(): never {
//   const possibility = Math.random();
//   if (possibility > 0.5) {
//     throw new Error('Error Thrown');
//   }
// }