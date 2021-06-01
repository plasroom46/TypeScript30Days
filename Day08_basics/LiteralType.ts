let addOp = function (n1: number, n2: number) {
    return n1 + n2;
}

let subtractOp = function (n1: number, n2: number) {
    return n1 - n2;
}

let multiplyOp = function (n1: number, n2: number) {
    return n1 * n2;
}

let divideOp = function (n1: number, n2: number) {
    return n1 / n2;
}

// type MathOperator = (n1: number, n2: number) => number;

// 正確結果！
let powerOp: MathOperator = function (n1: number, n2: number) {
    return n1 ** n2;
};

// 錯誤：型別錯誤！
// let wrongPowerOp1: MathOperator = function (n1: string, n2: string) {
//   return n1 ** n2;
// };

// 錯誤：函式型別之回傳型別錯誤！
// let wrongPowerOp2: MathOperator = function (n1: number, n2: number) {
//   return (n1 ** n2).toString();
// };

type MathOperator = (n1: number, n2: number) => number;

// 變數被型別化名註記過後，Implicit `any` 被化解
let powerOpWithNoParamsAnnotation: MathOperator = function (n1, n2) {
    return n1 ** n2;
};

// 會出現錯誤！
// powerOpWithNoParamsAnnotation(
//   '123',
//   '456'
// );


type PersonInfo = {
    name: string,
    age: number,
    hasPet: boolean
};

let infoAboutMaxwell: PersonInfo = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
};

// 隨便新增屬性會出錯！
// infoAboutMaxwell.newInfo = 'Graduated from NTUST';

// 更改屬性值，型別對就可以接受！
infoAboutMaxwell.hasPet = true;

// 更改屬性值，型別錯就GG！
// infoAboutMaxwell.hasPet = 'Doggie & Kittie';

// 全面覆寫，格式正確就放心！
infoAboutMaxwell = {
    name: 'Alexius',
    age: 18,
    hasPet: true,
};

// 全面覆寫，格式錯誤就傷心！
// infoAboutMaxwell = {
//   firstName: 'Maxwell',
//   graduated: true,
//   age: 20,
//   hasPet: false,
// };


function printInfo(info: PersonInfo) {
    console.log(`Name: ${info.name}`);
    console.log(`Age: ${info.age}`);
    console.log(`Has Pet? ${info.hasPet}`);
}

// 物件的形式沒有被積極註記為 PersonalInfo，直接
// 將值暴力帶入函式作為參數 => 驗證錯誤！
// printInfo({
//   name: 'Martin',
//   age: 28,
//   hasPet: true,

//   hello: 'world',
//   nothingSpecial: null,
// });

// 物件的形式存入變數，其中該變數沒有被積極註記為
// PersonInfo，該變數卻被代入函式作為參數 => 竟然通過！？
let infoAboutMartin = {
    name: 'Martin',
    age: 28,
    hasPet: true,

    hello: 'world',
    nothingSpecial: null,
};

printInfo(infoAboutMartin);
