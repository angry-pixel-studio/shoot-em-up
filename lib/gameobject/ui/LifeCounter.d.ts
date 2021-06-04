import { GameObject } from "mini-engine";
export declare class LifeCounter extends GameObject {
    private playerStatus;
    private spriteRenderer;
    constructor();
    protected start(): void;
    protected update(): void;
}
