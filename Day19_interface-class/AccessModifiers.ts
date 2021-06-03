
/* 提款機範例 */
// 定義每一個使用陽春的提款機的用戶的資訊
type TUserAccount = {
    account: string;
    password: string;
    money: number;
}

// 定義陽春的提款機介面的帳戶管理系統
interface AccountSystem {
    // 登入系統，必須填入帳戶與密碼
    signIn(account: string, password: string): void;

    // 登出系統
    signOut(): void;
}

// 定義陽春的提款機介面的交易系統
interface TransactionSystem {
    // 存錢錢，裡面填入要存錢的量
    deposit(amount: number): void;

    // 提領錢錢，裡面填入要提錢的量
    withdraw(amount: number): void;
}

// 定義陽春的提款機介面的完整系統
interface ICashMachine extends TransactionSystem, AccountSystem { }

// 實踐 ICashMachine 介面
class CashMachine implements ICashMachine {
    // 假設我們有這些使用者
    private users: TUserAccount[] = [
        { account: 'Maxwell', password: '123', money: 12345 },
        { account: 'Martin', password: '456', money: 54321 },
        { account: 'Chairman Guo.', password: '789', money: 1000000000 },
    ];

    // // 建構子設定1
    // private users:TUserAccount[];
    // constructor(users:TUserAccount[])
    // {
    //     this.users=users;
    // }

    // // 建構子設定2
    // constructor(private users: TUserAccount[]) { }

    private currentUser: TUserAccount | undefined;

    public signIn(account: string, password: string) {
        // 因為 Array.prototype.find 是 ES6 語法，暫時先用 ES5 的方式處理
        for (let i = 0; i < this.users.length; i += 1) {
            const user = this.users[i];
            if (
                user.account === account &&
                user.password === password
            ) {
                this.currentUser = user;
                break;
            }
        }

        if (this.currentUser === undefined) {
            throw new Error('User not found!');
        }
    }

    public signOut() {
        // 清除目前的使用者
        this.currentUser = undefined;
    }

    public deposit(amount: number) {
        if (this.currentUser !== undefined) {
            this.currentUser.money += amount;
        } else {
            throw new Error('No user signed in!');
        }
    }

    public withdraw(amount: number) {
        if (this.currentUser !== undefined) {
            this.currentUser.money -= amount;
        } else {
            throw new Error('No user signed in!');
        }
    }
}

function printAccountInfo(input: TUserAccount | undefined) {
    if (input === undefined) {
        console.log('No user found!');
    } else {
        console.log(`
        Current User: ${input.account}
        Money: ${input.money}
      `);
    }
}

// 初始化新的提款機
const machine = new CashMachine();
// console.log('Initialized: ');
// printAccountInfo(machine.currentUser); //<-- 因為 currentUser 變成 private 模式，不能在外面被呼叫！

// 登入過後
machine.signIn('Maxwell', '123');
// console.log('Signed In: ');
// printAccountInfo(machine.currentUser); //<-- 因為 currentUser 變成 private 模式，不能在外面被呼叫！

// 提款 5000 過後
machine.withdraw(5000);
// console.log('After Withdrawal: ');
// printAccountInfo(machine.currentUser); //<-- 因為 currentUser 變成 private 模式，不能在外面被呼叫！

// 登出過後
machine.signOut();
// console.log('Signed Out: ');
// printAccountInfo(machine.currentUser); //<-- 因為 currentUser 變成 private 模式，不能在外面被呼叫！
