import { AssetManager, GameObject, Sprite, SpriteRenderer, TimeManager, Vector2 } from "mini-engine";

export class Background extends GameObject {
    private readonly position: Vector2 = new Vector2();
    private readonly moveSpeed: number = 240;
    private readonly startPosition: number = 396;
    private readonly endPosition: number = -148;

    constructor() {
        super();

        this.layer = "Background";

        this.addComponent(
            () =>
                new SpriteRenderer({
                    sprite: new Sprite({
                        image: AssetManager.getImage("image/desert-backgorund.png"),
                        smooth: false,
                    }),
                    tiled: new Vector2(1, 3),
                })
        );

        this.position.y = this.startPosition;
    }

    protected update(): void {
        this.position.y -= this.moveSpeed * TimeManager.deltaTime;

        if (this.position.y <= this.endPosition) {
            this.position.y = this.startPosition;
        }

        this.transform.position = this.position;
    }
}
