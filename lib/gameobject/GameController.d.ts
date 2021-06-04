import { GameObject } from "mini-engine";
export declare class GameController extends GameObject {
    private inputController;
    private gameOverUI;
    private playerStatus;
    private audioPlayer;
    private muting;
    private muted;
    score: number;
    private pausing;
    paused: boolean;
    private restarting;
    private restartTimer;
    constructor();
    protected start(): void;
    protected update(): void;
    private pause;
    private mute;
    private restart;
}
