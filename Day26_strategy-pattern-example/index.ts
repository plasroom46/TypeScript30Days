import Swordsman from './characters/Swordsman';
import Warlock from './characters/Warlock';
import BasicWand from './weapons/BasicWand';
import Dagger from './weapons/Dagger';

// // First

// const swordsman= new Character('Maxwell',Role.Swordsman);
// swordsman.introduce();


const swordsman = new Swordsman('Maxwell');
const warlock = new Warlock('Martin');

// swordsman.introduce();
// warlock.introduce();

// V1
// console.log("Swordsman attacking the warlock: ");
// swordsman.attack(warlock);

// console.log("Warlock attacking the swordsman: ");
// warlock.attack(swordsman);

// // V2

// console.log("Using MeleeAttack: ")
// swordsman.attack(warlock);

// // Switch to StabAttack
// swordsman.switchAttackStrategy(new StabAttack());

// console.log("Using StabAttack: ")
// swordsman.attack(warlock);

// V3
// 使用初始化時的 BasisSword
console.log('Using BasicSword - MeleeAttack:');
swordsman.attack(warlock);

// 切換成匕首 Dagger
swordsman.equip(new Dagger());

console.log('Using Dagger - StabAttack:');
swordsman.attack(warlock);

// 切換成 BasicWand 會丟出例外，因為 Swordsman 不能使用
try {
    swordsman.equip(new BasicWand());
} catch (err) {
    console.log(err);
}