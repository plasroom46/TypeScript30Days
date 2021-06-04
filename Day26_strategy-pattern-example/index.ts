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

console.log("Swordsman attacking the warlock: ");
swordsman.attack(warlock);

console.log("Warlock attacking the swordsman: ");
warlock.attack(swordsman);