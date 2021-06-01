// 因為前面已經被定義過 numbers 了，所以這邊必須得註解掉！
let numbers = [1, 2, 3, 4, 5];
let mappedNumbers = numbers.map(num => num * 2);

// 正確
numbers.push(666);
// 錯誤
// numbers.push('666'); // <-- TS 判斷錯誤

// 不熟悉 ES6 Arrow Function 語法，可以將它的寫法等化為：
// let mappedNumbers = numbers.map(function(num) { return num * 2; });
//
// 不過呢，Arrow Functions 和普通的 Function 還是有差，這系列由於不是在講述 ES6 的
// 特點，因此不清楚差異的讀者，請積極的上網查查吧！

// type Vehicle = [string, string, string, Date];

let BMWMotor: Vehicle = ['BMW', 'motorcycle', 'silver', new Date(2019, 2, 17)];
let JaguarOffRoad = <Vehicle>['Jaguar', 'off-road', 'royal-blue', new Date(2019, 1, 9)];
let ToyotaRV = ['Toyota', 'recreational', 'ivory-white', new Date(2019, 3, 15)] as Vehicle;

type Vehicle = [string, string, string, Date];

// 少一個元素：錯誤！
// let v1: Vehicle = ['Honda', 'motorcycle', 'red'];

// 多一個元素：錯誤！
// let v2: Vehicle = ['Gogoro', 'scooter', 'white', new Date(2019, 4, 27), 'electrical'];

// 單純型別沒有符合：錯誤！
// let v3: Vehicle = ['Tesla', 'electric', 'sapphire', '2019-08-14'];

// 型別順序錯置：錯誤！
// let v4: Vehicle = ['Prosche', 'race', new Date(2019, 7, 21), 'carbon-black'];

// 完全對前三個同為 `string` 型別的值對調，儘管意義上錯誤，但 TS 還是不鳥你 ~
let WTFVehicle: Vehicle = ['taxi', 'yellow', 'Toyota', new Date(2019, 6, 12)];