import { GameObject, GameObjectManager, TimeManager, TYPE_BOX_COLLIDER, Vector2, random } from "angry-pixel";
import { EnemyBig } from "./EnemyBig";
import { EnemyMedium } from "./EnemyMedium";
import { EnemySmall } from "./EnemySmall";
import { Enemy, EnemyType } from "./Enemy";

const difficulty: 1 | 2 | 3 | 4 = 2;

const maxEnemies: number = 10;
const period = {
    small: 0.8 / difficulty,
    medium: 1.6 / difficulty,
    big: 3.6 / difficulty,
};
const spawnY: number = 428;
const spawnX: number[] = [-200, 200];

type Pool = {
    small: Enemy[];
    medium: Enemy[];
    big: Enemy[];
};

type Timer = {
    small: number;
    medium: number;
    big: number;
};

export const ENEMY_RESTORE_Y: number = -428;

export class EnemySpawner extends GameObject {
    private pool: Pool;
    private timer: Timer;
    private spawnPosition: Vector2 = new Vector2(0, spawnY);

    constructor() {
        super();

        this.pool = {
            small: [],
            medium: [],
            big: [],
        };

        this.timer = {
            small: 0,
            medium: 0,
            big: 0,
        };
    }

    protected start(): void {
        for (let i = 0; i < maxEnemies; i++) {
            this.addEnemyToPool(GameObjectManager.addGameObject(() => new EnemySmall(0, 0), `EnemySmall${i}`));
            this.addEnemyToPool(GameObjectManager.addGameObject(() => new EnemyMedium(0, 0), `EnemyMedium${i}`));
            this.addEnemyToPool(GameObjectManager.addGameObject(() => new EnemyBig(0, 0), `EnemyBig${i}`));
        }
    }

    private addEnemyToPool(enemy: Enemy): void {
        enemy.setActive(false);
        this.pool[enemy.type].push(enemy);
    }

    protected update(): void {
        this.updateTimers();

        this.spawn("small");
        this.spawn("medium");
        this.spawn("big");
    }

    private updateTimers(): void {
        this.timer.small += TimeManager.deltaTime;
        this.timer.medium += TimeManager.deltaTime;
        this.timer.big += TimeManager.deltaTime;
    }

    private spawn(type: EnemyType): void {
        if (this.timer[type] < period[type]) return;

        this.timer[type] = 0;

        if (this.pool[type].length === 0) return;

        this.spawnPosition.x = random(spawnX[0], spawnX[1]);

        const enemy = this.pool[type].pop();
        enemy.transform.position = this.spawnPosition;
        enemy.setActive(true);
        enemy.respawn();
    }

    public restoreEnemy(enemy: Enemy): void {
        enemy.setActive(false);
        this.pool[enemy.type].push(enemy);
    }
}
