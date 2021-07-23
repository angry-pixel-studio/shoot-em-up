import { GameObject } from "angry-pixel";
export declare class PlayerProjectile extends GameObject {
    private spriteRenderer;
    private animator;
    private collider;
    private playerWeapon;
    fire: boolean;
    private position;
    private velocity;
    constructor();
    protected start(): void;
    protected update(): void;
}
