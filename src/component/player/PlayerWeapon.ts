import { AssetManager, AudioPlayer, Component, GameObjectManager, TYPE_AUDIO_PLAYER } from "mini-engine";
import { GameController } from "../../gameobject/GameController";
import { InputController } from "../../gameobject/InputController";
import { PlayerProjectile } from "../../gameobject/player/PlayerProjectile";
import { PlayerStatus } from "./PlayerStatus";

const maxProjectiles = 50;

export class PlayerWeapon extends Component {
    private gameController: GameController;
    private playerStatus: PlayerStatus;
    private inputController: InputController;
    private audioPlayer: AudioPlayer;
    private projectiles: PlayerProjectile[] = [];

    private fireAudio: HTMLAudioElement = AssetManager.getAudio("audio/player-weapon.mp3");
    private fire: boolean = false;

    protected start(): void {
        this.gameController = this.findGameObjectByName("GameController");
        this.playerStatus = this.getComponentByName("PlayerStatus");
        this.inputController = this.findGameObjectByName("InputController");
        this.audioPlayer = this.getComponentByType(TYPE_AUDIO_PLAYER);
        this.setupProjectiles();
    }

    private setupProjectiles(): void {
        for (let i = 0; i < maxProjectiles; i++) {
            const projectile = GameObjectManager.addGameObject<PlayerProjectile>(
                () => new PlayerProjectile(),
                `PlayerProjectile${i}`
            );
            projectile.setActive(false);

            this.projectiles.push(projectile);
        }
    }

    protected update(): void {
        if (this.gameController.paused) return;

        if (this.playerStatus.alive === false || this.projectiles.length === 0) return;

        if (this.fire === false && this.inputController.fire) {
            const projectile = this.projectiles.pop();
            projectile.setActive(true);
            projectile.transform.position = this.gameObject.transform.position;
            projectile.fire = true;

            this.audioPlayer.playAudio(this.fireAudio, 0.1);
        }

        this.fire = this.inputController.fire;
    }

    public restoreProjectile(projectile: PlayerProjectile): void {
        projectile.setActive(false);
        projectile.fire = false;

        this.projectiles.push(projectile);
    }
}
