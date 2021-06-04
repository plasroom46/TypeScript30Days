// characters/Character
import Attack from '../abilities/Attack';
import Role from './Role';

export default class Character {

    // // v1
    // constructor(
    //     public readonly name: string,
    //     public readonly role: Role) { }

    // v2
    constructor(
        public readonly name: string,
        public readonly role: Role,
        // 新增一個針對 Attack 功能的參考成員
        private attackRef:Attack
        ) { }
    

    public introduce() {
        console.log(`
      Hi, I'm ${this.name} the ${this.role}!
    `);
    }

    // // v1
    // // 父類別新增 Attack 方法
    // public attack(target:Character){
    //     console.log(`${this.name} attacks ${target.name} using sword`);
    // }

    // 將角色的攻擊能力藉由參考點連結的策略進行實現的動作
    public attack(target: Character) {
        // 別忘了，第一個參數要指定攻擊者，此時的攻擊者是自己
        // 第二個參數則是被攻擊者，所以是 target
        this.attackRef.attack(this, target);
    }

    
  // 對攻擊的策略進行更換
  public switchAttackStrategy(type: Attack) {
    this.attackRef = type;
  }
}
