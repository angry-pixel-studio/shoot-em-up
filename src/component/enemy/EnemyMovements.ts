import { Component, TimeManager, Vector2, random } from "mini-engine";
import { Enemy } from "../../gameobject/enemy/Enemy";

export class EnemyMovements extends Component {
    private readonly speed: number;
    private readonly zigzag: boolean;

    private direction: Vector2 = new Vector2(0, -1);
    private velocity: Vector2 = new Vector2();
    private position: Vector2 = new Vector2();

    constructor(speed: number, zigzag: boolean = false) {
        super();

        this.speed = speed;
        this.zigzag = zigzag;
    }

    protected start(): void {
        if (this.zigzag) {
            this.direction.x = random(-1, 1);
        }
    }

    protected update(): void {
        if (this.zigzag) {
            this.applyZigzag();
        }

        Vector2.scale(this.velocity, this.direction, this.speed * TimeManager.deltaTime);

        this.gameObject.transform.position = Vector2.add(
            this.position,
            this.gameObject.transform.position,
            this.velocity
        );
    }

    private applyZigzag(): void {
        const collision = (this.gameObject as Enemy).collider.getCollisionWithLayer("StageBounds");
        if (collision && collision.collisionData.displacementDirection.x !== 0) {
            this.direction.x = collision.collisionData.displacementDirection.x;
        }
    }
}
