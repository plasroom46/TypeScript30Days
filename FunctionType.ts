let aSimpleFunction = function() { console.log('Hi!'); };

// let addition = function (num1, num2) {
//   return num1 + num2;
// };

let addition = function (param1: number, param2: number) {
  return param1 + param2;
};

// let shouldBeString: string = addition(123, 456); // => 出錯！

const aJSONString = '{"Hello": "World", "luckyNumber": 14}';

// TS 不會鳥你的狀況
let parsedJSON = JSON.parse(aJSONString);

// 接受 TS 型別系統的擁抱
let parsedJSON1 = JSON.parse(aJSONString) as { hello: string, luckyNumber: number };
let parsedJSON2 = <{ hello: string, luckyNumber: number }>JSON.parse(aJSONString);
let parsedJSON3: { hello: string, luckyNumber: number } = JSON.parse(aJSONString);

// 原本的 addition 型別為 (number, number) => number
// 因為已經被定義在上方，這邊就不多寫了
// let addition = function (param1: number, param2: number) {
//   return param1 + param2;
// };

// 覆寫 addition：其型別為 (number, number) => number
addition = function (param1: number, param2: number) {
  return param2 + param1; // <- 交換位置而已...
}

// 錯誤地覆寫 addition: 參數型別錯誤！其型別為 (string, string) => string -> 會被 TS 警告！
// addition = function (param1: string, param2: string) {
//   return param1 + param2;
// }

// 錯誤地覆寫 addition: 參數型別錯誤！其型別為 (number, number) => void -> 會被 TS 警告！
// addition = function (param1: number, param2: number) {
//   param1 + param2;
// }

// 函式主動回傳 undefined
let doesItWork1 = function doesItWork1() {
  return undefined;
}

// 函式輸出型別註記為 undefined，也回傳 undefined
let doesItWork2 = function doesItWork2(): undefined {
  return undefined;
}

// 函式輸出型別註記為 undefined，但不回傳任何東西 => 只有這個會出錯
// let doesItWork3 = function doesItWork3(): undefined {
// //   Empty and returns nothing!
// }

// 函式輸出型別註記為 void，但回傳 undefined
let doesItWork4 = function doesItWork4(): void {
  return undefined;
}