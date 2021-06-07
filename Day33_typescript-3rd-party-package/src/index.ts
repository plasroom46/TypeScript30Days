// 取得按鈕元素
const $btn = document.getElementById('click-me-btn');

// 取得記數的 span 元素
const $counter = document.getElementById('count');

// 使用 Type Guard
if ($btn === null || $counter === null) {
    throw new Error('Elements should not be null');
}

// 累計按鈕次數
let count = 0;

// 每一次按鈕備案到就會將記數次數上升
$btn.addEventListener('click', () => {
    count++;
    console.log('You Clicked me!');

    // // 新增 debugger
    // debugger;

    $counter.innerText = count.toString();
});