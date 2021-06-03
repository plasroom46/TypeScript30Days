/* 介面不能單純用原始型別表示 */
// 根本沒有介面這樣的定義行為，實質上也沒意義啊
// interface I {
//   number;
// }

// 遑論單純複合狀態
// interface J {
//   number | string;
// }

/* Duck-typing 模式：建議函式之參數註記為介面 */
interface PersonInfo {
    name: string;
    age: number;
    hasPet: boolean;
}

function logPersonInfo(person: PersonInfo): void {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Owns a pet? ${person.hasPet}`);
}

let maxwellInfo = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
    email: 'maxwell@example.com',
    ownsMotorcycle: false,
};

logPersonInfo(maxwellInfo);