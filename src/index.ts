import { Game, Rectangle, CollisionMethodConfig, GameConfig, Vector2 } from "mini-engine";
import { GameScene } from "./scene/GameScene";
import { StartScene } from "./scene/StartScene";
import { LoadingScene } from "./scene/LoadingScene";

export const random = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;

const containerElement = document.getElementById("app");

const config: GameConfig = {
    containerNode: containerElement,
    gameWidth: 512,
    gameHeight: 840,
    debugEnabled: false,
    spriteDefaultScale: new Vector2(2, 2),
    collisions: {
        debugQuadTree: true,
        quadTreeBounds: new Rectangle(-260, -450, 520, 900),
        method: CollisionMethodConfig.AABB,
    },
};

// Create the Game
const game = new Game(config);

// Add a scene
game.addScene("LoadingScene", () => new LoadingScene(), true);
game.addScene("StartScene", () => new StartScene());
game.addScene("GameScene", () => new GameScene());

// Run the game
game.run();
