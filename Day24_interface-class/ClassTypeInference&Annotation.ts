enum Color { White, Black, Brown, Grey, Rainbow };

class Horse {
    constructor(
        public name: string,
        public color: Color,
        public readonly type: string,
        private noise: string = 'MeeeeeeeEeeééeéeée~',
    ) { }

    public makeNoise() {
        console.log(this.noise);
    }

    public info() {
        console.log(this.infoText());
    }

    // 子類別可以覆寫 infoText 成員方法
    protected infoText(): string {
        return `It is ${this.name} the ${Color[this.color]} ${this.type}.`;
    }
}

/* 繼承類別範例 */
class Unicorn extends Horse {
    constructor(name: string) {
        super(
            name,
            Color.Rainbow,
            'Mystical Unicorn',

            // 獨角獸的叫聲到底是什麼，筆者也不清楚
            'Nheeeeeeheeehehé~hehé~hehé~hehé~~~',
        );
    }

    protected infoText(): string {
        return `It's a mystical unicorn! Its name is ${this.name}!`;
    }

    // 獨角獸會吐彩虹色的嘔吐物
    public puke(): void {
        console.log('Puking rainbow vomit!');
    }
}

// 利用生物科技製造出一隻名為 Martin 的黑色小馬
let aRandomHorsie = new Horse('Martin', Color.Black, 'Pony');

// 對馬原本就有的屬性指派錯誤型別 => TS 覺得你錯了！
// aRandomHorsie.color = 'Red';

// 對馬植入新的屬性 => 難道你沒聽到動保團體的抗議嗎？
// aRandomHorsie.isNatural = false;

// 直接覆寫錯誤的值 => 我的馬到哪裡去？
// aRandomHorsie = null;

// 要覆寫就要用同為 Horse 型別的值進行完整覆寫
// 另外：stallion 是 “騭”，馬的品種之一
aRandomHorsie = new Horse('Toby', Color.Brown, 'Stallion');

/* 類別得型別註記法 */
// 1. 用常見的型別註記法
let certainlyAHorsie: Horse =
    new Horse('Leo', Color.Black, 'Bronco');

// 2. 用顯性型別註記法
let certainlyAnotherHorsie =
    <Horse>(new Horse('Wendy', Color.White, 'Mustang'));

// 3. 用 `as` 型別註記法
let certainlyTheOtherHorsie =
    new Horse('Alexius', Color.Grey, 'Foal') as Horse;

/* 繼承後的子類別之推論機制 */
// 普通的 Unicorn
let aRandomUnicorn = new Unicorn('Maxwell');

// 註記為 Horse，不過被指派的值為子類別
let anotherHorsie: Horse = new Unicorn('Maximilian');

// 嘔吐吧！獨角獸！
// aRandomUnicorn.puke();

// 你也跟著嘔吐吧！ => 它嘔吐不了...
// anotherHorsie.puke();
anotherHorsie.info(); // 使用 Unicron 的 infoText() 方法顯示資訊

// 子類別看似代表父類別物件
// let shouldBeUnicorn: Unicorn =
//   new Horse(
//     'Maxime',
//     Color.Rainbow,
//     'Mystical Unicorn',
//     'Nyeeeeeeee~~'
//   );


// 宣告 Stallion 為 Horse 子類別，並且沒有多宣告更多成員
class Stallion extends Horse {
    constructor(name: string) {
        super(
            name,
            Color.Brown,
            'Stallion',
        );
    }
}

// 註記為 Stallion 型別的變數卻指派 Horse
let shouldBeStallion: Stallion =
    new Horse(
        'Maxwell',
        Color.Brown,
        'Stallion',
    );

// 定義兩種相似的類別
class C1 {
    constructor(public prop: string) { }

    public publicMethod(): string {
        return this.prop;
    }
}

class C2 {
    constructor(public prop: string) { }

    public publicMethod(): string {
        return this.prop;
    }
}

let someObject: C1 = new C2('Hello');

// 定義兩種相似的類別，但是有 private 模式
class AnotherC1 {
    constructor(
        public prop: string,
        private privateProp: number,
    ) { }

    public publicMethod(): number {
        return this.privateMethod();
    }

    private privateMethod(): number {
        return this.privateProp;
    }
}

class AnotherC2 {
    constructor(
        public prop: string,
        private privateProp: number,
    ) { }

    public publicMethod(): number {
        return this.privateMethod();
    }

    private privateMethod(): number {
        return this.privateProp;
    }
}

// let anotherObject: AnotherC1 = new AnotherC2('Hello', 42);


type TA = { hello: string };
type TB = { hello: string };

interface IA {
    hello: string;
}

interface IB {
    hello: string;
}

function logTypeA(obj: TA) { console.log(obj); };

// 事實上，只要結構ㄧ樣，管你是 Type 還是 Interface
// 只要格式ㄧ樣都通過，就算參數很明確只能指定 TA 型別
logTypeA(<TA>{ hello: 'World' });
logTypeA(<TB>{ hello: 'World' });
logTypeA(<IA>{ hello: 'World' });
logTypeA(<IB>{ hello: 'World' });