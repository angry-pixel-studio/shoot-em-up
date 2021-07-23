import { Animation, AssetManager, Sprite, Vector2 } from "angry-pixel";

export const playerFly = (): Animation =>
    new Animation({
        loop: true,
        speed: 0.5,
        sprites: [0, 24].map<Sprite>(
            (y: number) =>
                new Sprite({
                    image: AssetManager.getImage("image/ship.png"),
                    slice: { x: 32, y: y, width: 16, height: 24 },
                    smooth: false,
                })
        ),
    });
