import { Scene } from "mini-engine";
import { Background } from "../gameobject/Background";
import { EnemySpawner } from "../gameobject/enemy/EnemySpawner";
import { GameController } from "../gameobject/GameController";
import { InputController } from "../gameobject/InputController";
import { Player } from "../gameobject/player/Player";
import { StageBounds } from "../gameobject/StageBounds";
import { LifeCounter } from "../gameobject/ui/LifeCounter";
import { Score } from "../gameobject/ui/Score";
import { GameOver } from "../gameobject/ui/GameOver";
import { SpotPointer } from "../gameobject/SpotPointer";

export class GameScene extends Scene {
    // Executed in the first frame of the scene
    protected start(): void {
        this.gameCamera.layers = ["Background", "StageBounds", "PlayerProjectile", "Player", "Enemy", "QuadTree", "UI"];

        this.addGameObject(() => new InputController(), "InputController");
        this.addGameObject(() => new Background(), "Background");
        this.addGameObject(() => new StageBounds(), "StageBounds");
        this.addGameObject(() => new Player(), "Player");
        this.addGameObject(() => new EnemySpawner(), "EnemySpawner");
        this.addGameObject(() => new GameController(), "GameController");

        this.addGameObject(() => new Score(), "ScoreUI");
        this.addGameObject(() => new LifeCounter(), "LifeCounterUI");
        this.addGameObject(() => new GameOver(), "GameOverUI");
    }
}
