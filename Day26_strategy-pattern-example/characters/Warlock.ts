import MagicAttack from "../abilities/MagicAttack";
import BasicWand from "../weapons/BasicWand";
import Character from "./Character";
import Role from "./Role";

export default class Warlock extends Character {
    constructor(name: string) {
        super(name, Role.Warlock,
            // // V2
            // // 選擇魔法攻擊策略!
            // new MagicAttack()

            // V3
            // 選擇初始化的武器！
            new BasicWand()
        );
    }

    // // V1
    // public attack(target:Character){
    //     console.log(`${this.name} casts magic and pierced through ${target.name}!`);
    // }
}