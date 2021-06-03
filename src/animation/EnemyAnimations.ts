import { Animation, AssetManager, Sprite, Vector2 } from "mini-engine";

export const enemySmallAnimation = (): Animation =>
    new Animation({
        loop: true,
        speed: 0.5,
        sprites: [0, 16].map<Sprite>(
            (x: number) =>
                new Sprite({
                    image: AssetManager.getImage("image/enemy-small.png"),
                    slice: { x: x, y: 0, width: 16, height: 16 },
                    smooth: false,
                })
        ),
    });

export const enemyMediumAnimation = (): Animation =>
    new Animation({
        loop: true,
        speed: 0.5,
        sprites: [0, 32].map<Sprite>(
            (x: number) =>
                new Sprite({
                    image: AssetManager.getImage("image/enemy-medium.png"),
                    slice: { x: x, y: 0, width: 32, height: 16 },
                    smooth: false,
                })
        ),
    });

export const enemyBigAnimation = (): Animation =>
    new Animation({
        loop: true,
        speed: 0.5,
        sprites: [0, 32].map<Sprite>(
            (x: number) =>
                new Sprite({
                    image: AssetManager.getImage("image/enemy-big.png"),
                    slice: { x: x, y: 0, width: 32, height: 32 },
                    smooth: false,
                })
        ),
    });
