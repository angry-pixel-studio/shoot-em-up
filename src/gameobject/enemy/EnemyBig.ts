import { BoxCollider, Vector2 } from "angry-pixel";
import { enemyBigAnimation } from "../../animation/EnemyAnimations";
import { EnemyMovements } from "../../component/enemy/EnemyMovements";
import { Enemy } from "./Enemy";

export class EnemyBig extends Enemy {
    constructor(x: number, y: number) {
        super(x, y, "big", 100);

        this.animator.addAnimation("Fly", enemyBigAnimation());

        this.collider = this.addComponent(
            () =>
                new BoxCollider({
                    width: 64,
                    height: 64,
                    debug: true,
                    physics: false,
                })
        );

        this.addComponent(() => new EnemyMovements(300));
    }
}
