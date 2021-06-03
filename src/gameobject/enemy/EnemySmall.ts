import { BoxCollider } from "mini-engine";
import { enemySmallAnimation } from "../../animation/EnemyAnimations";
import { EnemyMovements } from "../../component/enemy/EnemyMovements";
import { Enemy } from "./Enemy";

export class EnemySmall extends Enemy {
    constructor(x: number, y: number) {
        super(x, y, "small", 25);

        this.animator.addAnimation("Fly", enemySmallAnimation());

        this.collider = this.addComponent(
            () =>
                new BoxCollider({
                    width: 32,
                    height: 32,
                    debug: true,
                    physics: false,
                })
        );

        this.addComponent(() => new EnemyMovements(500, true));
    }
}
