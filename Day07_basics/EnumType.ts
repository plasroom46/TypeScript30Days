enum WeekDay {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
};

// 語法錯誤！(多了等號'=')
// enum WeekDay = { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };

let weekDayOfBirthday = WeekDay.Monday;

// 順向使用，推論結果為列舉型別
let TGIF: WeekDay = WeekDay.Friday;
console.log(TGIF); 
// 結果為 5

// 逆向取回 Enum 的 Key，推論結果為字串型別
let valueOfTGIF = WeekDay[TGIF];
console.log(valueOfTGIF);
  // 結果為 Friday