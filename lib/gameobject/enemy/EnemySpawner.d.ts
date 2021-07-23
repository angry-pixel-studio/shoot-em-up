import { GameObject } from "angry-pixel";
import { Enemy } from "./Enemy";
export declare const ENEMY_RESTORE_Y: number;
export declare class EnemySpawner extends GameObject {
    private pool;
    private timer;
    private spawnPosition;
    constructor();
    protected start(): void;
    private addEnemyToPool;
    protected update(): void;
    private updateTimers;
    private spawn;
    restoreEnemy(enemy: Enemy): void;
}
