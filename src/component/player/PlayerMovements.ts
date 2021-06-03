import { Component, TimeManager, Vector2 } from "mini-engine";
import { InputController } from "../../gameobject/InputController";
import { PlayerStatus } from "./PlayerStatus";

export class PlayerMovements extends Component {
    private playerStatus: PlayerStatus;
    private inputController: InputController;

    private speed: number = 400;

    private velocity: Vector2 = new Vector2();
    private position: Vector2 = new Vector2();

    protected start(): void {
        this.playerStatus = this.getComponentByName("PlayerStatus");
        this.inputController = this.findGameObjectByName("InputController");
    }

    protected update(): void {
        if (this.playerStatus.alive === false) return;

        Vector2.scale(this.velocity, this.inputController.axes, this.speed * TimeManager.deltaTime);

        this.gameObject.transform.position = Vector2.add(
            this.position,
            this.gameObject.transform.position,
            this.velocity
        );
    }
}
