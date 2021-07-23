import { GameObject, TextRenderer, Vector2 } from "angry-pixel";

export class GameOver extends GameObject {
    constructor() {
        super();

        this.ui = true;
        this.layer = "UI";

        this.addComponent(
            () =>
                new TextRenderer({
                    text: "GAME OVER",
                    color: "#FFFFFF",
                    fontUrl: "font/PrStart.ttf",
                    fontFamily: "PrStart",
                    size: 24,
                    pivot: "center",
                })
        );
    }

    protected start(): void {
        this.transform.position = new Vector2(0, 0);
    }
}
