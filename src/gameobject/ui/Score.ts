import { GameObject, TextRenderer, Vector2 } from "angry-pixel";
import { GameController } from "../GameController";

export class Score extends GameObject {
    private gameController: GameController;
    private textRenderer: TextRenderer;

    constructor() {
        super();

        this.ui = true;
        this.layer = "UI";

        this.textRenderer = this.addComponent(
            () =>
                new TextRenderer({
                    text: "00000000",
                    color: "#FFFFFF",
                    fontUrl: "font/PrStart.ttf",
                    fontFamily: "PrStart",
                    size: 20,
                })
        );
    }

    protected start(): void {
        this.gameController = this.findGameObjectByName("GameController");
        this.transform.position = new Vector2(-220, 360);
    }
    protected update(): void {
        this.textRenderer.text = this.gameController.score.toString();
    }
}
