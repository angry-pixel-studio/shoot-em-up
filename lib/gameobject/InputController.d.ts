import { GameObject, Vector2 } from "angry-pixel";
export declare class InputController extends GameObject {
    axes: Vector2;
    fire: boolean;
    pause: boolean;
    mute: boolean;
    enter: boolean;
    quit: boolean;
    private readonly keyboard;
    private readonly gamepad;
    protected update(): void;
    private updateGamepad;
}
