// 全部都是數字
let numbers = [1, 2, 3, 4, 5];

// 全部都是字串
let strings = ['hi', 'how are you', 'goodbye'];

// 對陣列裡任意值覆寫
numbers[1] = 123;   // <- PASS！
// numbers[3] = '123'; // <- 嗶嗶！TS 關心您！

// 對陣列使用方法 TS 也會幫你檢測型別耶！酷的是還會隨機變通哦！
numbers.push(456);   // <- PASS！
// numbers.push('456'); // <- 嗶嗶！TS 再度關心您！

numbers.concat([789, 987]);     // <- PASS！
// numbers.concat(['789', '987']); // <- 嗶嗶！TS 知道你正在玩它！

// 對陣列全部覆寫
//（依據廣義物件完整性第一條，只要覆蓋的值型別不變，你愛怎麼蓋就怎麼蓋，用愛蓋吧！）
numbers = [666, 888, 999];               // <- PASS！
// numbers = ['三位一體！', '您被聖靈附體！'];  // <- 嗶嗶！TS 真的很想開你罰單！

// 數字和字串混合
let numbersAndStrings = [1, '2', 42, 666, "Devils don't actually like to wear Prada!"];


// 長得一模一樣格式的物件
let objectsArray1 = [
  { message: 'Hello' },
  { message: 'Hi' },
  { message: 'Goodbye' }
];

// 某個物件就是故意給你基因突變
// let objectsArray2 = [
//   { message: 'Hello' },
//   { message: 'Hi', revolt: true },
//   { message: 'Goodbye' }
// ];

let objectsArray2: ({ message: string, revolt?: boolean })[] = [
  { message: 'Hello' },
  { message: 'Hi', revolt: undefined },
  { message: 'Goodbye', revolt: true }
];

// 沒辦法，基因突變的方法實在太多種了，所以也不管，將就測一測吧
let objectsArray3 = [
  { message: 'Hello' },
  { message: 10100101110110 },
  { message: 'Goodbye' }
];

let functionsArray4 = [
  function addition(num1: number, num2: number) { return num1 + num2 },
  function subtraction(num1: number, num2: number) { return num1 - num2 },
  function multiplication(num1: number, num2: number) { return num1 * num2 },
  function division(num1: number, num2: number) { return num1 / num2 }
];

let arraysArray = [
  [1, 2],
  ['Hello', 'World', 'AABAA，叫叫CBA，到底是ABC還是CBA，筆者忘記了'],
  [true, false, true, true, false],
];

// 超變態陷阱題 （Ooooooooowwww~~ 好變態啊~~~）
let miscellaneousArraysArray = [
  [1, 2, 3],
  ['Hello', 'World'],
  [true, false, 123, null],
  ['String', undefined],
];

let emptyArray = [];

let canBeEitherNullOrNumbers: (number | null)[] = [1, 2, 4];
canBeEitherNullOrNumbers.splice(2, 0, null); // <- TS 准許你通過
