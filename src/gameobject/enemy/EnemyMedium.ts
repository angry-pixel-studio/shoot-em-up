import { BoxCollider } from "mini-engine";
import { enemyMediumAnimation } from "../../animation/EnemyAnimations";
import { EnemyMovements } from "../../component/enemy/EnemyMovements";
import { Enemy } from "./Enemy";

export class EnemyMedium extends Enemy {
    constructor(x: number, y: number) {
        super(x, y, "medium", 50);

        this.animator.addAnimation("Fly", enemyMediumAnimation());

        this.collider = this.addComponent(
            () =>
                new BoxCollider({
                    width: 64,
                    height: 32,
                    debug: true,
                    physics: false,
                })
        );

        this.addComponent(() => new EnemyMovements(400, true));
    }
}
