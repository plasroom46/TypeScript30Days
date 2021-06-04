class CircleGeometryV2 {
    // 使用 readonly 在成員變數上
    public readonly PI: number = 3.14;

    // 使用 readonly 在類別靜態屬性上
    static readonly staticPI: number = 3.14;

    // 略...

    // 初始化時需要的參數為半徑 radius
    constructor(public radius: number) { }

    // 使用取值方法 Getter Method
    // 裡面不能有任何參數，否則會被記警告！
    get area(/* 禁止放任意參數 */) {
        // 沒有回傳任何值也是錯誤的行為！
        return this.PI * (this.radius ** 2);
    }

    // 使用存值方法 Setter Method
    // 裡面僅僅只能有一個參數，否則會被記警告！
    set area(value: number /* , anotherValue: number */) {
        // 半徑是面積先除以圓周率 PI 之後再開根號
        // 開根號等效於取 0.5 次方的概念！
        this.radius = (value / this.PI) ** 0.5;
    }

    // 計算圓形的周長
    // public circumference(): number {
    //     return 2 * this.PI * this.radius;
    // }

    get circumference()
    {
        return 2 * this.PI * this.radius;
    }
}

// 初始化半徑為 2 的圓形
const randomCircle = new CircleGeometryV2(2);

// 取得圓形的面積
// console.log(randomCircle.area);

// 改變半徑的值
randomCircle.radius = 3;

// 再次取得圓形面積
// console.log(randomCircle.area);


// 初始化半徑為 2 的圓形
const anotherRandomCircle = new CircleGeometryV2(2);

// 取得圓形的半徑，應該等於 2
// console.log(anotherRandomCircle.radius);

// 取得圓形的面積
// console.log(anotherRandomCircle.area);

// 更改圓形的面積應該會連動到 radius 半徑的值
// 這一次我們使用半徑為 5 的圓形面積作為指派值
anotherRandomCircle.area = 3.14 * (5 ** 2);

// 半徑應該約等於 5
// console.log(anotherRandomCircle.radius);

let areaOfCircle = anotherRandomCircle.area;

/* readonly 模式 */
// 可以被讀取
anotherRandomCircle.PI;

// 但是不能被覆寫！
// anotherRandomCircle.PI = 3.1415926;

// 類別的靜態屬性被標註 readonly 也無一例外
CircleGeometryV2.staticPI;

// 因為是 readonly，所以會被 TypeScript 提醒喔
// CircleGeometryV2.staticPI = 3.1415926;