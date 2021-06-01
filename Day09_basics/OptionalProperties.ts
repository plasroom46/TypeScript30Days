enum Gender { Male, Female, Other };

type TestAccountInfo = {
    account: string,
    password: string,
    nickname: string | undefined,
    birth: Date | undefined,
    gender: Gender | undefined,
    subscribed: boolean
};

// 依然出錯！
// let accountMaxwell: TestAccountInfo = {
//   account: 'nordic.wyvern',
//   password: '<hashed-password>',
//   subscribed: false
// };

type AccountInfo = {
    account: string,
    password: string,
    nickname?: string,
    birth?: Date,
    gender?: Gender,
    subscribed: boolean
};

let accountMaxwell: AccountInfo = {
    account: 'nordic.wyvern',
    password: '<hashed-password>',
    subscribed: false
};

type AccountSystem = {
    account: string,
    password: string,
    subscribed: boolean
};
type AccountPersonalInfo = {
    nickname?: string,
    birth?: Date,
    gender?: Gender,
}

// 使用複合型別的 Intersection

type PersonalAccount = AccountSystem & AccountPersonalInfo;

let accountMaxwell2:PersonalAccount={
    account: 'nordic.wyvern',
    password: '<hashed-password>',
    birth:new Date(2021,6,1),
    subscribed: false
}

let additionThreeAsDefault = function (num1: number, num2?: number) {
    if (num2) {
        return num1 + num2;
    }
    return num1 + 3;
}

type VehicleInfoWithOptionalElements = [string, string, string?, Date?];