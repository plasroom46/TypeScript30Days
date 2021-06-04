/* 幾何圓形類別 */
class CircleGeometry {
    private PI: number = 3.14;

    // 初始化時需要的參數為半徑 radius
    constructor(public radius: number) { }

    // 計算圓形的面積
    public area(): number {
        return this.PI * (this.radius ** 2);
    }

    // 計算圓形的周長
    public circumference(): number {
        return 2 * this.PI * this.radius;
    }
}

// 初始化半徑為單位 2 的圓
const myCircle = new CircleGeometry(2);

// 計算圓的面積
// console.log(myCircle.area());

// 計算圓的周長
// console.log(myCircle.circumference());

/* Math 本身就是提供一系列的屬性與方法 */
// 圓周率 PI
Math.PI;

// 隨機產生介於 0 ~ 1 之間的值
Math.random();

// 計算三角函數
Math.sin(Math.PI / 2);

// 計算次方
Math.pow(2, 4);

/* 靜態成員版本的幾何圓形類別 */
class StaticCircleGeometry {
    private static PI: number = 3.14;

    // 計算圓形的面積
    static area(radius: number): number {
        return StaticCircleGeometry.PI * (radius ** 2);
    }

    // 計算圓形的周長
    static circumference(radius: number): number {
        return 2 * StaticCircleGeometry.PI * radius;
    }

    // 提供使用者一個管道來取得 PI 的值
    static getValueOfPI(): number {
        return StaticCircleGeometry.PI;
    }
}

// 接觸 `private` 的靜態成員會被警告！
// StaticCircleGeometry.PI;

// 但是可以藉由公用靜態方法取得資訊
StaticCircleGeometry.getValueOfPI();

/* 使用 CircleGeometry */
// 初始化半徑為單位 2 的圓
const circleObj = new CircleGeometry(2);

// 計算圓的面積
const areaFromObj = circleObj.area();

// 計算圓的周長
const circumferenceFromObj = circleObj.circumference();

/* 使用 StaticCircleGeometry */
// 計算半徑為 2 的圓之面積
const areaFromStaticMethod = StaticCircleGeometry.area(2);

// 計算半徑為 2 的圓之周長
const circumferenceFromStaticMethod = StaticCircleGeometry.circumference(2);