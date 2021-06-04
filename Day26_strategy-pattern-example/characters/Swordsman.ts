import MeleeAttack from "../abilities/MeleeAttack";
import Character from "./Character";
import Role from "./Role";


export default class Swordsman extends Character {
    constructor(name:string){
        super(name,Role.Swordsman,
            // 選擇直接攻擊策略!
            new MeleeAttack()
            );
    }
}