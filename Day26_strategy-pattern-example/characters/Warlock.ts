import MagicAttack from "../abilities/MagicAttack";
import Character from "./Character";
import Role from "./Role";

export default class Warlock extends Character {
    constructor(name: string) {
        super(name, Role.Warlock,
            // 選擇魔法攻擊策略!
            new MagicAttack()
            );
    }

    // // V1
    // public attack(target:Character){
    //     console.log(`${this.name} casts magic and pierced through ${target.name}!`);
    // }
}