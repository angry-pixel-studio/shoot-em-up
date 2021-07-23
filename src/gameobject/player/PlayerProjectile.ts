import {
    Animation,
    Animator,
    AssetManager,
    BoxCollider,
    GameObject,
    Sprite,
    SpriteRenderer,
    TimeManager,
    Vector2,
} from "angry-pixel";
import { PlayerWeapon } from "../../component/player/PlayerWeapon";

const PROJECTILE_SPEED = 600;

export class PlayerProjectile extends GameObject {
    private spriteRenderer: SpriteRenderer;
    private animator: Animator;
    private collider: BoxCollider;
    private playerWeapon: PlayerWeapon;

    public fire: boolean = false;
    private position: Vector2 = new Vector2();
    private velocity: Vector2 = new Vector2();

    constructor() {
        super();

        this.layer = "PlayerProjectile";
        this.spriteRenderer = this.addComponent(() => new SpriteRenderer());

        this.animator = this.addComponent<Animator>(
            () => new Animator({ spriteRenderer: this.spriteRenderer })
        ).addAnimation(
            "Default",
            new Animation({
                loop: true,
                speed: 0.5,
                sprites: [0, 16].map(
                    (x: number) =>
                        new Sprite({
                            image: AssetManager.getImage("image/laser-bolts.png"),
                            smooth: false,
                            slice: { x: x, y: 16, width: 16, height: 16 },
                        })
                ),
            })
        );

        this.collider = this.addComponent(
            () =>
                new BoxCollider({
                    width: 20,
                    height: 32,
                    physics: false,
                    debug: true,
                })
        );
    }

    protected start(): void {
        this.playerWeapon = this.findGameObjectByName("Player").getComponentByName("PlayerWeapon");

        this.animator.playAnimation("Default");
    }

    protected update(): void {
        if (this.fire) {
            this.velocity.y = PROJECTILE_SPEED * TimeManager.deltaTime;
            this.transform.position = Vector2.add(this.position, this.transform.position, this.velocity);
        }

        if (this.collider.collidesWithLayer("StageBounds")) {
            this.playerWeapon.restoreProjectile(this);
        }

        if (this.collider.collidesWithLayer("Enemy")) {
            this.playerWeapon.restoreProjectile(this);
        }
    }
}
