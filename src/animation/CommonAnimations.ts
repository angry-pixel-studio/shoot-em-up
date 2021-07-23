import { Animation, AssetManager, Sprite, Vector2 } from "angry-pixel";

export const explosionAnimation = (): Animation =>
    new Animation({
        loop: false,
        speed: 0.5,
        sprites: [0, 16, 32, 48, 64].map<Sprite>(
            (x: number) =>
                new Sprite({
                    image: AssetManager.getImage("image/explosion.png"),
                    slice: { x: x, y: 0, width: 16, height: 16 },
                    smooth: false,
                })
        ),
    });
