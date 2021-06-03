import { AssetManager, Scene, SceneManager } from "mini-engine";
import { Loading } from "../gameobject/startScene/Loading";

export class LoadingScene extends Scene {
    constructor() {
        super();

        AssetManager.createImage("image/desert-backgorund.png");
        AssetManager.createImage("image/ship.png");
        AssetManager.createImage("image/enemy-small.png");
        AssetManager.createImage("image/enemy-medium.png");
        AssetManager.createImage("image/enemy-big.png");
        AssetManager.createImage("image/laser-bolts.png");
        AssetManager.createImage("image/explosion.png");
        AssetManager.createAudio("audio/spaceship-shooter.mp3");
        AssetManager.createAudio("audio/player-weapon.mp3");
        AssetManager.createAudio("audio/player-explosion.mp3");
        AssetManager.createAudio("audio/enemy-explosion.mp3");
    }

    protected start(): void {
        this.addGameObject(() => new Loading(), "LoadingUI");
    }

    protected update(): void {
        if (AssetManager.getAssetsLoaded()) {
            SceneManager.loadScene("StartScene");
        }
    }
}
