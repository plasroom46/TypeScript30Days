import MeleeAttack from "../abilities/MeleeAttack";
import BasicSword from "../weapons/BasicSwords";
import Character from "./Character";
import Role from "./Role";


export default class Swordsman extends Character {
    constructor(name:string){
        super(name,Role.Swordsman,
            // // V2
            // // 選擇直接攻擊策略!
            // new MeleeAttack()

            // V3
            // 選擇初始化的武器！
            new BasicSword()
            );
    }
}