import StabAttack from './abilities/StabAttack';
import Swordsman from './characters/Swordsman';
import Warlock from './characters/Warlock';

// // First
// import Character from './characters/Character';
// import Role from './characters/Role';

// const swordsman= new Character('Maxwell',Role.Swordsman);
// swordsman.introduce();


const swordsman=new Swordsman('Maxwell');
const warlock=new Warlock('Martin');

// swordsman.introduce();
// warlock.introduce();


// console.log("Swordsman attacking the warlock: ");
// swordsman.attack(warlock);

// console.log("Warlock attacking the swordsman: ");
// warlock.attack(swordsman);

console.log("Using MeleeAttack: ")
swordsman.attack(warlock);

// Switch to StabAttack
swordsman.switchAttackStrategy(new StabAttack());

console.log("Using StabAttack: ")
swordsman.attack(warlock);