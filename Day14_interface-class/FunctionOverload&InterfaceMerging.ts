/* 函式超載當然不可能直接動作 */
// 如果是數字則直接套入加法
// function addition(p1: number, p2: number) {
//   return p1 + p2;
// }

// // 如果是字串則轉換成數字
// function addition(p1: string, p2: string) {
//   return parseInt(p1, 10) + parseInt(p2, 10);
// }

/* 介面的屬性對應的函式型別可以被超載喔！ */
interface AddOperation {
    addition(p1: number, p2: number): number;
    addition(p1: string, p2: string): number;
}
// 會報錯
// const implementAdditionTest:AddOperation={
//     addition(p1:number,p2:number){
//         return p1 + p2;
//     }
//     addition(p1:string,p2:string){
//         return parseInt(p1, 10) + parseInt(p2, 10);
//     }
// }

const implementAddition: AddOperation = {
    addition(p1: number | string, p2: number | string) {
        if (typeof p1 === 'number' && typeof p2 === 'number') {
            return p1 + p2;
        } else if (typeof p1 === 'string' && typeof p2 === 'string') {
            return parseInt(p1, 10) + parseInt(p2, 10);
        }
        // 沒 throw exception 會報錯
        throw new Error(`
        Parameter \`p1\` and \`p2\` should only accept both \`number\`
        type or \`string\` type.
      `);
    }
};

/* 其他案例讀者試試看 */
// 1. 參數與回傳型別一模一樣
interface AddOperation1 {
    add(p1: number, p2: number): number;
    add(p1: number, p2: number): number;
}

// 2. 回傳型別不同但是參數相同
interface AddOperation2 {
    add(p1: number, p2: number): number;
    add(p1: number, p2: number): string;
}

// 3. 參數數量不同
interface AddOperation2 {
    add(p1: number): number;
    add(p1: number, p2: number): number;
}

// 4. 其他讀者可能想得到的案例...

/* 介面融合 Interface Merging */
// Block-Level Elements
interface MyDocument {
    createElement(tag: 'p'): HTMLParagraphElement;
    createElement(tag: 'body'): HTMLBodyElement;
    createElement(tag: 'div'): HTMLDivElement;
}

// Inline-Level Elements
interface MyDocument {
    createElement(tag: 'a'): HTMLAnchorElement;
    createElement(tag: 'span'): HTMLSpanElement;
    createElement(tag: 'input'): HTMLInputElement;
}


// 第三方套件的 Definition File：
// namespace StupidFramework {
//     interface StupidRequest {
//         headers: Header[];
//         body: Body;
//         url: string;
//         method: 'GET' | 'POST' | ... | 'DELETE';
//       ...
// }  
//   }

/* -------- 分隔線代表不同的檔案 -------- */

// 我們的專案自定義的狀態
// type Dictionary = { [propName: string]: string };

// namespace StupidFramework {
//     interface StupidRequest {
//         query?: Dictionary;
//     }
// }