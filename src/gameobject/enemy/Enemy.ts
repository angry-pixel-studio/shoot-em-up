import { Animator, AssetManager, AudioPlayer, BoxCollider, GameObject, SpriteRenderer, Vector2 } from "angry-pixel";
import { explosionAnimation } from "../../animation/CommonAnimations";
import { GameController } from "../GameController";
import { EnemySpawner, ENEMY_RESTORE_Y } from "./EnemySpawner";

export type EnemyType = "small" | "medium" | "big";

export class Enemy extends GameObject {
    public collider: BoxCollider;

    protected gameController: GameController;
    protected enemySpawner: EnemySpawner;
    protected spriteRenderer: SpriteRenderer;
    protected animator: Animator;
    private audioPlayer: AudioPlayer;

    private explosionAudio: HTMLAudioElement = AssetManager.getAudio("audio/enemy-explosion.mp3");

    protected position: Vector2 = new Vector2();
    protected dead: boolean = false;

    public readonly type: EnemyType;
    public readonly score: number;

    constructor(x: number, y: number, type: EnemyType, score: number) {
        super();

        this.layer = "Enemy";
        this.type = type;
        this.score = score;

        this.spriteRenderer = this.addComponent(() => new SpriteRenderer());

        this.animator = this.addComponent<Animator>(
            () =>
                new Animator({
                    spriteRenderer: this.spriteRenderer,
                })
        ).addAnimation("Explosion", explosionAnimation());

        this.audioPlayer = this.addComponent(() => new AudioPlayer({ volume: 1 }));

        this.position.set(x, y);
    }

    protected start(): void {
        this.gameController = this.findGameObjectByName("GameController");
        this.enemySpawner = this.findGameObjectByName("EnemySpawner");
        this.animator.playAnimation("Fly");
    }

    protected update(): void {
        if (this.dead === false && this.transform.position.y <= ENEMY_RESTORE_Y) {
            this.enemySpawner.restoreEnemy(this);
        }

        if (this.dead === false && this.collider.collidesWithLayer("PlayerProjectile")) {
            this.collider.setActive(false);
            this.animator.playAnimation("Explosion");
            this.audioPlayer.playAudio(this.explosionAudio);
            this.dead = true;
            this.gameController.score += this.score;
        }

        if (this.dead && this.animator.isPlayingAnimation("Explosion") === false) {
            this.enemySpawner.restoreEnemy(this);
        }
    }

    public respawn(): void {
        this.dead = false;
        this.collider.setActive(true);
        this.animator.playAnimation("Fly");
    }
}
