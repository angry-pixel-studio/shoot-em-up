import {
    Animator,
    AudioPlayer,
    BoxCollider,
    GameObject,
    RigidBody,
    RigidBodyType,
    SpriteRenderer,
    TYPE_RIGIDBODY,
    Vector2,
} from "angry-pixel";
import { explosionAnimation } from "../../animation/CommonAnimations";
import { playerFly } from "../../animation/PlayerAnimations";
import { PlayerStatus } from "../../component/player/PlayerStatus";
import { PlayerMovements } from "../../component/player/PlayerMovements";
import { PlayerWeapon } from "../../component/player/PlayerWeapon";

export class Player extends GameObject {
    private spriteRenderer: SpriteRenderer;

    constructor() {
        super();

        this.layer = "Player";

        this.spriteRenderer = this.addComponent(() => new SpriteRenderer());

        this.addComponent<Animator>(
            () =>
                new Animator({
                    spriteRenderer: this.spriteRenderer,
                })
        )
            .addAnimation("Fly", playerFly())
            .addAnimation("Explosion", explosionAnimation());

        this.addComponent(
            () =>
                new BoxCollider({
                    width: 32,
                    height: 48,
                    debug: true,
                })
        );

        this.addComponent(
            () =>
                new RigidBody({
                    rigidBodyType: RigidBodyType.Dynamic,
                    layersToCollide: ["StageBounds"],
                    gravity: 0,
                })
        );

        this.addComponent(() => new AudioPlayer());

        this.addComponent(() => new PlayerMovements(), "PlayerMovements");
        this.addComponent(() => new PlayerWeapon(), "PlayerWeapon");
        this.addComponent(() => new PlayerStatus(), "PlayerStatus");
    }
}
