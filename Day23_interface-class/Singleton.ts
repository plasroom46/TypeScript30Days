/* 擁有私有建構子的類別範例 */
class ConstructIsForbidden {
    private constructor(/* 參數 */) {
        /* 初始化物件的成員 */
    }
}

// 會被 TypeScript 叫！
// let forbiddenObject = new ConstructIsForbidden();

/* 簡單的單例模式示範 Singleton Pattern */
class SingletonPerson {
    // 該私有建構子裡面，具有某人的基本資料
    // 其中，儘管裡面的資料是開放的，但都是唯讀的狀態
    private constructor(
        public readonly name: string,
        public readonly age: number,
        public readonly hasPet: boolean,
    ) { }

    // 定義一個私有靜態屬性，存放此類別建構的物件資料
    private static Instance: SingletonPerson =
        new SingletonPerson('Maxwell', 20, false);

    // 定義一個公用靜態方法，負責回傳存放在此類別唯一的物件資料
    static getInstance(): SingletonPerson { return this.Instance; }
}


// 取得單例模式的類別下建構出來的唯一物件
const uniquePerson = SingletonPerson.getInstance();

// console.log(uniquePerson);
// console.log(uniquePerson.name);
// console.log(uniquePerson.age);
// console.log(uniquePerson.hasPet);


/* 懶漢模式 */
class LazySingletonPerson {
    private constructor(
        public readonly name: string,
        public readonly age: number,
        public readonly hasPet: boolean,
    ) { }

    // Day 2. 就提到過的 Nullable Type
    private static Instance: LazySingletonPerson | null = null;

    static getInstance(): LazySingletonPerson {
        // 若是第一次呼叫，Instance 必為 null，因此進行單子的初始化
        if (this.Instance === null) {
            this.Instance = new LazySingletonPerson('Maxwell', 20, false);
        }

        return this.Instance;
    }
}


class LazySingletonC {
    private constructor(/* 成員變數或參數 */) {
        /* 物件初始化成員的過程 */
    }

    // 將 Instance 一開始的值設定為 null
    private static Instance: LazySingletonC | null = null;

    // 如果是第一次呼叫 getInstance 才會建構物件
    static getInstance(): LazySingletonC {
        if (this.Instance === null) {
            this.Instance = new LazySingletonC(/* 參數 */);
        }

        return this.Instance;
    }
}