import { AssetManager, Scene } from "angry-pixel";
import { InputController } from "../gameobject/InputController";
import { StartMenu } from "../gameobject/startScene/StartMenu";

export class StartScene extends Scene {
    protected start(): void {
        this.addGameObject(() => new InputController(), "InputController");
        this.addGameObject(() => new StartMenu(), "StartMenu");
    }
}
