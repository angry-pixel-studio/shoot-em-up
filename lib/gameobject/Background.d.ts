import { GameObject } from "angry-pixel";
export declare class Background extends GameObject {
    private readonly position;
    private readonly moveSpeed;
    private readonly startPosition;
    private readonly endPosition;
    constructor();
    protected update(): void;
}
