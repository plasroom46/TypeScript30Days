type PongResponse = {
    data: string | null,
    status: 200 | 500
};

// pingRequest 會回傳 pong 訊息作為 response
function pingRequest(
    num: number,
    errorProbability: number = 0,
): Promise<PongResponse> {
    return new Promise((resolve, reject) => {
        const probability = Math.random();
        if (probability < errorProbability) {
            reject({ data: null, status: 500 });
        }

        const timeout = Math.random() * 3000;

        setTimeout(() => {
            resolve({ data: `Pong: ${num}`, status: 200 });
        }, timeout);
    });
}

/* Promise Chain 表示方式 */
console.time('1st Pong');
console.time('2nd Pong');
console.time('3rd Pong');

console.log('Promise Chain Representation:');
pingRequest(1)
    .then(response => {
        console.log(response.data);
        console.timeEnd('1st Pong');
        return pingRequest(2);
    })
    .then(response => {
        console.log(response.data);
        console.timeEnd('2nd Pong');
        return pingRequest(3);
    })
    .then(response => {
        console.log(response.data);
        console.timeEnd('3rd Pong');
    })
    .catch(response => {
        console.log(`Status: ${response.status}`);
    });



/* Generator 表示形式 */
console.log('Generator Representation:');
console.time('1st Generator Pong');
console.time('2nd Generator Pong');
console.time('3rd Generator Pong');

// Generator 表現形式
function* pingsGenerator() {
    try {
        const response1 = yield pingRequest(1);
        console.log(response1.data);
        console.timeEnd('1st Generator Pong');
    } catch (err1) {
        throw new Error(err1);
    }

    try {
        const response2 = yield pingRequest(2);
        console.log(response2.data);
        console.timeEnd('2nd Generator Pong');
    } catch (err2) {
        throw new Error(err2);
    }

    try {
        const response3 = yield pingRequest(3);
        console.log(response3.data);
        console.timeEnd('3rd Generator Pong');
    } catch (err3) {
        throw new Error(err3);
    }
}

// // 建立一個 ping-request 的迭代器
// let pingsIter = pingsGenerator();

// // 縮寫的命名代表 Pong-Response-Promise 物件
// type PRP = Promise<PongResponse>;

// // 第一輪迭代 —— 啟動迭代器
// (pingsIter.next().value as PRP).then(response1 => {
//   console.log('Response 1 received');

//   // 將 response1 傳入 next 並進行第二輪迭代
//   (pingsIter.next(response1).value as PRP).then(response2 => {
//     console.log('Response 2 received');

//     // 將 response2 傳入 next 並進行第二輪迭代
//     (pingsIter.next(response2).value as PRP).then(response3 => {
//       console.log('Response 3 received');

//       // 將 response3 傳入 next 並進行最後一輪迭代
//       pingsIter.next(response3);
//     });
//   });    
// });

/* 宣告專門接收 generator 為參數的函式 */
function runGenerator(gen: () => Generator) {
    const iter = gen();

    // 使用遞迴的技巧去處理 request-response 過程的邏輯
    function recursiveIteration(pushResponse: any) {
        const result = iter.next(pushResponse);
        if (result.done) return;

        (result.value as Promise<any>).then(response => {
            recursiveIteration(response);
        });
    }

    (iter.next().value as Promise<any>).then(response => {
        recursiveIteration(response);
    });
}
runGenerator(pingsGenerator);

//Async-Await 表現形式
async function pingsAsyncFunc() {
    try {
        const response1 = await pingRequest(1);
        console.log(response1.data);
        console.timeEnd('1st Async Pong');
    } catch (err1) {
        throw new Error(err1);
    }

    try {
        const response2 = await pingRequest(2);
        console.log(response2.data);
        console.timeEnd('2nd Async Pong');
    } catch (err2) {
        throw new Error(err2);
    }

    try {
        const response3 = await pingRequest(3);
        console.log(response3.data);
        console.timeEnd('3rd Async Pong');
    } catch (err3) {
        throw new Error(err3);
    }
}

// 執行 Async Function
console.log('Using Async Function:');
console.time('1st Async Pong');
console.time('2nd Async Pong');
console.time('3rd Async Pong');

// 呼叫 Async Function 想成在處理 Promise 物件
pingsAsyncFunc()
  .then(() => { console.log('End Request Process!'); });


// // 就算是回傳普通值，它ㄧ樣會使用 Promise 包起來
async function returnSomething() {
    return 42;
}


function delayAfter<T>(
    milliseconds: number, value?: T
): Promise<T> {
    return new Promise(resolve => {
        setTimeout(() => { resolve(value); }, milliseconds);
    });
}

async function example1() {
    const message = await delayAfter(3000, 'Hello world!');

    console.log(message);
}

async function example2() {
    const message = await 'Hello world!';

    console.log(message);
}

async function example3() {
    const result = await Promise.race([
        delayAfter(5000, 'Hello world!'),
        delayAfter(3000, 123),
        delayAfter(4000, true),
    ]);

    console.log(result);
}

async function example4() {
    const result = await Promise.all([
        delayAfter(5000, 'Hello world!'),
        delayAfter(3000, 123),
        delayAfter(4000, true),
    ]);

    console.log(result);
}

async function example5_1() {
    return await Promise.resolve(123);
}

async function example5_2() {
    return Promise.resolve(123);
}

async function example6_1() {
    console.log('First async function called.');
    return await delayAfter(1000, 'Hello!');
}

async function example6_2() {
    const result = await example6_1();
    console.log('Second async function called.');
    await delayAfter(2000);
    return result;
}

example6_2().then(console.log);