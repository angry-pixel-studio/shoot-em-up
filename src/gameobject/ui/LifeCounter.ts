import { AssetManager, GameObject, Sprite, SpriteRenderer, Vector2 } from "angry-pixel";
import { PlayerStatus } from "../../component/player/PlayerStatus";

export class LifeCounter extends GameObject {
    private playerStatus: PlayerStatus;
    private spriteRenderer: SpriteRenderer;

    constructor() {
        super();

        this.ui = true;
        this.layer = "UI";

        this.spriteRenderer = this.addComponent(
            () =>
                new SpriteRenderer({
                    sprite: new Sprite({
                        image: AssetManager.getImage("image/ship.png"),
                        slice: { x: 32, y: 0, width: 16, height: 24 },
                        smooth: false,
                        scale: new Vector2(1.5, 1.5),
                    }),
                    tiled: new Vector2(3, 1),
                })
        );
    }

    protected start(): void {
        this.playerStatus = this.findGameObjectByName("Player").getComponentByName("PlayerStatus");
        this.transform.position = new Vector2(180, 360);
    }
    protected update(): void {
        this.spriteRenderer.tiled.set(this.playerStatus.lifes, 1);
    }
}
