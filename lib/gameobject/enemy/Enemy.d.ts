import { Animator, BoxCollider, GameObject, SpriteRenderer, Vector2 } from "angry-pixel";
import { GameController } from "../GameController";
import { EnemySpawner } from "./EnemySpawner";
export declare type EnemyType = "small" | "medium" | "big";
export declare class Enemy extends GameObject {
    collider: BoxCollider;
    protected gameController: GameController;
    protected enemySpawner: EnemySpawner;
    protected spriteRenderer: SpriteRenderer;
    protected animator: Animator;
    private audioPlayer;
    private explosionAudio;
    protected position: Vector2;
    protected dead: boolean;
    readonly type: EnemyType;
    readonly score: number;
    constructor(x: number, y: number, type: EnemyType, score: number);
    protected start(): void;
    protected update(): void;
    respawn(): void;
}
