import { Component } from "mini-engine";
import { PlayerProjectile } from "../../gameobject/player/PlayerProjectile";
export declare class PlayerWeapon extends Component {
    private gameController;
    private playerStatus;
    private inputController;
    private audioPlayer;
    private projectiles;
    private fireAudio;
    private fire;
    protected start(): void;
    private setupProjectiles;
    protected update(): void;
    restoreProjectile(projectile: PlayerProjectile): void;
}
