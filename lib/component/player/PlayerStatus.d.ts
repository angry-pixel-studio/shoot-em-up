import { Component } from "mini-engine";
export declare class PlayerStatus extends Component {
    private collider;
    private animator;
    private spriteRenderer;
    private audioPlayer;
    private explosionAudio;
    alive: boolean;
    invulnerable: boolean;
    lifes: number;
    private respawning;
    private respawnTimer;
    private invulnerabilityTimer;
    protected start(): void;
    protected update(): void;
    private getHit;
    private respawn;
    private getAlive;
    private getInvulnerable;
}
