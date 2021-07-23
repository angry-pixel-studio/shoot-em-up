import {
    AssetManager,
    GameObject,
    SceneManager,
    Sprite,
    SpriteRenderer,
    TextRenderer,
    TimeManager,
    Vector2,
} from "angry-pixel";
import { InputController } from "../InputController";

const text = `PRESS ENTER TO START
PRESS Q TO QUIT
            
Movements: Arrows
Fire     : F
Pause    : P
Music    : M
`;

export class StartMenu extends GameObject {
    private inputController: InputController;
    private spriteRenderer: SpriteRenderer;
    private starting: boolean = false;

    constructor() {
        super();

        this.ui = true;

        this.spriteRenderer = this.addComponent(
            () =>
                new SpriteRenderer({
                    sprite: new Sprite({
                        image: AssetManager.getImage("image/ship.png"),
                        slice: { x: 32, y: 0, width: 16, height: 24 },
                        smooth: false,
                        scale: new Vector2(4, 4),
                    }),
                    offset: new Vector2(0, 200),
                })
        );

        this.addComponent(
            () =>
                new TextRenderer({
                    color: "#FFFFFF",
                    text: text,
                    fontUrl: "font/PrStart.ttf",
                    fontFamily: "PrStart",
                    size: 18,
                    lineSeparation: 4,
                    pivot: "center",
                })
        );
    }

    protected start(): void {
        this.inputController = this.findGameObjectByName("InputController");
        this.transform.position = new Vector2(0, 0);
    }

    protected update(): void {
        this.spriteRenderer.rotation.degrees += TimeManager.deltaTime * 200;

        if (this.starting === false && this.inputController.enter) {
            this.starting = true;

            SceneManager.loadScene("GameScene");
            return;
        }

        if (this.inputController.quit) {
            // this.getCurrentScene().game.stop();
            window.close();
        }
    }
}
