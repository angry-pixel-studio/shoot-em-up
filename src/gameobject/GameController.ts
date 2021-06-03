import { AssetManager, AudioPlayer, GameObject, SceneManager, TimeManager } from "mini-engine";
import { PlayerStatus } from "../component/player/PlayerStatus";
import { InputController } from "./InputController";
import { GameOver } from "./ui/GameOver";

const restartDelay = 5;

export class GameController extends GameObject {
    private inputController: InputController;
    private gameOverUI: GameOver;
    private playerStatus: PlayerStatus;

    private audioPlayer: AudioPlayer;
    private muting: boolean = false;
    private muted: boolean = true;

    public score: number = 0;

    private pausing: boolean = false;
    public paused: boolean = false;

    private restarting: boolean = false;
    private restartTimer: number = 0;

    constructor() {
        super();

        this.audioPlayer = this.addComponent(
            () =>
                new AudioPlayer({
                    audio: AssetManager.getAudio("audio/spaceship-shooter.mp3"),
                    loop: true,
                    volume: 0.5,
                })
        );
    }

    protected start(): void {
        this.inputController = this.findGameObjectByName("InputController");
        this.playerStatus = this.findGameObjectByName("Player").getComponentByName("PlayerStatus");

        this.gameOverUI = this.findGameObjectByName("GameOverUI");
        this.gameOverUI.setActive(false);

        this.pausing = true;
        if (this.muted === false) this.audioPlayer.play();
    }

    protected update(): void {
        if (this.playerStatus.lifes === 0) {
            this.gameOverUI.setActive(true);
            this.restarting = true;
        }

        this.pause();
        this.mute();
        this.restart();
    }

    private pause(): void {
        if (this.pausing === false && this.inputController.pause) {
            this.paused = !this.paused;
            TimeManager.setTimeScale(this.paused ? 0 : 1);
            this.paused ? this.audioPlayer.pause() : this.muted === false ? this.audioPlayer.play() : null;
        }

        this.pausing = this.inputController.pause;
    }

    private mute(): void {
        if (this.paused) return;

        if (this.muting === false && this.inputController.mute) {
            this.muted = !this.muted;
            this.muted ? this.audioPlayer.stop() : this.audioPlayer.play();
        }

        this.muting = this.inputController.mute;
    }

    private restart(): void {
        if (this.restarting === false) return;

        this.restartTimer += TimeManager.deltaTime;

        if (this.restartTimer >= restartDelay) {
            SceneManager.loadScene("StartScene");
        }
    }
}
